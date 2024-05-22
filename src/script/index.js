import TicTacToe from './classes/Main.js';

function main() {
  const ticTacToe = new TicTacToe();
  ticTacToe.play();
}

window.onload = () => {
  main();
};
