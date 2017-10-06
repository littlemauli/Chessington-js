import { ContextReplacementPlugin } from 'webpack';
import Square from '../square';
import undefined from './piece';
import Player from '../player';

export default class Rook extends undefined {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        //moves forward /backwards/ left or right
        // moves any number of squares in one direction, if field free
        let location = board.findPiece(this);
        let Array = []
       

            for (let i = 1; location.row + i < 8; i++) {
                if(!!board.getPiece(Square.at(location.row + i, location.col)) ){
                Array.push(Square.at(location.row + i, location.col))
                }else{
                    break
                }
            }
            for (let i = 1; location.row - i >=0; i--) {
                if(!!board.getPiece(Square.at(location.row - i, location.col)) ){
                Array.push(Square.at(location.row - i, location.col))
                }else{
                    break
                }
                
            }
            for (let i = 1; location.col + i < 8; i++) {
                if(!!board.getPiece(Square.at(location.row, location.col+i)) ){
                Array.push(Square.at(location.row, location.col + i))
                } else{
                    break
                }
            }
            for (let i = 1; location.col - i >= 0; i--) {
                if(!!board.getPiece(Square.at(location.row, location.col-i)) ){
                Array.push(Square.at(location.row, location.col - i))
                } else{
                    break
                }
            }
console.log('test')
console.log(Array)
            return Array
                
        
    }
}
