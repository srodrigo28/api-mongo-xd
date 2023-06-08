const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            "mongodb+srv://rodrigoexer1:2gDvCeKENORJmDxp@cluster0.2ilevle.mongodb.net/"
        );

        console.log("Conn: conectado ao banco!");
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
module.exports = main;