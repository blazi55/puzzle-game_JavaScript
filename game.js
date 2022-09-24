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

        function complete(gameState) {
            let array = [];
            gameState.forEach((row, rowIndex) => {
                row.forEach((column, columnIndex) => {
                    if(column.innerHTML === '8' && rowIndex === 0 && columnIndex === 0) {
                        console.log('yee0')
                        let number = 8;
                        array.push(number);
                    }
                    if(column.innerHTML === '7' && rowIndex === 0 && columnIndex === 1) {
                        console.log('yee1')
                        let number = 7;
                        array.push(number);
                    }
                    if(column.innerHTML === '6' && rowIndex === 0 && columnIndex === 2) {
                        console.log('yee2')
                        let number = 6;
                        array.push(number);
                    }
                    if(column.innerHTML === '5' && rowIndex === 1 && columnIndex === 0) {
                        console.log('yee3')
                        let number = 5;
                        array.push(number);
                    }
                    if(column.innerHTML === '4' && rowIndex === 1 && columnIndex === 1) {
                        console.log('yee4')
                        let number = 4;
                        array.push(number);
                    }
                    if(column.innerHTML === '3' && rowIndex === 1 && columnIndex === 2) {
                        console.log('yee5')
                        let number = 3;
                        array.push(number);
                    }
                    if(column.innerHTML === '2' && rowIndex === 2 && columnIndex === 0) {
                        console.log('yee6')
                        let number = 2;
                        array.push(number);
                    }
                    if(column.innerHTML === '1' && rowIndex === 2 && columnIndex === 1) {
                        console.log('yee7')
                        let number = 1;
                        array.push(number);
                    }
                    if(column.innerHTML === ' ' && rowIndex === 2 && columnIndex === 2) {
                        console.log('yee8')
                        let number = 0;
                        array.push(number);
                    }
                    console.log(array)
                });
                if(array.length === 9) {
                    alert('Complete Game!')
                }
            })

        }

        function show() {
            complete(gameState);
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