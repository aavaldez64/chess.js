import { ChessPiece } from "./chess-piece";
import type {
  BoardCoord,
  ChessPieceColor,
  ChessPiecePosition,
} from "../interfaces";

export class Rook extends ChessPiece {
  constructor(
    id: number,
    initialPosition: ChessPiecePosition,
    color: ChessPieceColor,
  ) {
    super(id, 5, "Rook", initialPosition, initialPosition, color);
  }

  getMoves(): ChessPiecePosition[] {
    const moves: ChessPiecePosition[] = [];
    for (let i = 1; i <= 8; i++) {
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
