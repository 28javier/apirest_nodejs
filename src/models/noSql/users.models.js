const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
        nombre: {type: String, required: true},
        edad: {type: Number, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        email: {type: String, enum: ['user', 'admin_user'], default: 'user'},
    },{
        timestamps: true, //TODO: createdAt, updatedAt
        versionKey: false,
});

module.exports = model('Usuario', UserSchema);
