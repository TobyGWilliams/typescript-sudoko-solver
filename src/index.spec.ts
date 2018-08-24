import { Cell, Position, Sudoko } from './index';

describe('Sudoko Class', () => {
  let s: Sudoko;
  describe('Basics', () => {
    describe('Cell', () => {
      let c: Cell;
      beforeEach(() => {
        c = new Cell(new Position(0, 0));
        const spy = spyOn(c, 'eliminateValue').and.callThrough();
      });
      it('test eliminating values', () => {
        c.eliminateValue(1);
        expect(c.eliminateValue).toHaveBeenCalledWith(1);
        c.eliminateValue(2);
        expect(c.eliminateValue(2)).toBeFalsy();
        c.eliminateValue(3);
        c.eliminateValue(4);
        c.eliminateValue(5);
        c.eliminateValue(6);
        c.eliminateValue(7);
        expect(c.value).toBeUndefined();
        expect(c.eliminateValue(8)).toBeTruthy();
        expect(c.value).toBe(9);
        expect(() => {
          c.eliminateValue(6);
        }).toThrowError('Tried to eliminate on a cell with set value');
        expect(c.value).toBe(9);
      });
    });
    describe('Sudoko', () => {
      it('get Supporting Cells returns the right cells', () => {
        s = new Sudoko([]);
        expect(
          s.getSupportingCells(new Cell(new Position(0, 0))).map((c: Cell) => {
            return c.position.x + '-' + c.position.y;
          })
        ).toEqual([
          '0-0',
          '0-1',
          '0-2',
          '0-3',
          '0-4',
          '0-5',
          '0-6',
          '0-7',
          '0-8',
          '0-0',
          '1-0',
          '2-0',
          '3-0',
          '4-0',
          '5-0',
          '6-0',
          '7-0',
          '8-0',
          '0-0',
          '0-1',
          '0-2',
          '1-0',
          '1-1',
          '1-2',
          '2-0',
          '2-1',
          '2-2'
        ]);
      });
      it('test eliminating values in one row', () => {
        const guess: Cell[] = [];
        const text: string = '023456789';
        expect(text.length).toBe(9);
        for (let i = 0; i < text.length; i++) {
          if (text[i] !== '0') {
            guess.push(
              new Cell(new Position((i - (i % 9)) / 9, i % 9), Number(text[i]))
            );
          }
        }
        s = new Sudoko(guess);
        const spy = spyOn(s, 'getSupportingCells').and.callThrough();
        const c1 = s.getPosition(new Position(0, 0));
        s.eliminateCell(c1);
        expect(s.getSupportingCells).toHaveBeenCalled();
        expect(s.cells[0].value).toBe(1);
      });
      it('test getting the right square for 1,2', () => {
        s = new Sudoko([]);
        expect(
          s.getSquare(new Position(1, 2)).map((c: Cell) => {
            return c.position.x + '-' + c.position.y;
          })
        ).toEqual([
          '0-0',
          '0-1',
          '0-2',
          '1-0',
          '1-1',
          '1-2',
          '2-0',
          '2-1',
          '2-2'
        ]);
      });
      it('test eliminating values across rows, squares and columns', () => {
        const guess: Cell[] = [];
        const text: string = `0230000000450000006780000009`;
        for (let i = 0; i < text.length; i++) {
          if (text[i] !== '0') {
            guess.push(
              new Cell(new Position((i - (i % 9)) / 9, i % 9), Number(text[i]))
            );
          }
        }
        s = new Sudoko(guess);
        const c1 = s.getPosition(new Position(0, 0));
        const spyEliminateCell = spyOn(s, 'eliminateCell').and.callThrough();
        const spyCell = spyOn(c1, 'eliminateValue').and.callThrough();
        s.eliminateCell(c1);
        expect(s.cells[0].value).toBe(1);
        console.log('Sudoko.spyEliminateCell: ', spyEliminateCell.calls.all());
        console.log('Cell.eliminateValue: ', spyCell.calls.all());
      });
    });
  });
  describe('Puzzles', () => {
    it('text based puzzle 0', () => {
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
      s = new Sudoko(guess);
      s.elminateAllCells();
      expect(s.cells.filter((c: Cell) => c.value).length).toBe(81);
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
      expect(s.cells.filter((c: Cell) => c.value).length).toBe(81);
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
      s = new Sudoko(guess);
      s.elminateAllCells();
      expect(s.cells.filter((c: Cell) => c.value).length).toBe(81);
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
      expect(s.cells.filter((c: Cell) => c.value).length).toBe(81);
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
      expect(s.cells.filter((c: Cell) => c.value).length).toBe(81);
    });
    describe('Puzzle 5', () => {
      beforeEach(() => {
        const guess: Cell[] = [];
        const text: string =
          '708000069000000380023867500007080050691000438050030900006415790019000000570000106';
        for (let i = 0; i < text.length; i++) {
          if (text[i] !== '0') {
            guess.push(
              new Cell(new Position((i - (i % 9)) / 9, i % 9), Number(text[i]))
            );
          }
        }
        s = new Sudoko(guess);
      });
      it('solve 0,6', () => {
        const c1 = s.getPosition(new Position(0, 6));
        s.eliminateCell(c1);
        expect(s.getPosition(c1.position).value).toBe(2);
      });
      it('solve all', () => {
        console.log(s.print());
        const spyEliminateCell = spyOn(s, 'eliminateCell').and.callThrough();
        try {
          s.elminateAllCells();
        } catch (e) {
          console.log(e);
        }
        // spyEliminateCell.calls
        //   .all()
        //   .filter(e => e.returnValue)
        //   .forEach(c =>
        //     console.log(
        //       `pos: ${c.args[0].position.x} - ${c.args[0].position.y}`,
        //       `val: ${c.args[0].value}`
        //     )
        //   );
        console.log(s.print());
        expect(s.cells.filter((c: Cell) => c.value).length).toBe(81);
        for (let i = 0; i <= 8; i++) {
          expect(
            s
              .getRow(i)
              .map((c: Cell) => c.value)
              .sort()
          ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
          expect(
            s
              .getColumn(i)
              .map((c: Cell) => c.value)
              .sort()
          ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        }
      });
    });
    describe('Puzzle 6', () => {
      beforeEach(() => {
        const guess: Cell[] = [];
        const text: string =
          '030050040008010500460000012070502080000603000040109030250000098001020600080060020';
        for (let i = 0; i < text.length; i++) {
          if (text[i] !== '0') {
            guess.push(
              new Cell(new Position((i - (i % 9)) / 9, i % 9), Number(text[i]))
            );
          }
        }
        s = new Sudoko(guess);
      });
      it('solve all', () => {
        console.log(s.print());
        const spyEliminateCell = spyOn(s, 'eliminateCell').and.callThrough();
        try {
          s.elminateAllCells();
        } catch (e) {
          console.log(e);
        }
        spyEliminateCell.calls
          .all()
          .filter(e => e.returnValue)
          .forEach(c =>
            console.log(
              `pos: ${c.args[0].position.x} - ${c.args[0].position.y}`,
              `val: ${c.args[0].value}`
            )
          );
        console.log(s.print());
        expect(s.cells.filter((c: Cell) => c.value).length).toBe(81);
      });
    });
    fdescribe('Puzzle 7', () => {
      beforeEach(() => {
        const guess: Cell[] = [];
        const text: string = `003020600900305001001806400008102900700000008006708200002609500800203009005010300`;
        for (let i = 0; i < text.length; i++) {
          if (text[i] !== '0') {
            guess.push(
              new Cell(new Position(i % 9, (i - (i % 9)) / 9), Number(text[i]))
            );
          }
        }
        s = new Sudoko(guess);
      });
      fit('solve all', () => {
        console.log(s.print());
        const spyEliminateCell = spyOn(s, 'eliminateCell').and.callThrough();
        try {
          s.elminateAllCells();
        } catch (e) {
          console.log(e);
          throw e;
        }
        console.log(s.print());
        expect(s.cells.filter((c: Cell) => c.value).length).toBe(81);
        for (let i = 0; i <= 8; i++) {
          expect(
            s
              .getRow(i)
              .map((c: Cell) => c.value)
              .sort()
          ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
          expect(
            s
              .getColumn(i)
              .map((c: Cell) => c.value)
              .sort()
          ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        }
      });
    });
  });
});
