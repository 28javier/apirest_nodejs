const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({
    name: { type: String, required: true },
    album: { type: String },
    cover: { type: String, validate: { validator: (req) => { return true; }, msg: "Error Url" } },
    artist: {
        name: {
            type: String,
        },
        nickname: {
            type: String,
        },
        nationality: {
            type: String
        }
    },
    duration: {
        start: {
            type: Number
        },
        end: {
            type: Number
        }
    },
    status: { type: Boolean, default: true },
    mediaId: {
        type: Types.ObjectId
    }
}, {
    timestamps: true, //TODO: createdAt, updatedAt
    versionKey: false,
});

module.exports = model('Track', UserSchema);
