export default class Piece {
    constructor(player) {
        this.player = player;
        this.numberOfMoves =0
        
    }
    
    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        this.numberOfMoves+=1
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
