        const gameTitle = document.querySelectorAll('.title');

        const gameBoard = document.querySelector('#game_board');

        const gameState = [
            [gameTitle[0], gameTitle[1], gameTitle[2]],
            [gameTitle[3], gameTitle[4], gameTitle[5]],
            [gameTitle[6], gameTitle[7], gameTitle[8]]
        ];

        function render(gameBoard) {
            gameState.forEach((row) => {
                row.forEach((column) => {
                    gameBoard.appendChild(column);
                });
            })
        }

        gameBoard.addEventListener('click', (event) => {
            const target = event.target;
            let emptyx, emptyy
            let x, y

            gameState.forEach((row, rowIndex) => {
                row.forEach((column, columnIndex) => {
                    if(column === target) {
                        x = rowIndex;
                        y = columnIndex;
                    }
                }); 

            });

            gameState.forEach((row, rowIndex) => {
                row.forEach((column, columnIndex) => {
                    if(column.innerHTML === ' ') {
                        emptyx = rowIndex;
                        emptyy = columnIndex;
                    }
                }); 

            });

            if(emptyx === x && ( y + 1 === emptyy || y - 1 === emptyy) ||
             emptyy === y && (x + 1 === emptyx || x - 1 === emptyx)) {
                const temp = gameState[x][y];
                gameState[x][y] = gameState[emptyx][emptyy];
                gameState[emptyx][emptyy] = temp;
                render(gameBoard, gameState);
            }
        });