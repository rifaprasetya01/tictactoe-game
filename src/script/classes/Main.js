export default class TicTacToe {
  constructor() {
    this.turnDisplay = document.getElementById('turnDisplay');
    this.gameWinner = document.getElementById('gameWinner');
    this.historyListDisplay = document.getElementById('historyListDisplay');
    this.cells = document.getElementsByClassName('col');
    this.player = ['x', 'o'];
    this.turn = 'x';
    this.board = ['', '', '', '', '', '', '', '', '', ''];
    this.winningCondition = [
      [1, 2, 3],
      [3, 6, 9],
      [1, 4, 7],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7],
      [2, 5, 8],
      [4, 5, 6],
    ];
    this.isRunning = true;
  }

  play() {
    this.setStep();
  }

  setStep() {
    Array.from(this.cells).forEach((cell, index) => {
      cell.addEventListener('click', (e) => {
        if (this.isRunning) {
          if (this.board[index] === '') {
            e.target.innerHTML = `<span class="step">${this.turn}</span>`;
            this.board[index] = this.turn;

            if (this.isEndGame()) {
              this.isRunning = false;
              setTimeout(() => {
                alert(`${this.turn} is the WINNER!`);
                const isPlayAgain = confirm('Play Again?');
                if (isPlayAgain) window.location.reload();
                else window.location.href = '../index.html';
              }, 100);
              return;
            }

            if (this.turn === 'x') {
              this.turn = 'o';
            } else {
              this.turn = 'x';
            }
            this.turnDisplay.textContent = this.turn;
          }
        }
      });
    });
  }

  isEndGame() {
    for (const option of this.winningCondition) {
      const cellA = this.board[option[0] - 1];
      const cellB = this.board[option[1] - 1];
      const cellC = this.board[option[2] - 1];

      if (cellA === '' || cellB === '' || cellC === '') continue;
      if (cellA === cellB && cellB === cellC) return true;
    }
  }
}
