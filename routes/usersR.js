import express from "express";
import { deleteUser, getAllUsers, getUser, postUser, putUser } from "../ctrl/usersCtrl.js";

const router = express.Router();


router.get('/',getAllUsers);

router.post('/',postUser);

router.get('/:id',getUser);

router.put('/:id',putUser);

router.delete('/:id',deleteUser);

export default router;
