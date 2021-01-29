import 'chai/register-should';

import Queen from '../../../src/engine/pieces/queen';
import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Pawn from '../../../src/engine/pieces/pawn';

describe('Queen', () => {

    describe('white queen', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('can  move diagonaly, verticaly and horizontaly any number of squares', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(4, 4), queen);

            const moves = queen.getAvailableMoves(board);
            moves.should.have.length(27);
            moves.should.deep.include(Square.at(0, 0));
        });

        it('can  move diagonaly, verticaly and horizontaly until field ocupied', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(4, 4), queen);
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(1,1),pawn);
            board.setPiece(Square.at(3,5),pawn);

            const moves = queen.getAvailableMoves(board);
            moves.should.have.length(22);
            moves.should.deep.include(Square.at(5, 5));
        });


    });
});
