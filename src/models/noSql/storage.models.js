const {Schema, model} = require('mongoose');

const StorageSchema = new Schema({
        url: {type: String},
        filename: {type: String},
    },{
        timestamps: true, //TODO: createdAt, updatedAt
        versionKey: false,
});

module.exports = model('Storage', StorageSchema);
