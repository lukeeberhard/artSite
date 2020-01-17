/*
Lucas Eberhard
Henry Kang
Web Programming - CMPSCI 3010
4/10/18
*/

var cardList = [];
cardList[0] = "https://i.imgur.com/mCOVV9P.png";
cardList[1] = "https://i.imgur.com/mCOVV9P.png";
cardList[2] = "https://i.imgur.com/bsi7GnZ.png";
cardList[3] = "https://i.imgur.com/bsi7GnZ.png";
cardList[4] = "https://i.imgur.com/hKS03wZ.png";
cardList[5] = "https://i.imgur.com/hKS03wZ.png";
cardList[6] = "https://i.imgur.com/UYdmmuH.png";
cardList[7] = "https://i.imgur.com/UYdmmuH.png";
cardList[8] = "https://i.imgur.com/hfa9yh2.png";
cardList[9] = "https://i.imgur.com/hfa9yh2.png";
cardList[10] = "https://i.imgur.com/Vscpopo.png";
cardList[11] = "https://i.imgur.com/Vscpopo.png";
cardList[12] = "https://i.imgur.com/SHy6E5a.png";
cardList[13] = "https://i.imgur.com/SHy6E5a.png";
cardList[14] = "https://i.imgur.com/DUOr0iP.png";
cardList[15] = "https://i.imgur.com/DUOr0iP.png";

var cardFlipped = [];

function shuffle(array) {
	
	for (i = array.length - 1; i > 0; i--) {
	
		var j = Math.floor(Math.random() * (i + 1));
		
		var k = array[i];
		array[i] = array[j];
		array[j] = k;		
		
	}
	
	return array;
	
}

var clickCount = 0;
var matchCount = 0;

var globalNum;
var globalNum2;

var dom;
var dom2;

function deal() {
	
	cardList = shuffle(cardList);
	
	resetAll();

	for (i = 0; i < 16; i++) {
	
		cardFlipped[i] = 0;
	
	}	

	hide();
	
}

window.onload = deal();

function display() {

	document.getElementById("restart").style.display = "inline";

}

function hide() {

	document.getElementById("restart").style.display = "none";

}

function reset(x) {
	
	document.getElementById(parseInt(x)).src = "https://i.imgur.com/o8kaSCr.png";
	cardFlipped[x] = 0;
	
}

function resetAll() {
	
	for (i = 0; i < 16; i++) {
		
		document.getElementById(parseInt(i)).src = "https://i.imgur.com/o8kaSCr.png";
		cardFlipped[i] = 0;
		
	}

	matchCount = 0;

}

function flip(x) {
	
	if (cardFlipped[x] == 1) {
		return;
	}
	
	if (clickCount == 0) {
		
		globalNum = x;
	
		document.getElementById(parseInt(x)).src = cardList[x];
		dom = document.getElementById(parseInt(x)).src;
		cardFlipped[x] = 1;
		clickCount = 1;
		
	}

	else if (clickCount == 1) {
		
		globalNum2 = x;
		
		document.getElementById(parseInt(x)).src = cardList[x];
		dom2 = document.getElementById(parseInt(x)).src;
		check(dom, dom2);
		
	}
	
}

function check(dom, dom2) {
	
	if (dom == dom2) {
		cardFlipped[globalNum2] = 1;
		matchCount++;
		clickCount = 0;
		if (matchCount >= 8) {
			display();	
		}
	}
	else {
		setTimeout(reset, 1000, globalNum);
		setTimeout(reset, 1000, globalNum2);
		clickCount = 0;
	}

}