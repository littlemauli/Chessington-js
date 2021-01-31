import 'chai/register-should';

import Rook from '../../../src/engine/pieces/rook';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Piece from '../../../src/engine/pieces/piece';
import Pawn from '../../../src/engine/pieces/pawn';



    describe('Rook', () => {

        describe('white rook', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('can only move horizontaly or verticaly any number of squares', () => {
            const rook = new Rook(Player.WHITE);
            board.setPiece(Square.at(0, 0), rook);

            const moves = rook.getAvailableMoves(board);
            moves.should.have.length(14);
            moves.should.deep.include(Square.at(4, 0));
        });

        it('can stop in the square before an occupied square',() =>{
            const rook = new Rook(Player.WHITE);
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(4,4),rook );
            board.setPiece(Square.at(3,4),pawn);
            board.setPiece(Square.at(4,0),pawn);

            const moves = rook.getAvailableMoves(board);
            moves.should.have.length(9);
            moves.should.deep.include(Square.at(4, 1));

        });

        it('when rook white it can take a black piece',() =>{
            const rook = new Rook(Player.WHITE);
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4,4),rook );
            board.setPiece(Square.at(5,4),pawn);
            

            const moves = rook.getAvailableMoves(board);
            moves.should.have.length(12);
            moves.should.deep.include(Square.at(5, 4));

        });

      });

    });

