import { useEffect, useState } from "react";
import { ChessPiece, Board, Pawn, King } from "./chess";
import { getGridPosition } from "./utils";
import { ChessPieceColor, ChessPiecePosition } from "./interfaces";
import { CoordToRows } from "./constants/index";

const board = new Board();

export function App() {
  const [, setColorToMove] = useState<ChessPieceColor>(board.colorToMove);
  const [pieces, setPieces] = useState<(ChessPiece | null)[]>([]);
  const [tilesToMove, setTilesToMove] = useState<ChessPiecePosition[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<ChessPiece | null>(null);
  const clearPieceState = () => {
    setSelectedPiece(null);
    setTilesToMove([]);
  };
  const handleClickPiece = (piece: ChessPiece) => {
    if (piece.color !== board.colorToMove) return;
    if (selectedPiece) {
      clearPieceState();
      return;
    }
    setSelectedPiece(piece);
    if (piece instanceof King) {
      setTilesToMove(piece.getMoves(board.check));
    } else {
      setTilesToMove(piece.getMoves());
    }
  };
  const handleMovePiece = (position: ChessPiecePosition) => {
    if (!selectedPiece) return;

    if (selectedPiece instanceof Pawn) {
      selectedPiece.executeMove(position);
    } else if (selectedPiece instanceof King) {
      selectedPiece.executeMove(position, board.check);
    } else {
      selectedPiece.executeMove(position);
    }
    const capture = board.pieces.find(
      piece =>
        piece !== null &&
        piece.position.x === position.x &&
        piece.position.y === position.y &&
        piece.color !== selectedPiece.color,
    );
    if (capture) {
      setPieces(
        board.capturePiece(
          CoordToRows[capture.initialPosition.x],
          capture.initialPosition.y,
          capture.type,
          capture.color,
        ),
      );
    }
    const check = false;
    setColorToMove(board.nextPlay(check));
    clearPieceState();
  };

  useEffect(() => {
    setPieces(board.start());
  }, []);
  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <section className="board">
        <>
          <div id="a8"></div>
          <div id="b8"></div>
          <div id="c8"></div>
          <div id="d8"></div>
          <div id="e8"></div>
          <div id="f8"></div>
          <div id="g8"></div>
          <div id="h8"></div>

          <div id="a7"></div>
          <div id="b7"></div>
          <div id="c7"></div>
          <div id="d7"></div>
          <div id="e7"></div>
          <div id="f7"></div>
          <div id="g7"></div>
          <div id="h7"></div>

          <div id="a6"></div>
          <div id="b6"></div>
          <div id="c6"></div>
          <div id="d6"></div>
          <div id="e6"></div>
          <div id="f6"></div>
          <div id="g6"></div>
          <div id="h6"></div>

          <div id="a5"></div>
          <div id="b5"></div>
          <div id="c5"></div>
          <div id="d5"></div>
          <div id="e5"></div>
          <div id="f5"></div>
          <div id="g5"></div>
          <div id="h5"></div>

          <div id="a4"></div>
          <div id="b4"></div>
          <div id="c4"></div>
          <div id="d4"></div>
          <div id="e4"></div>
          <div id="f4"></div>
          <div id="g4"></div>
          <div id="h4"></div>

          <div id="a3"></div>
          <div id="b3"></div>
          <div id="c3"></div>
          <div id="d3"></div>
          <div id="e3"></div>
          <div id="f3"></div>
          <div id="g3"></div>
          <div id="h3"></div>

          <div id="a2"></div>
          <div id="b2"></div>
          <div id="c2"></div>
          <div id="d2"></div>
          <div id="e2"></div>
          <div id="f2"></div>
          <div id="g2"></div>
          <div id="h2"></div>

          <div id="a1"></div>
          <div id="b1"></div>
          <div id="c1"></div>
          <div id="d1"></div>
          <div id="e1"></div>
          <div id="f1"></div>
          <div id="g1"></div>
          <div id="h1"></div>
        </>
      </section>
      <section className="board-pieces absolute">
        {pieces.map(piece => {
          if (piece === null) return null;
          return (
            <div key={piece.id} style={getGridPosition(piece.position)}>
              <img
                draggable
                onClick={() => handleClickPiece(piece)}
                onDragEnd={event => console.log(event)}
                src={`/pieces/${piece.color}_${piece.type}.png`}
                alt={`${piece.color} ${piece.type}`}
                className={piece.color}
              />
            </div>
          );
        })}

        {tilesToMove.map((position, index) => (
          <div
            key={index}
            style={getGridPosition(position)}
            className="flex items-center justify-center cursor-pointer z-10"
            onClick={() => handleMovePiece(position)}
          >
            <span className="block size-4 bg-gray-300/75 rounded-full" />
          </div>
        ))}
      </section>
    </div>
  );
}
