var amsterdam = [1500, 500, 1800, 700];

var london = [2500, 1500, 1000, 900];

function mean(m) {

	var sum =0;
	for (var i = 0; i < m.length; i++) {
		sum=sum+m[i];
	}
	return sum/m.length;
}

document.getElementById('avg2').innerHTML=mean(london);
document.getElementById('avg1').innerHTML=mean(amsterdam);
var result=(mean(london)-mean(amsterdam));
document.getElementById("result").innerHTML=result+" €";