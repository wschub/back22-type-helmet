"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet")); // Security
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
// middlewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use(index_1.default);
app.listen(3005);
console.log('Server on port', 3005);
