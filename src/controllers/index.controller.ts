import { Request, Response } from 'express';
import { pool } from '../db/db';
import { QueryResult } from 'pg';


export const createUser = async (req: Request, res: Response) => {
     
   

   const { fullname, lastname,email,cellphone } = req.body;
   const response = await pool.query('INSERT INTO users (fullname,lastname,email,cellphone) VALUES ($1,$2,$3,$4)',
    [fullname,lastname,email,cellphone ]);
   res.json({
       message: 'Usuario registrado con éxito!',
       body: {
           user: { fullname, lastname,email,cellphone }
       }
   })
};



export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM users ORDER BY id ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    
    console.log('params: ');
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.json(response.rows);
};


export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { fullname, lastname,email,cellphone } = req.body;

    const response = await pool.query('UPDATE users SET fullname = $1, lastname = $2, email = $3, cellphone = $4 WHERE id = $5', [
        fullname, 
        lastname,
        email,
        cellphone,
        id
    ]);
    res.json('Usuario actualziado!');
};

export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`Userario con id ${id} eliminado!`);
};