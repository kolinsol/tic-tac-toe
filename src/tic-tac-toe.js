class TicTacToe {
    constructor() {
      this.field = [[null, null, null], [null, null, null], [null, null, null]];
      this.currentSymbol = "x";
    }

    getCurrentPlayerSymbol() {
      return this.currentSymbol;
    }

    nextTurn(x, y) {
      if (!this.field[x][y]) {
        this.field[x][y] = this.currentSymbol;
        this.currentSymbol = (this.currentSymbol === "x") ? "o" : "x";
      }
    }

    isFinished() {
      return (this.getWinner() || this.noMoreTurns()) ? true : false;
    }

    getWinner() {
      for(let i = 0; i < 3; i++) {
        if (this.field[i][0] === this.field[i][1]
          && this.field[i][1] === this.field[i][2]) {
            if (this.field[i][0]) return this.field[i][0];
        }
      }
      for(let i = 0; i < 3; i++) {
        if (this.field[0][i] === this.field[1][i]
          && this.field[1][i] === this.field[2][i]) {
            if (this.field[0][i]) return this.field[0][i];
        }
      }
      if (this.field[0][0] === this.field[1][1]
        && this.field[1][1] === this.field[2][2]) {
          if (this.field[1][1]) return this.field[1][1];
      }
      if (this.field[0][2] === this.field[1][1]
        && this.field[1][1] === this.field[2][0]) {
          if (this.field[1][1]) return this.field[1][1]
      }
      return null;
    }

    noMoreTurns() {
      return this.field.reduce((acc, cur) => acc.concat(cur), []).every(x => x !== null);
    }

    isDraw() {
      return (!this.getWinner() && this.noMoreTurns()) ? true : false;
    }

    getFieldValue(x, y) {
      return this.field[x][y];
    }
}

module.exports = TicTacToe;
