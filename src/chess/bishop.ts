import { ChessPiece } from "./chess-piece";
import type {
  BoardCoord,
  ChessPieceColor,
  ChessPiecePosition,
} from "../interfaces";

export class Bishop extends ChessPiece {
  constructor(
    id: number,
    initialPosition: ChessPiecePosition,
    color: ChessPieceColor,
  ) {
    super(id, 3, "Bishop", initialPosition, initialPosition, color);
  }

  getMoves(): ChessPiecePosition[] {
    const moves: ChessPiecePosition[] = [];
    // position == x: 2 y: 3
    for (let i = 1; i <= 8; i++) {
      if (this.position.x + i < 9 && this.position.y + i < 9) {
        moves.push({
          x: (this.position.x + i) as BoardCoord,
          y: (this.position.y + i) as BoardCoord,
        });
      }
      if (this.position.x - i > 0 && this.position.y - i > 0) {
        moves.push({
          x: (this.position.x - i) as BoardCoord,
          y: (this.position.y - i) as BoardCoord,
        });
      }

      if (this.position.x + i < 9 && this.position.y - i > 0) {
        moves.push({
          x: (this.position.x + i) as BoardCoord,
          y: (this.position.y - i) as BoardCoord,
        });
      }

      if (this.position.x - i > 0 && this.position.y + i < 9) {
        moves.push({
          x: (this.position.x - i) as BoardCoord,
          y: (this.position.y + i) as BoardCoord,
        });
      }
    }
    return moves;
  }
  executeMove(newPosition: ChessPiecePosition): void {
    const moves = this.getMoves();
    if (
      !moves.some(move => move.x === newPosition.x && move.y === newPosition.y)
    ) {
      throw new Error("Unknown move");
    }
    this.moved = true;
    this.position = newPosition;
  }
}
