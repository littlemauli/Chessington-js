import Piece from './piece';
import Square from '../square';

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
        let possibleLocations =[Square.at(location.row+1, location.col+2),
                                Square.at(location.row+1, location.col-2),
                                Square.at(location.row-1, location.col+2),
                                Square.at(location.row-1, location.col-2),
                                Square.at(location.row-2, location.col+1),
                                Square.at(location.row-2, location.col-1),
                                Square.at(location.row+2, location.col-1),
                                Square.at(location.row+2, location.col+1)               
                            ] 
        for(let i=0; i<possibleLocations.length; i++)
        {
            if((squareIsValid(possibleLocations[i])) &&(!board.getPiece(possibleLocations[i])))
            {
                Array.push(possibleLocations[i])
            }
        }


        function squareIsValid (element){
            if(element.row<8 && element.col<8 && element.row>=0 && element.col>=0){
                return element
            } 
        }
//     let finalArray = Array.filter(squareIsValid)
// console.log(finalArray)
    return Array
    }
}
