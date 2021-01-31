export default class Piece {
    constructor(player) {
        this.player = player;
        this.numberOfMoves =0
       
        
    }


    possibleSquaresInOneDirection(testSquare, availableMoves, board) {
        let testSquareContent = board.getPiece(testSquare); // what is on the square
        if (!testSquareContent) {
            availableMoves.push(testSquare)
        }
        else {
            if (this.player !== testSquareContent.player) {
                availableMoves.push(testSquare)
            }
            return false
        }
        return true
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
