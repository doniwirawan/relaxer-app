const container  = document.getElementById('container');
const text  = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// console.log(breatheTime, holdTime);
breathAnimation();


function breathAnimation() {
	text.innerText = 'Tarik Nafas!';
	container.className = 'container grow';

	setTimeout(() => {
		text.innerText = 'Tahan';


		setTimeout(()=> {
			text.innerText = 'Keluarkan Nafas!';
			container.className = 'container shrink';
		},holdTime);
	}, breatheTime);
}

setInterval(breathAnimation,totalTime);