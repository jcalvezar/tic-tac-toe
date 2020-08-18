document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
	const squareArray = Array.from(squares)
  const playerDisplay = document.querySelector('#player')

  let currentPlayer = 'playerX'
	let winner = '';

  squares.forEach(square => {
    square.addEventListener('click', clickOutcome)
  })

  function clickOutcome(e) {
    const index = squareArray.indexOf(e.target)

		if (!squares[index].classList.contains('playerX') && !squares[index].classList.contains('playerO') && winner == '') {
			
			squares[index].classList.add(currentPlayer)
			currentPlayer = currentPlayer === 'playerX' ? "playerO" : "playerX";			
			playerDisplay.innerHTML = currentPlayer
			
			winner = checkWinner();
			if ( winner != '') {
				setTimeout(function(){ alert('WINNER '+winner); }, 100);
			}
		}
  }
	
	function checkWinner() {
		let resu = '';
		
		for(let i=0; i<3; i++) {
			resu += checkCol(i)
			resu += checkRow(i)
		}
		
		resu += checkDiag1()
		resu += checkDiag2()
		
		return resu;
	}
	
	function checkCol(x) { return checkPositions(x, x+3, x+6);	}
	function checkRow(x) { let y = x*3; return checkPositions(y, y+1, y+2); }
	function checkDiag1() { return checkPositions(0, 4, 8);	}
	function checkDiag2() { return checkPositions(2, 4, 6); }
	
	function checkPositions(a, b, c) {
		let resu = '';
		
		if (squares[a].classList.value == squares[b].classList.value && squares[b].classList.value == squares[c].classList.value) {
			resu = squares[a].classList.value;
			
			if (resu != '') {
				console.log('Winner ',resu);
			} else {
				resu = '';
			}
		}
		
		return resu;
	}

})
