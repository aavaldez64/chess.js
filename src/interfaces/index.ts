export type BoardRows = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type BoardCoord = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type ChessPieceType =
  | "Pawn"
  | "Rook"
  | "Knight"
  | "Bishop"
  | "Queen"
  | "King";

export type PieceToPromote = "rook" | "knight" | "bishop" | "queen";
export type ChessPiecePosition = { x: BoardCoord; y: BoardCoord };
export type ChessPieceColor = "white" | "black";

export type BoardPieces =
  | "a2whitePawn"
  | "b2whitePawn"
  | "c2whitePawn"
  | "d2whitePawn"
  | "e2whitePawn"
  | "f2whitePawn"
  | "g2whitePawn"
  | "h2whitePawn"
  | "a1whiteRook"
  | "b1whiteKnight"
  | "c1whiteBishop"
  | "d1whiteQueen"
  | "e1whiteKing"
  | "f1whiteBishop"
  | "g1whiteKnight"
  | "h1whiteRook"
  | "a7blackPawn"
  | "b7blackPawn"
  | "c7blackPawn"
  | "d7blackPawn"
  | "e7blackPawn"
  | "f7blackPawn"
  | "g7blackPawn"
  | "h7blackPawn"
  | "a8blackRook"
  | "b8blackKnight"
  | "c8blackBishop"
  | "d8blackQueen"
  | "e8blackKing"
  | "f8blackBishop"
  | "g8blackKnight"
  | "h8blackRook";
