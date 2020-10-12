import { Move } from "src/move/interfaces/move.interface";
import { User } from "../../user/interfaces/user.interface";


export class CreateRoundDTO {
    readonly player1: User;
    readonly player2: User;
    readonly player2move: Move;
    readonly player1move: Move;
    readonly winer: User;
}