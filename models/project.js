const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    developerNeeded: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true } 
})

module.exports = mongoose.model('Project', ProjectSchema);