import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        // The queen can move in any direction on a straight or diagonal path.
        // The queen cannot "jump" over any piece on the board, so its movements are restricted to any direction of unoccupied squares.
        // The queen can be used to capture any of your opponent's pieces on the board.


        return new Array(0);
    }
}
