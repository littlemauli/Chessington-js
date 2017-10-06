import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // The Knight piece can move forward, backward, left or right two squares and must then move one square in either perpendicular direction.
        // The Knight piece can only move to one of up to eight positions on the board.
        // The Knight piece can move to any position not already inhabited by another piece of the same color.
        // The Knight piece can skip over any other pieces to reach its destination position.
        let location = board.findPiece(this);
        let Array =[]
         
        function knightBaseMove (location){
        Array.push(Square.at(location.row+2, location.col+1))
        Array.push(Square.at(location.row-2, location.col-1))
        Array.push(Square.at(location.row+1, location.col+2))
        Array.push(Square.at(location.row+1, location.col-2))
        Array.push(Square.at(location.row-1, location.col+2))
        Array.push(Square.at(location.row-1, location.col-2))
        Array.push(Square.at(location.row-2, location.col+1))
        Array.push(Square.at(location.row-2, location.col-1))
        }

        function squareIsValid (element){
            if(element.row<8 && element.col<8){
                return element
            }
            
        }
    let finalArray = Array.filter(squareIsValid)

    return finalArray
    }
}
