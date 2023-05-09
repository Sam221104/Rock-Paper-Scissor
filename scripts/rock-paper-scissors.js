            let score = JSON.parse(localStorage.getItem('score'))
                        // to retrieve the data from localstorage
            
            if (score===null) { // or we can use !score [not operator]
                score = {
                    wins : 0,
                    loses :0,
                    ties : 0
                }
            }
    
            updateScore()

            function playGame(playerMove){
                let result = ''
                if (playerMove === 'Scissors') {
                    if (computerMove === 'Rock'){
                    result = 'You Lose.'
                } else if (computerMove === 'Scissors') {
                    result = 'Tie.'
                } else if (computerMove === 'Paper'){
                    result = 'You Win.'
                }
                }
                else if (playerMove === 'Paper') {
                    
                    if (computerMove === 'Rock'){
                        result = 'You Win.'
                    } else if (computerMove === 'Scissors') {
                        result = 'You Lose.'
                    } else if (computerMove === 'Paper'){
                        result = 'Tie.'
                    }
                }
               else if (playerMove === 'Rock') {
                if (computerMove === 'Rock'){
                    result = 'Tie.'
                } else if (computerMove === 'Scissors') {
                    result = 'You Win.'
                } else if (computerMove === 'Paper'){
                    result = 'You Lose.'
                }
               }
               if (result === 'You Win.') {
                score.wins+=1
               }
               else if (result === 'You Lose.'){
                score.loses+=1
               }
               else if (result ==='Tie.'){
                score.ties+=1
               }
                scores = JSON.stringify(score) // to convert objects to string as localStorage accepts only string as name and value
               // to save data in localstorage setItem is used
                localStorage.setItem('score',scores)
                
                updateScore()
                
                document.querySelector('.js-result').innerHTML =  result;
                
                document.querySelector('.js-moves').innerHTML =`
                <div class="move-container">
                    <div class="move-result">
                        <span class = "player-text">You</span> 
                        <div class="move-icon-container">
                            <img src="images/${playerMove}-emoji.png" class="move-icon">
                        </div>
                    </div>
                    <div class="move-result">
                        <div class="move-icon-container">
                            <img src="images/${computerMove}-emoji.png" class="move-icon">
                        </div>
                        <span class = "player-text">Computer</span>
                    </div>
                </div>`
            }
            function updateScore(){
                document.querySelector('.js-score').innerHTML = `
                <div class="score-container">
                    <div class="score-result">
                        <span class = "win-lose-tie-count">Wins</span> : ${score.wins}
                    </div>
                    &emsp;
                    <div class="score-result">
                        <span class = "win-lose-tie-count"> Loses </span>: ${score.loses}
                    </div>
                     &emsp;
                    <div class="score-result">
                        <span class = "win-lose-tie-count">Tie</span> : ${score.ties}
                    </div
                </div>`
            }
            let computerMove = ''
            function pickComputerMove(){
                const randomNumber = Math.random()

                if (randomNumber >= 0 && randomNumber < 1/3) {
                    computerMove = 'Rock'
                } else if ( randomNumber >= 1/3 && randomNumber < 2/3 ){
                    computerMove = 'Paper'
                } else if ( randomNumber >= 2/3 && randomNumber < 1)  {
                    computerMove = 'Scissors'
                }
            }