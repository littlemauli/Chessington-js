import Knight from '../../../src/engine/pieces/knight';
import Rook from '../../../src/engine/pieces/rook';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Piece from '../../../src/engine/pieces/piece';
import Pawn from '../../../src/engine/pieces/pawn';

describe('Knight', () => {

    describe('white knight', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('can move only in the knight\'s way ', () => {
            const knight = new Knight(Player.WHITE);
            board.setPiece(Square.at(3, 4), knight);

            const moves = knight.getAvailableMoves(board);
            moves.should.have.length(8);
            moves.should.deep.include(Square.at(4, 2));
        });

        it('can not move off board ', () => {
            const knight = new Knight(Player.WHITE);
            board.setPiece(Square.at(6, 2), knight);

            const moves = knight.getAvailableMoves(board);
            moves.should.have.length(6);
            moves.should.deep.include(Square.at(5, 0));
        });

        it('can not move on an occupied field', () => {
            const knight = new Knight(Player.WHITE);
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(6, 2), knight);
            board.setPiece(Square.at(4,1),pawn);
            board.setPiece(Square.at(5,4),pawn);

            const moves = knight.getAvailableMoves(board);
            moves.should.have.length(4);
            moves.should.deep.include(Square.at(7,0));
        });

        it('it can take an opponant', () => {
            const knight = new Knight(Player.WHITE);
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 2), knight);
            board.setPiece(Square.at(4,1),pawn);
            board.setPiece(Square.at(5,4),pawn);

            const moves = knight.getAvailableMoves(board);
            moves.should.have.length(6);
            moves.should.deep.include(Square.at(7,0), Square.at(4,1));
        });

    });

});
