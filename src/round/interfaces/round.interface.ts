import { Document } from "mongoose";
import { Move } from "src/move/interfaces/move.interface";
import { User } from "../../user/interfaces/user.interface";

export interface Round extends Document {
    readonly player1: User;
    readonly player2: User;
    readonly player1move: Move;
    readonly player2move: Move;
    readonly winer: User;
};