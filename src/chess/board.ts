import { Rows } from "../constants";
import { ChessPiece, Bishop, King, Knight, Pawn, Queen, Rook } from "./";
import { BoardCoord, BoardPieces, BoardRows, ChessPieceColor, ChessPiecePosition, ChessPieceType } from "../interfaces";

const getRandomId = () => {
  return Math.ceil(Math.random() * Date.now());
};

export class Board {
  public positions: ({color:ChessPieceColor } & ChessPiecePosition)[] = [];
  public pieces: (ChessPiece | null)[] = [];
  public colorToMove: ChessPieceColor = "white";
  public check: boolean = false;
  public winner: ChessPieceColor | null = null;
  public finished: boolean = false; 

  // Pieces
  private a2whitePawn: Pawn | null = null;
  private b2whitePawn: Pawn | null = null;
  private c2whitePawn: Pawn | null = null;
  private d2whitePawn: Pawn | null = null;
  private e2whitePawn: Pawn | null = null;
  private f2whitePawn: Pawn | null = null;
  private g2whitePawn: Pawn | null = null;
  private h2whitePawn: Pawn | null = null;
  private a1whiteRook: Rook | null = null;
  private b1whiteKnight: Knight | null = null;
  private c1whiteBishop: Bishop | null = null;
  private d1whiteQueen: Queen | null = null;
  private e1whiteKing: King | null = null;
  private f1whiteBishop: Bishop | null = null;
  private g1whiteKnight: Knight | null = null;
  private h1whiteRook: Rook | null = null;

  private a7blackPawn: Pawn | null = null;
  private b7blackPawn: Pawn | null = null;
  private c7blackPawn: Pawn | null = null;
  private d7blackPawn: Pawn | null = null;
  private e7blackPawn: Pawn | null = null;
  private f7blackPawn: Pawn | null = null;
  private g7blackPawn: Pawn | null = null;
  private h7blackPawn: Pawn | null = null;
  private a8blackRook: Rook | null = null;
  private b8blackKnight: Knight | null = null;
  private c8blackBishop: Bishop | null = null;
  private d8blackQueen: Queen | null = null;
  private e8blackKing: King | null = null;
  private f8blackBishop: Bishop | null = null;
  private g8blackKnight: Knight | null = null;
  private h8blackRook: Rook | null = null;




  public start() {
    
    this.a2whitePawn = new Pawn(getRandomId(), { x: Rows.a, y: 2 }, "white");
    this.b2whitePawn = new Pawn(getRandomId(), { x: Rows.b, y: 2 }, "white");
    this.c2whitePawn = new Pawn(getRandomId(), { x: Rows.c, y: 2 }, "white");
    this.d2whitePawn = new Pawn(getRandomId(), { x: Rows.d, y: 2 }, "white");
    this.e2whitePawn = new Pawn(getRandomId(), { x: Rows.e, y: 2 }, "white");
    this.f2whitePawn = new Pawn(getRandomId(), { x: Rows.f, y: 2 }, "white");
    this.g2whitePawn = new Pawn(getRandomId(), { x: Rows.g, y: 2 }, "white");
    this.h2whitePawn = new Pawn(getRandomId(), { x: Rows.h, y: 2 }, "white");

    this.a1whiteRook = new Rook(getRandomId(), { x: Rows.a, y: 1 }, "white");
    this.b1whiteKnight = new Knight(getRandomId(), { x: Rows.b, y: 1 }, "white");
    this.c1whiteBishop = new Bishop(getRandomId(), { x: Rows.c, y: 1 }, "white");
    this.d1whiteQueen = new Queen(getRandomId(), { x: Rows.d, y: 1 }, "white");
    this.e1whiteKing = new King(getRandomId(), { x: Rows.e, y: 1 }, "white");
    this.f1whiteBishop = new Bishop(getRandomId(), { x: Rows.f, y: 1 }, "white");
    this.g1whiteKnight = new Knight(getRandomId(), { x: Rows.g, y: 1 }, "white");
    this.h1whiteRook = new Rook(getRandomId(), { x: Rows.h, y: 1 }, "white");

    this.a7blackPawn = new Pawn(getRandomId(), { x: Rows.a, y: 7 }, "black");
    this.b7blackPawn = new Pawn(getRandomId(), { x: Rows.b, y: 7 }, "black");
    this.c7blackPawn = new Pawn(getRandomId(), { x: Rows.c, y: 7 }, "black");
    this.d7blackPawn = new Pawn(getRandomId(), { x: Rows.d, y: 7 }, "black");
    this.e7blackPawn = new Pawn(getRandomId(), { x: Rows.e, y: 7 }, "black");
    this.f7blackPawn = new Pawn(getRandomId(), { x: Rows.f, y: 7 }, "black");
    this.g7blackPawn = new Pawn(getRandomId(), { x: Rows.g, y: 7 }, "black");
    this.h7blackPawn = new Pawn(getRandomId(), { x: Rows.h, y: 7 }, "black");
    this.a8blackRook = new Rook(getRandomId(), { x: Rows.a, y: 8 }, "black");
    this.b8blackKnight = new Knight(getRandomId(), { x: Rows.b, y: 8 }, "black");
    this.c8blackBishop = new Bishop(getRandomId(), { x: Rows.c, y: 8 }, "black");
    this.d8blackQueen = new Queen(getRandomId(), { x: Rows.d, y: 8 }, "black");
    this.e8blackKing = new King(getRandomId(), { x: Rows.e, y: 8 }, "black");
    this.f8blackBishop = new Bishop(getRandomId(), { x: Rows.f, y: 8 }, "black");
    this.g8blackKnight = new Knight(getRandomId(), { x: Rows.g, y: 8 }, "black");
    this.h8blackRook = new Rook(getRandomId(), { x: Rows.h, y: 8 }, "black");

    const pieces = [
      this.a2whitePawn,
      this.b2whitePawn,
      this.c2whitePawn,
      this.d2whitePawn,
      this.e2whitePawn,
      this.f2whitePawn,
      this.g2whitePawn,
      this.h2whitePawn,

      this.a1whiteRook,
      this.b1whiteKnight,
      this.c1whiteBishop,
      this.d1whiteQueen,
      this.e1whiteKing,
      this.f1whiteBishop,
      this.g1whiteKnight,
      this.h1whiteRook,

      this.a7blackPawn,
      this.b7blackPawn,
      this.c7blackPawn,
      this.d7blackPawn,
      this.e7blackPawn,
      this.f7blackPawn,
      this.g7blackPawn,
      this.h7blackPawn,

      this.a8blackRook,
      this.b8blackKnight,
      this.c8blackBishop,
      this.d8blackQueen,
      this.e8blackKing,
      this.f8blackBishop,
      this.g8blackKnight,
      this.h8blackRook,
    ];
    this.pieces = pieces;

    this.positions = [
      // White
      {x: Rows.a, y:1, color: "white"},
      {x: Rows.b, y:1, color: "white"},
      {x: Rows.c, y:1, color: "white"},
      {x: Rows.d, y:1, color: "white"},
      {x: Rows.e, y:1, color: "white"},
      {x: Rows.f, y:1, color: "white"},
      {x: Rows.g, y:1, color: "white"},
      {x: Rows.h, y:1, color: "white"},

      {x: Rows.a, y:2, color: "white"},
      {x: Rows.b, y:2, color: "white"},
      {x: Rows.c, y:2, color: "white"},
      {x: Rows.d, y:2, color: "white"},
      {x: Rows.e, y:2, color: "white"},
      {x: Rows.f, y:2, color: "white"},
      {x: Rows.g, y:2, color: "white"},
      {x: Rows.h, y:2, color: "white"},

      // Black
      {x: Rows.a, y:8, color: "black"},
      {x: Rows.b, y:8, color: "black"},
      {x: Rows.c, y:8, color: "black"},
      {x: Rows.d, y:8, color: "black"},
      {x: Rows.e, y:8, color: "black"},
      {x: Rows.f, y:8, color: "black"},
      {x: Rows.g, y:8, color: "black"},
      {x: Rows.h, y:8, color: "black"},

      {x: Rows.a, y:7, color: "black"},
      {x: Rows.b, y:7, color: "black"},
      {x: Rows.c, y:7, color: "black"},
      {x: Rows.d, y:7, color: "black"},
      {x: Rows.e, y:7, color: "black"},
      {x: Rows.f, y:7, color: "black"},
      {x: Rows.g, y:7, color: "black"},
      {x: Rows.h, y:7, color: "black"},
    ]

    return pieces;
  }

  public nextPlay(check: boolean = false) {
    this.check = check
    if (this.colorToMove === "white") {
      this.colorToMove = "black"
    } else {
      this.colorToMove = "white"
    }

    this.checkGameStatus();
    return this.colorToMove;
  }
  public capturePiece(row: BoardRows,col: BoardCoord, piece: ChessPieceType, color: ChessPieceColor) {
    const pieceKey = `${row}${col}${color}${piece}`;
    if (pieceKey in this) {
      this[pieceKey as BoardPieces] = null;
      this.pieces = this.pieces.map(piece => {
        if (piece === null) return null;
        if (piece.initialPosition.x === Rows[row] && piece.initialPosition.y === col && piece.color === color) {
          return null;
        }
        return piece;
      })
      this.positions = this.positions.filter(pos => pos.x !== Rows[row] && pos.y !== col && pos.color !== color);
      return this.pieces;
    } else {
      throw new Error("Unknown chess piece")
    }
  }


  private checkGameStatus() {
    if (this.colorToMove === "white") {
      const kingMoves = this.e1whiteKing!.getMoves(this.check)
      if (kingMoves.length === 0) {
        this.finished = true;
        if (this.check === false) {
          // stalemate
        } else {
          this.winner = "black"
        }
      }
    } else {
      const kingMoves = this.e8blackKing!.getMoves(this.check)
      if (kingMoves.length === 0) {
        this.finished = true;
        if (this.check === false) {
          // stalemate
        } else {
          this.winner = "white"
        }
      }
    }
  }

  get WhiteScore ():number {
    return 0;
  }

  get BlackScore ():number {
    return 0;
  }
}
