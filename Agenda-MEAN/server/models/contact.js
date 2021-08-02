const mongoose = require("mongoose");
const { Schema } = mongoose;

// create Schema
const contactSchema = new Schema({
    group: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: false },
    telephone: { type: Number, required: true },
});

// Export
module.exports = mongoose.model("Contact", contactSchema);