import type {
  ChessPieceColor,
  ChessPiecePosition,
  ChessPieceType,
} from "../interfaces";

export class ChessPiece {
  public border: ChessPieceColor;
  public moved: boolean = false;
  constructor(
    public id: number,
    public pieceValue: number,
    public type: ChessPieceType,
    public initialPosition: ChessPiecePosition,
    public position: ChessPiecePosition,
    public color: ChessPieceColor,
  ) {
    this.border = color === "black" ? "white" : "black";
  }

  getMoves(): ChessPiecePosition[] {
    const moves: ChessPiecePosition[] = [];
    return moves;
  }

  executeMove(newPosition: ChessPiecePosition) {}
}
