import {Router} from 'express';
const router = Router();

import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/index.controller';


router.get('/', (req,res)=>res.send('Hello Geeks!'));

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser);

export default router; 