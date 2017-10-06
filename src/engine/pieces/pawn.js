import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // get the piece's current location
        // for a white piece  can move one row up 
        // for a black move can move one row down 
        // only move if target square free
        // move 2 squares from starting position only
        // move one diagonally up for white if square occupied by black piece
        
        let location = board.findPiece(this);

        if (this.player === Player.WHITE && this.numberOfMoves >= 1) {
            
            return [Square.at(location.row + 1, location.col)]
        } else if (this.player === Player.BLACK && this.numberOfMoves >= 1) {
           
            return [Square.at(location.row - 1, location.col)]
        } else if (this.player === Player.WHITE && this.numberOfMoves === 0) {
            
            return [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]

        } else if (this.player === Player.BLACK && this.numberOfMoves === 0) {
            
            return [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
        }


        //return new Array(0);
    }
}
