import King from '../../../src/engine/pieces/king';
import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Pawn from '../../../src/engine/pieces/pawn';

describe('King', () => {


    describe('white King', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('can only move 1 diagonaly , verticaly, horizontaly', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(4, 4), king);

            const moves = king.getAvailableMoves(board);
            moves.should.have.length(8);
            moves.should.deep.include(Square.at(4, 3));
        });

        it('can only move 1 diagonaly , verticaly, horizontaly if field free', () => {
            const king = new King(Player.WHITE);
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4, 4), king);
            board.setPiece(Square.at(3,5),pawn);

            const moves = king.getAvailableMoves(board);
            moves.should.have.length(7);
            moves.should.deep.include(Square.at(4, 3));
        });
    });

});
