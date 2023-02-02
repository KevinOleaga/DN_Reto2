const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Reto2")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed");
    })


const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model("users", newSchema)

module.exports = collection