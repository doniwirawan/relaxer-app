const container = document.getElementById('container');
const text = document.getElementById('text');



modularBreath(4000, 2000, 'grow2', 'shrink2');
setInterval(() => { modularBreath(4000, 2000, 'grow2', 'shrink2') }, 10000);


function GetSelectedValue() {
	clearTimeout()

	const e = document.getElementById("method");
	const result = e.options[e.selectedIndex].value;

	console.log(result);

	if (result == '1') {
		clearTimeout()
		console.log('yoga')

		modularBreath(3000, 1500, 'grow', 'shrink');
		setInterval(() => { modularBreath(3000, 1500, 'grow', 'shrink') }, 7500);



	} else if (result == '2') {
		clearTimeout()

		console.log('424')
		modularBreath(4000, 2000, 'grow2', 'shrink2');
		setInterval(() => { modularBreath(4000, 2000, 'grow2', 'shrink2') }, 10000);

	} else if (result == '3') {
		clearTimeout()

		console.log('444')

		modularBreath(4000, 4000, 'grow2', 'shrink2');
		setInterval(() => { modularBreath(4000, 4000, 'grow2', 'shrink2') }, 12000);
	} else {
		console.error('pilihan anda tidak tersedia');
	}
}


function modularBreath(breathes, holds, grow, shrink) {

	clearTimeout()

	text.innerText = 'Tarik Nafas!';
	container.className = `container ${grow}`;

	setTimeout(() => {
		text.innerText = 'Tahan';


		setTimeout(() => {
			text.innerText = 'Keluarkan Nafas!';
			container.className = `container ${shrink}`;
		}, holds);
	}, breathes);


}
