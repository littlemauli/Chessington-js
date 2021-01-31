import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // The bishop can move in any direction diagonally, so long as it is not obstructed by another piece.
        // The bishop piece cannot move past any piece that is obstructing its path.
        // The bishop can take any other piece on the board that is within its bounds of movement.

        let location = board.findPiece(this);
        let availableMoves = []
       

            for (let i = 1; location.row +i <8; i++) {
                 if(!this.possibleSquaresInOneDirection(Square.at(location.row+i, location.col+i), availableMoves, board)){
                      break
                 }
            }

            for (let i = 1; location.row - i >=0; i++) {
                if(!this.possibleSquaresInOneDirection(Square.at(location.row-i, location.col-i), availableMoves, board)){
                    break
               }
          }
              
            for (let i = 1; location.col + i < 8; i++) {
                if(!this.possibleSquaresInOneDirection(Square.at(location.row+i, location.col-i), availableMoves, board)){
                    break
               }
          }

            for (let i = 1; location.col - i >= 0; i++) {
                if(!this.possibleSquaresInOneDirection(Square.at(location.row-i, location.col+i), availableMoves, board)){
                    break
               }
          }
               
            let finalArray = availableMoves.filter(board.squareIsValid)
            console.log(finalArray)
            return finalArray
    }
}
