import { ChessPiecePosition } from "../interfaces";

export function getGridPosition(position: ChessPiecePosition): {
  gridColumn: string;
  gridRow: string;
} {
  return {
    gridColumn: position.x + "/" + (position.x + 1),
    gridRow: 10 - position.y + "/" + (9 - position.y),
  };
}
