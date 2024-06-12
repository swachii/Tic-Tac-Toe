document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    let currentPlayer = "X";
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    function checkWin() {
        return winningCombos.some(combo => {
            return combo.every(index => {
                return boxes[index].innerText === currentPlayer;
            });
        });
    }

    function checkDraw() {
        return [...boxes].every(box => {
            return box.innerText === "X" || box.innerText === "O";
        });
    }

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            if (box.innerText === "") {
                box.innerText = currentPlayer;
                if (checkWin()) {
                    alert(`${currentPlayer} wins!`);
                    resetGame();
                } else if (checkDraw()) {
                    alert("It's a draw!");
                    resetGame();
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    function resetGame() {
        boxes.forEach(box => {
            box.innerText = "";
        });
        currentPlayer = "X";
    }
});
