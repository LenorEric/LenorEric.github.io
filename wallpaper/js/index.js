var size = 86;
var columns = Array.from(document.getElementsByClassName('column'));
var d = void 0,
    c = void 0;
var classList = ['visible', 'close', 'far', 'far', 'distant', 'distant'];
var use24HourClock = true;

function padClock(p, n) {
	return p + ('0' + n).slice(-2);
}

function getClock() {
	d = new Date();
	return [use24HourClock ? d.getHours() : d.getHours() % 12 || 12, d.getMinutes(), d.getSeconds()].reduce(padClock, '');
}

function getClass(n, i2) {
	return classList.find(function (class_, classIndex) {
		return Math.abs(n - i2) === classIndex;
	}) || '';
}

var loop = setInterval(function () {
	c = getClock();

	columns.forEach(function (ele, i) {
		var n = +c[i];
		var offset = -n * size;
		ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + size / 2 + 'px))';
		Array.from(ele.children).forEach(function (ele2, i2) {
			ele2.className = 'num ' + getClass(n, i2);
		});
	});
}, 200 + Math.E * 10);

function changeBg() {
	var seedsP = Math.floor(Math.random() * (20));;
	if (0 <= seedsP&&seedsP < 2) {
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/ZYBLQvi5J1Fs9TP.jpg')"
	}
	else if(2 <= seedsP&&seedsP < 4) {
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/Plw9hmKg8M4Fcio.jpg')"
	}
	else if(4 <= seedsP&&seedsP < 6) {
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/52s7vOczSWdgiGU.jpg')"
	}
	else if(6 <= seedsP&&seedsP < 8) {
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/YPlQiSxDGV7v3MI.jpg')"
	}
	else if(8 <= seedsP&&seedsP < 10) {
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/9rxySdEIXmWkHt5.jpg')"
	}
	else if(10 <= seedsP&&seedsP < 12) {
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/BtpUwePsiJEvhFf.jpg')"
	}
	else if(12 <= seedsP&&seedsP < 14) {
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/OkA2G76zorhN3Ed.jpg')"
	}
	else if(14 <= seedsP&&seedsP < 16) {
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/mQxvFAyM5kuRhZO.jpg')"
	}
	else if(16 <= seedsP&&seedsP < 18) {
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/HviBhU4ox9JWayg.jpg')"
	}
	else if(18 <= seedsP&&seedsP < 20) {
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/1mfIkEPYvVAhK4Q.jpg')"
	}
	else
		document.body.style.backgroundImage ="url('https://i.loli.net/2021/06/20/ZYBLQvi5J1Fs9TP.jpg'')"
}

changeBg();
setInterval(function(){ changeBg(); }, 600000); //600000 means 10 min

 // images from UHDbeta.com