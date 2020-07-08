import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
	{
		txt: {
			type: String,
			required: true,
			//trim: true,
			maxlength: 50,
		},
		userId: {
			type: String,
			required: true,
			//trim: true,
			maxlength: 50,
		},
	},
	{ timestamps: true },
);

commentSchema.index({ txt: 1,userId : 1}, { unique: true });
const CommentModel = mongoose.model('Comments', commentSchema);

export default CommentModel;
