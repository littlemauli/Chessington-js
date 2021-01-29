import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) { 
// The king piece can move one single square in any direction.
// The king cannot move onto a square that is currently occupied by a piece from its own team.
// The king piece cannot move to any square that puts them into a "check" position.

let location = board.findPiece(this);
        let Array = []

        let possibleLocations =[Square.at(location.row + 1, location.col),
                                Square.at(location.row + 1, location.col+1),
                                Square.at(location.row + 1, location.col-1),
                                Square.at(location.row , location.col+1),
                                Square.at(location.row , location.col-1),
                                Square.at(location.row -1, location.col),
                                Square.at(location.row -1, location.col+1),
                                Square.at(location.row -1, location.col-1)

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
    return Array
       
    }
}
