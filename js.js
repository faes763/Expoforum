let turn = 0;
document.querySelector('.imggamb').onclick = function() {
	document.querySelector('.ob').classList.toggle('ok')
	document.querySelector('.imggamb').style.display.toggle = 'none';
	let bro = setTimeout(()=>{
		document.querySelector('.ob').style.left = '0'
	},10);
	turn++;
	
	console.log(turn)
	if (turn%2 == 0) {
		clearTimeout(bro);
		document.querySelector('.ob').style.left = '-100%'
		document.querySelector('.imggamb').src = "img/gamb.png"
	}else {
		document.querySelector('.imggamb').src = "img/kr.png"
	}
}
