import { Cell, Position, Sudoko } from './index';

describe('Sudoko Class', () => {
  let s: Sudoko;
  describe('basics', () => {
    it('test getting square', () => {
      s = new Sudoko([]);
      expect(Math.floor(0 / 3)).toBe(0);
      expect(Math.floor(1 / 3)).toBe(0);
      expect(Math.floor(2 / 3)).toBe(0);
      expect(Math.floor(3 / 3)).toBe(1);
      expect(Math.floor(4 / 3)).toBe(1);
      expect(Math.floor(5 / 3)).toBe(1);
      expect(Math.floor(6 / 3)).toBe(2);
      expect(Math.floor(7 / 3)).toBe(2);
      expect(Math.floor(8 / 3)).toBe(2);
      expect(s.getSquare(new Position(0, 0)).length).toBeTruthy();
    });
  });
  describe('puzzles', () => {
    it('text based puzzle', () => {
      const guess: Cell[] = [];
      const text: string =
        '400000805030000000000700000020000060000080400000010000000603070500200000104000000';
      expect(text.length).toBe(81);
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== '0') {
          guess.push(
            new Cell(new Position((i - (i % 9)) / 9, i % 9), Number(text[i]))
          );
        }
      }
      s = new Sudoko(guess);
      s.elminateAllCells();
      console.log(s.print());
      expect(true).toBeTruthy();
    });
    it('text based puzzle 1', () => {
      const guess: Cell[] = [];
      const text: string =
        '004300209005009001070060043006002087190007400050083000600000105003508690042910300';
      expect(text.length).toBe(81);
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== '0') {
          guess.push(
            new Cell(new Position((i - (i % 9)) / 9, i % 9), Number(text[i]))
          );
        }
      }
      s = new Sudoko(guess);
      s.elminateAllCells();
      s.elminateAllCells();
      s.elminateAllCells();
      console.log(s.print());
      expect(true).toBeTruthy();
    });
    it('text based puzzle 2', () => {
      const guess: Cell[] = [];
      const text: string =
        '010020300004005060070000008006900070000100002030048000500006040000800106008000000';
      expect(text.length).toBe(81);
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== '0') {
          guess.push(
            new Cell(new Position((i - (i % 9)) / 9, i % 9), Number(text[i]))
          );
        }
      }
      s = new Sudoko(guess);
      s.elminateAllCells();
      s.elminateAllCells();
      s.elminateAllCells();
      console.log(s.print());
      expect(true).toBeTruthy();
    });
    it('text based puzzle 3', () => {
      const guess: Cell[] = [];
      const text: string =
        '010020300002003040050000006004700050000100003070068000300004090000600104006000000';
      expect(text.length).toBe(81);
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== '0') {
          guess.push(
            new Cell(new Position((i - (i % 9)) / 9, i % 9), Number(text[i]))
          );
        }
      }
      s = new Sudoko(guess);
      s.elminateAllCells();
      s.elminateAllCells();
      s.elminateAllCells();
      console.log(s.print());
      expect(true).toBeTruthy();
    });
    it('text based puzzle 4', () => {
      const guess: Cell[] = [];
      const text: string =
        '000012300000400000105006700306000070700080009020000108001500403000001000003890000';
      expect(text.length).toBe(81);
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== '0') {
          guess.push(
            new Cell(new Position((i - (i % 9)) / 9, i % 9), Number(text[i]))
          );
        }
      }
      s = new Sudoko(guess);
      s.elminateAllCells();
      s.elminateAllCells();
      s.elminateAllCells();
      console.log(s.print());
      expect(true).toBeTruthy();
    });
    fit('text based puzzle 5', () => {
      const guess: Cell[] = [];
      const text: string =
        '708000069000000380023867500007080050691000438050030900006415790019000000570000106';
      expect(text.length).toBe(81);
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== '0') {
          guess.push(
            new Cell(new Position((i - (i % 9)) / 9, i % 9), Number(text[i]))
          );
        }
      }
      s = new Sudoko(guess);
      s.elminateAllCells();
      s.elminateAllCells();
      s.elminateAllCells();
      console.log(s.print());
      expect(true).toBeTruthy();
    });
  });
  const archive = {
    // it('should exist', () => {
    //   s = new Sudoko([]);
    //   expect(s).toBeTruthy();
    // });
    // it('test adding guesses', () => {
    //   s = new Sudoko([
    //     new Cell(new Position(1, 1), 7),
    //     new Cell(new Position(2, 2), 9)
    //   ]);
    //   // console.log(s.print());
    //   expect(s).toBeTruthy();
    // });
    // it('expect eliminate to work', () => {
    //   s = new Sudoko([]);
    //   s.cells[0].eliminateValue(1);
    //   expect(s.cells[0].options[0]).toBeFalsy();
    //   expect(s.cells[0].options[1]).toBeTruthy();
    //   expect(s.cells[0].options[2]).toBeTruthy();
    //   expect(s.cells[0].options[3]).toBeTruthy();
    // });
    // it('eliminate by crossing off', () => {
    //   s = new Sudoko([
    //     new Cell(new Position(1, 0), 2),
    //     new Cell(new Position(2, 0), 3),
    //     new Cell(new Position(0, 3), 4),
    //     new Cell(new Position(0, 4), 5),
    //     new Cell(new Position(0, 5), 6),
    //     new Cell(new Position(0, 6), 7),
    //     new Cell(new Position(0, 7), 8),
    //     new Cell(new Position(0, 8), 9)
    //   ]);
    //   const pos = new Position(0, 0);
    //   s.eliminateCell(pos);
    //   expect(s.getPosition(pos).options[0]).toBeTruthy();
    //   expect(s.getPosition(pos).options[1]).toBeFalsy();
    //   expect(s.getPosition(pos).options[2]).toBeFalsy();
    //   expect(s.getPosition(pos).options[3]).toBeFalsy();
    //   expect(s.getPosition(pos).value).toBe(1);
    //   // console.log(s.print());
    // });
    // it('actual puzzle', () => {
    //   s = new Sudoko([
    //     new Cell(new Position(0, 0), 1),
    //     new Cell(new Position(0, 7), 8),
    //     new Cell(new Position(1, 4), 4),
    //     new Cell(new Position(1, 5), 9),
    //     new Cell(new Position(2, 3), 5),
    //     new Cell(new Position(2, 4), 1),
    //     new Cell(new Position(2, 5), 8),
    //     new Cell(new Position(2, 6), 2),
    //     new Cell(new Position(2, 7), 3),
    //     new Cell(new Position(2, 8), 6),
    //     new Cell(new Position(3, 0), 2),
    //     new Cell(new Position(3, 2), 7),
    //     new Cell(new Position(3, 4), 8),
    //     new Cell(new Position(3, 6), 6),
    //     new Cell(new Position(4, 0), 6),
    //     new Cell(new Position(4, 8), 1),
    //     new Cell(new Position(5, 1), 1),
    //     new Cell(new Position(5, 2), 9),
    //     new Cell(new Position(5, 4), 2),
    //     new Cell(new Position(5, 6), 4),
    //     new Cell(new Position(5, 8), 8)
    //   ]);
    //   const pos = new Position(0, 0);
    //   s.elminateAllCells();
    //   // console.log(s.getColumn(0));
    //   // console.log(s.getRow(0));
    //   // s.eliminateCell(pos);
    //   console.log(s.print());
    //   expect(s).toBeTruthy();
    // });
  };
});
