import mongoose, { Document, Schema, model } from "mongoose";

export interface ITodo extends Document {
    title: string;
    content: string;
    comment: string;
    task_period: Date;
    user_id: mongoose.Types.ObjectId;
}

const todoSchema: Schema = new Schema<ITodo>(
    {
        title: { type: String, required: true },
        content: { type: String, required: true, unique: true },
        comment: { type: String, required: true },
        task_period: { type: Date, required: true },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Todo = model<ITodo>("Todo", todoSchema);

export default Todo;
