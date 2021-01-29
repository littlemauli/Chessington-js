import 'chai/register-should';

import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Pawn from '../../../src/engine/pieces/pawn';

describe('Bishop', () => {

    describe('white bishop', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('can only move diagonaly any number of squares', () => {
            const bishop = new Bishop(Player.WHITE);
            board.setPiece(Square.at(4, 4), bishop);

            const moves = bishop.getAvailableMoves(board);
            moves.should.have.length(13);
            moves.should.deep.include(Square.at(0, 0));
        });

        it('can only move diagonaly and stop before a piece', () => {
            const bishop = new Bishop(Player.WHITE);
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4, 4), bishop);
            board.setPiece(Square.at(1,1),pawn);
            board.setPiece(Square.at(3,5),pawn);

            const moves = bishop.getAvailableMoves(board);
            moves.should.have.length(8);
            moves.should.deep.include(Square.at(2, 2));
        });

    });

});
