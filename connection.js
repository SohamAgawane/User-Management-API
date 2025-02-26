const mongoose = require("mongoose");

async function connectMongoDB(url) {
    return mongoose.connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch(() => console.log("Mongo Error", err));
}

module.exports = {
    connectMongoDB,
}