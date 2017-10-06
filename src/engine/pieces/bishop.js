import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // The bishop can move in any direction diagonally, so long as it is not obstructed by another piece.
        // The bishop piece cannot move past any piece that is obstructing its path.
        // The bishop can take any other piece on the board that is within its bounds of movement.

        let location = board.findPiece(this);
        let Array = []
       

            for (let i = 1; location.row +i <8; i++) {
                if(!!(this.board[location.row + i][location.col+i]) ){
                Array.push(Square.at(location.row + i, location.col+i))
                }else{
                    break
                }
            }
            for (let i = 1; location.row - i >=0; i--) {
                if(!!(this.board[location.row - i][location.col-i]) ){
                Array.push(Square.at(location.row - i, location.col-i))
                }else{
                    break
                }
                
            }
            for (let i = 1; location.col + i < 8; i++) {
                if(!!(this.board[location.row+i][location.col-i]) ){
                Array.push(Square.at(location.row+i, location.col - i))
                } else{
                    break
                }
            }
            for (let i = 1; location.col - i >= 0; i--) {
                if(!!(this.board[location.row-1][location.col+i]) ){
                Array.push(Square.at(location.row-1, location.col + i))
                } else{
                    break
                }
            }
            function squareIsValid (element){
                if(element.row<8 && element.col<8){
                    return element
                }
                
            }
        const finalArray = Array.filter(squareIsValid)

               
        return finalArray;
    }
}
