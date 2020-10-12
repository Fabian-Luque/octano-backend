import { Document } from "mongoose";

export interface Move extends Document {
    readonly move: string;
    readonly kills: string;
    readonly createdAt: Date;
};