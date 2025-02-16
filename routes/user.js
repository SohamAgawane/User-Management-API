const express = require("express");
const {handleGetAllUsers, getUserByID, updateUserByID, deleteUserByID, createNewUser} = require('../controllers/user');

const router = express.Router();

router
    .route('/')
    .get(handleGetAllUsers)
    .post(createNewUser);

router
    .route('/:id')
    .get(getUserByID)
    .patch(updateUserByID)
    .delete(deleteUserByID);

module.exports = router;