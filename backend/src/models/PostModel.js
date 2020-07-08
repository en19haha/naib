import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        cmtKey: {
            type: Date,
            required: true,
            index: true,
        },
        title: String,
        contents: String,

        createdBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Users',
            required: true,
        },
    },
    { timestamps: true }
);

postSchema.index({ Users: 1, cmtKey: 1, title: 1, contents: 1 }, { unique: true });
const PostModel = mongoose.model('Posts', postSchema);

export default PostModel;
