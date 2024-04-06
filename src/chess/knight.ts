import { ChessPiece } from "./chess-piece";
import type {
  BoardCoord,
  ChessPieceColor,
  ChessPiecePosition,
} from "../interfaces";

export class Knight extends ChessPiece {
  constructor(
    id: number,
    initialPosition: ChessPiecePosition,
    color: ChessPieceColor,
  ) {
    super(id, 3, "Knight", initialPosition, initialPosition, color);
  }

  getMoves(): ChessPiecePosition[] {
    const moves: ChessPiecePosition[] = [];

    if (this.position.x + 2 < 9) {
      if (this.position.y + 1 < 9) {
        moves.push({
          x: (this.position.x + 2) as BoardCoord,
          y: (this.position.y + 1) as BoardCoord,
        });
      }
      if (this.position.y - 1 > 0) {
        moves.push({
          x: (this.position.x + 2) as BoardCoord,
          y: (this.position.y - 1) as BoardCoord,
        });
      }
    }
    if (this.position.x - 2 > 0) {
      if (this.position.y + 1 < 9) {
        moves.push({
          x: (this.position.x - 2) as BoardCoord,
          y: (this.position.y + 1) as BoardCoord,
        });
      }
      if (this.position.y - 1 > 0) {
        moves.push({
          x: (this.position.x - 2) as BoardCoord,
          y: (this.position.y - 1) as BoardCoord,
        });
      }
    }
    if (this.position.y + 2 < 9) {
      if (this.position.x + 1 < 9) {
        moves.push({
          x: (this.position.x + 1) as BoardCoord,
          y: (this.position.y + 2) as BoardCoord,
        });
      }
      if (this.position.x - 1 > 0) {
        moves.push({
          x: (this.position.x - 1) as BoardCoord,
          y: (this.position.y + 2) as BoardCoord,
        });
      }
    }
    if (this.position.y - 2 > 0) {
      if (this.position.x + 1 < 9) {
        moves.push({
          x: (this.position.x + 1) as BoardCoord,
          y: (this.position.y - 2) as BoardCoord,
        });
      }
      if (this.position.x - 1 > 0) {
        moves.push({
          x: (this.position.x - 1) as BoardCoord,
          y: (this.position.y - 2) as BoardCoord,
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
