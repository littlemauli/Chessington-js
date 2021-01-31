import { ContextReplacementPlugin } from 'webpack';

import Player from '../player';
import Square from '../square';
import Piece from './piece';



export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    // possibleSquaresInOneDirection(testSquare, availableMoves, board) {
    //     let testSquareContent = board.getPiece(testSquare); // what is on the square
    //     if (!testSquareContent) {
    //         availableMoves.push(testSquare)
    //     }
    //     else {
    //         if (this.player !== testSquareContent.player) {
    //             availableMoves.push(testSquare)
    //         }
    //         return false
    //     }
    //     return true
    // }


    getAvailableMoves(board) {
        //moves forward /backwards/ left or right
        // moves any number of squares in one direction, if field free
        //if field occupied by opponant, can take it

        let location = board.findPiece(this);//returns on which square the rook is

        let availableMoves = [];


        for (let i = 1; location.row + i < 8; i++) {
            if (!this.possibleSquaresInOneDirection(Square.at(location.row + i, location.col), availableMoves, board)) {
                break
            }
        }


        for (let i = 1; location.row - i >= 0; i++) {
            if (!this.possibleSquaresInOneDirection(Square.at(location.row - i, location.col), availableMoves, board)) {
                break
            }
        }

        for (let i = 1; location.col + i < 8; i++) {

            if (!this.possibleSquaresInOneDirection(Square.at(location.row, location.col + i), availableMoves, board)) {
                break
            }
        }

        for (let i = 1; location.col - i >= 0; i++) {
            if (!this.possibleSquaresInOneDirection(Square.at(location.row, location.col - i), availableMoves, board)) {
                break
            }
        }

        let finalArray = availableMoves.filter(board.squareIsValid)
        return finalArray
    }
}

