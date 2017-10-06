import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) { 
// The king piece can move one single square in any direction.
// The king cannot move onto a square that is currently occupied by a piece from its own team.
// The king piece cannot move to any square that puts them into a "check" position.
        return new Array(0);
    }
}
