import { ChessPiece } from "./chess-piece";
import type {
  BoardCoord,
  ChessPieceColor,
  ChessPiecePosition,
} from "../interfaces";

export class Queen extends ChessPiece {
  constructor(
    id: number,
    initialPosition: ChessPiecePosition,
    color: ChessPieceColor,
  ) {
    super(id, 9, "Queen", initialPosition, initialPosition, color);
  }

  getMoves(): ChessPiecePosition[] {
    const moves: ChessPiecePosition[] = [];
    for (let i = 1; i <= 8; i++) {
      // Horizontal/Vertical
      if (i !== this.position.x) {
        moves.push({
          x: i as BoardCoord,
          y: this.position.y,
        });
      }
      if (i !== this.position.y) {
        moves.push({
          x: this.position.x,
          y: i as BoardCoord,
        });
      }

      // Diagonal
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
