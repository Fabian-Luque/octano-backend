import { Move } from "src/move/interfaces/move.interface";
import { Round } from "src/round/interfaces/round.interface";
import { User } from "../../user/interfaces/user.interface";


export class CreateGameDTO {
    readonly player1: User;
    readonly player2: User;
    readonly rounds: [Round];
    readonly winner: User;
}