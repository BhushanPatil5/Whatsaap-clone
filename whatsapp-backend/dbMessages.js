import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema(
	{
		message: String,
		name: String,
        received: Boolean,
        timestamps: Boolean,
	},
);

export default mongoose.model("messages", messageSchema);