import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let Array = []
       

        // The queen can move in any direction on a straight or diagonal path.
        // The queen cannot "jump" over any piece on the board, so its movements are restricted to any direction of unoccupied squares.
        // The queen can be used to capture any of your opponent's pieces on the board.


        for (let i = 1; location.row + i < 8; i++) {
            if(!board.getPiece(Square.at(location.row + i, location.col)) ){
            Array.push(Square.at(location.row + i, location.col))
            }else{
                break
            }
        }
        for (let i = 1; location.row - i >=0; i++) {
            if(!board.getPiece(Square.at(location.row - i, location.col)) ){
            Array.push(Square.at(location.row - i, location.col))
            }else{
                break
            }
            
        }
        for (let i = 1; location.col + i < 8; i++) {
            if(!board.getPiece(Square.at(location.row, location.col+i)) ){
            Array.push(Square.at(location.row, location.col + i))
            } else{
                break
            }
        }
        for (let i = 1; location.col - i >= 0; i++) {
            if(!board.getPiece(Square.at(location.row, location.col-i)) ){
            Array.push(Square.at(location.row, location.col - i))
            } else{
                break
            }
        }

        for (let i = 1; location.row +i <8; i++) {
            if(!board.getPiece(Square.at(location.row+i, location.col+i)) ){
            Array.push(Square.at(location.row + i, location.col+i))
            }else{
                break
            }
        }
        for (let i = 1; location.row - i >=0; i++) {
            if(!board.getPiece(Square.at(location.row - i, location.col-i)) ){
            Array.push(Square.at(location.row - i, location.col-i))
            }else{
                break
            }
            
        }
        for (let i = 1; location.col + i < 8; i++) {
            if(!board.getPiece(Square.at(location.row + i, location.col-i)) ){
            Array.push(Square.at(location.row+i, location.col - i))
            } else{
                break
            }
        }
        for (let i = 1; location.col - i >= 0; i++) {
            if(!board.getPiece(Square.at(location.row -i, location.col+i)) ){
            Array.push(Square.at(location.row-1, location.col + i))
            } else{
                break
            }
        }

        function squareIsValid (element){
            if(element.row<8 && element.col<8 && element.row>=0 && element.col>=0){
                return element
            }
            
        }
    const finalArray = Array.filter(squareIsValid)
    
    console.log(finalArray)

 return finalArray

    }
}
