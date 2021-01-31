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
        let availableMoves =[]
        let possibleLocations =[Square.at(location.row+1, location.col+2),
                                Square.at(location.row+1, location.col-2),
                                Square.at(location.row-1, location.col+2),
                                Square.at(location.row-1, location.col-2),
                                Square.at(location.row-2, location.col+1),
                                Square.at(location.row-2, location.col-1),
                                Square.at(location.row+2, location.col-1),
                                Square.at(location.row+2, location.col+1)               
                            ] 
        let screenedPossibleLocation = possibleLocations.filter(board.squareIsValid)

        for(let i=0; i<screenedPossibleLocation.length; i++)
        {
            this.possibleSquaresInOneDirection(screenedPossibleLocation[i], availableMoves, board)
        }

        let finalArray = availableMoves.filter(board.squareIsValid)
        return finalArray

    }
}
