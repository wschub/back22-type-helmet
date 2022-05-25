"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const db_1 = require("../db/db");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullname, lastname, email, cellphone } = req.body;
    const response = yield db_1.pool.query('INSERT INTO users (fullname,lastname,email,cellphone) VALUES ($1,$2,$3,$4)', [fullname, lastname, email, cellphone]);
    res.json({
        message: 'Usuario registrado con éxito!',
        body: {
            user: { fullname, lastname, email, cellphone }
        }
    });
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.pool.query('SELECT * FROM users ORDER BY id ASC');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('params: ');
    const id = parseInt(req.params.id);
    const response = yield db_1.pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { fullname, lastname, email, cellphone } = req.body;
    const response = yield db_1.pool.query('UPDATE users SET fullname = $1, lastname = $2, email = $3, cellphone = $4 WHERE id = $5', [
        fullname,
        lastname,
        email,
        cellphone,
        id
    ]);
    res.json('Usuario actualziado!');
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield db_1.pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`Userario con id ${id} eliminado!`);
});
exports.deleteUser = deleteUser;
