const User = require('../models/user');

async function handleGetAllUsers(req, res) {
        const allDbUsers = await User.find({});
        return res.json(allDbUsers);
}

async function getUserByID(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    return res.json(user);
}

async function updateUserByID(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status: "success" });
}

async function deleteUserByID(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
}

async function createNewUser(req, res) {
    const body = req.body; 
    if (!body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title) {
        return res.status(400).json({ msg: "All fields are required" })
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    console.log("result", result);

    return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
    handleGetAllUsers,
    getUserByID,
    updateUserByID,
    deleteUserByID,
    createNewUser,
}