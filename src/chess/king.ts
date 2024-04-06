import { ChessPiece } from "./chess-piece";
import type {
  BoardCoord,
  ChessPieceColor,
  ChessPiecePosition,
} from "../interfaces";

export class King extends ChessPiece {
  constructor(
    id: number,
    initialPosition: ChessPiecePosition,
    color: ChessPieceColor,
  ) {
    super(id, 48, "King", initialPosition, initialPosition, color);
  }

  getMoves(isCheck: boolean = false): ChessPiecePosition[] {
    const moves: ChessPiecePosition[] = [];

    if (this.position.x < 8) {
      moves.push({
        x: (this.position.x + 1) as BoardCoord,
        y: this.position.y as BoardCoord,
      });
    }
    if (this.position.x < 8 && this.position.y < 8) {
      moves.push({
        x: (this.position.x + 1) as BoardCoord,
        y: (this.position.y + 1) as BoardCoord,
      });
    }
    if (this.position.y < 8) {
      moves.push({
        x: this.position.x as BoardCoord,
        y: (this.position.y + 1) as BoardCoord,
      });
    }
    if (this.position.x < 8 && this.position.y > 1) {
      moves.push({
        x: (this.position.x + 1) as BoardCoord,
        y: (this.position.y - 1) as BoardCoord,
      });
    }
    if (this.position.y > 1) {
      moves.push({
        x: this.position.x as BoardCoord,
        y: (this.position.y - 1) as BoardCoord,
      });
    }
    if (this.position.x > 1 && this.position.y > 1) {
      moves.push({
        x: (this.position.x - 1) as BoardCoord,
        y: (this.position.y - 1) as BoardCoord,
      });
    }
    if (this.position.x > 1) {
      moves.push({
        x: (this.position.x - 1) as BoardCoord,
        y: this.position.y as BoardCoord,
      });
    }
    if (this.position.x > 1 && this.position.y < 8) {
      moves.push({
        x: (this.position.x - 1) as BoardCoord,
        y: (this.position.y + 1) as BoardCoord,
      });
    }

    // Castling
    if (this.moved === false && isCheck === false) {
      moves.push({
        x: (this.position.x + 2) as BoardCoord,
        y: this.initialPosition.y,
      });
      moves.push({
        x: (this.position.x - 2) as BoardCoord,
        y: this.initialPosition.y,
      });
    }
    return moves;
  }
  executeMove(newPosition: ChessPiecePosition, isCheck: boolean = false): void {
    const moves = this.getMoves(isCheck);
    if (
      !moves.some(move => move.x === newPosition.x && move.y === newPosition.y)
    ) {
      throw new Error("Unknown move");
    }
    this.moved = true;
    this.position = newPosition;
  }
}
