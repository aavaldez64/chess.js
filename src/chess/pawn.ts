import { ChessPiece } from "./chess-piece";
import type {
  BoardCoord,
  ChessPieceColor,
  ChessPiecePosition,
  PieceToPromote,
} from "../interfaces";

export class Pawn extends ChessPiece {
  constructor(
    id: number,
    initialPosition: ChessPiecePosition,
    color: ChessPieceColor,
  ) {
    super(id, 1, "Pawn", initialPosition, initialPosition, color);
  }

  getMoves(): ChessPiecePosition[] {
    if (this.position.y >= 8) throw new Error("Unknown position to calculate");
    const moves: ChessPiecePosition[] = [];
    if (this.color === "white") {
      moves.push({
        x: this.position.x,
        y: (this.position.y + 1) as BoardCoord,
      });
      if (this.position.y === this.initialPosition.y) {
        moves.push({
          x: this.position.x,
          y: (this.position.y + 2) as BoardCoord,
        });
      }
    } else {
      moves.push({
        x: this.position.x,
        y: (this.position.y - 1) as BoardCoord,
      });
      if (this.position.y === this.initialPosition.y) {
        moves.push({
          x: this.position.x,
          y: (this.position.y - 2) as BoardCoord,
        });
      }
    }
    return moves;
  }
  executeMove(
    newPosition: ChessPiecePosition,
    promotion?: PieceToPromote,
  ): void {
    const moves = this.getMoves();
    if (
      !moves.some(move => move.x === newPosition.x && move.y === newPosition.y)
    ) {
      throw new Error("Unknown move");
    }
    if (newPosition.y === 8) {
      if (!promotion) throw new Error("You must provide a piece to promote");
      this.promote(promotion);
    }
    this.moved = true;
    this.position = newPosition;
  }

  promote(pieceToPromote: PieceToPromote) {
    console.log(pieceToPromote);
    throw new Error("Method not implemented");
  }
}
