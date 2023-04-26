let playerScore = 0;
let pcScore = 0;

const playerIMG = document.getElementById( 'player' );
const pcIMG = document.getElementById( 'pc' );

const scoreBox = document.querySelector( '.score' );

function play ( choice )
{

	const images = [ 'dash', 'kaghiz', 'qaychi' ];
	const random = parseInt( Math.random() * 3 );

	playerIMG.src = `./assets/img/${choice}.png`;
	pcIMG.src = `./assets/img/${images[ random ] }.png`;

	if ( choice === images[ random ] )
	{
		return 0;
	}

	if ( choice === 'dash' )
	{
		//səndə daşdırsa qayçı olsa udursan
		images[ random ] === 'qaychi' ? playerScore++ : pcScore++;
	}
	else if ( choice === 'kaghiz' )
	{
		//səndə kağızdırsa dash olsa udursan
		images[ random ] === 'dash' ? playerScore++ : pcScore++;
	}
	else
	{
		//səndə qayçıdırsa kağız olsa udursan
		images[ random ] === 'kaghiz' ? playerScore++ : pcScore++;
	}
}

function updateScore(){
	scoreBox.innerText = `${playerScore} -  ${pcScore}`;
}

document.addEventListener( 'keydown', function ( e ) {
	console.log(e.code);
	switch ( e.code )
	{
		case 'KeyQ' :
			play( 'qaychi' );
			break;
		case 'KeyK' :
			play( 'kaghiz' );
			break;
		case 'KeyD' :
			play( 'dash' );
			break;
		default :
			alert( 'Yalnız d, q, k düymələrinə basın!' );
	}

	updateScore();
} );