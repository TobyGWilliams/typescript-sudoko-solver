export class Sudoko {
  public cells: Cell[] = new Array();
  public dirty: boolean | undefined = false;
  constructor(guess: Cell[]) {
    for (let i = 0; i <= 8; i++) {
      for (let j = 0; j <= 8; j++) {
        const position = new Position(i, j);
        const matchingGuess = guess.filter((g: Cell) => {
          return g.position.x === i && g.position.y === j;
        });
        if (matchingGuess.length !== 0) {
          this.cells.push(matchingGuess[0]);
        } else {
          this.cells.push(new Cell(position));
        }
      }
    }
  }
  public elminateAllCells() {
    do {
      this.dirty = false;
      this.cells
        .filter((c: Cell) => {
          return !c.value;
        })
        .forEach((c: Cell) => {
          if (this.eliminateCell(c)) {
            this.dirty = true;
          }
        });
    } while (this.dirty);
  }
  public eliminateCell(c: Cell): boolean {
    let dirty = false;
    this.getRow(c.position.x)
      .concat(this.getColumn(c.position.y))
      .concat(this.getSquare(c.position))
      .forEach((e: Cell) => {
        if (e.value && this.getPosition(c.position).eliminateValue(e.value)) {
          dirty = true;
        }
      });
    return dirty;
  }
  public getPosition(position: Position): Cell {
    return this.cells.filter((c: Cell) => {
      return c.position.x === position.x && c.position.y === position.y;
    })[0];
  }
  public getSquare(position: Position): Cell[] {
    return this.cells.filter((e: Cell) => {
      return (
        Math.floor(e.position.x / 3) === position.x &&
        Math.floor(e.position.y / 3) === position.y
      );
    });
  }
  public getRow(i: number): Cell[] {
    return this.cells.filter((g: Cell) => {
      return g.position.x === i;
    });
  }
  public getColumn(i: number): Cell[] {
    return this.cells.filter((g: Cell) => {
      return g.position.y === i;
    });
  }
  public print() {
    let output: string = '';
    for (let i = 0; i <= 8; i++) {
      this.getRow(i).forEach((e: Cell) => (output += e.asText() + ' '));
      output += '\n';
    }
    return output;
  }
}

export class Cell {
  public options: boolean[] = Array(9);
  constructor(public position: Position, public value?: number) {
    for (let i = 0; i < this.options.length; ++i) {
      this.options[i] = true;
    }
  }
  public asText() {
    return this.value || '-';
  }
  public eliminateValue(val: number): boolean {
    let dirty: boolean = false;
    this.options[val - 1] = false;
    if (
      this.options.filter(e => {
        return e;
      }).length === 1
    ) {
      const guess = this.options.indexOf(true) + 1;
      this.value = guess;
      dirty = true;
    }
    return dirty;
  }
}

export class Position {
  constructor(public x: number, public y: number) {}
}
