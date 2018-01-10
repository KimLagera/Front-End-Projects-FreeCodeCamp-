//use arrays and for loops only
//dont use objects yet


var tipsJar = [];

var baristaList = [['name','hours','%','tips']]; //name, hours

tipsJar.push(['dec 1',32]);
tipsJar.push(['dec 3',25]);
tipsJar.push(['dec 4',40]);
tipsJar.push(['dec 11',10]);

var tipsTotal = 0; //initiate to zero so js knows its a number
for(var i=1; i<tipsJar.length; i++){
	tipsTotal += tipsJar[i][1];
}

console.log(tipsJar[1][0] + " to " + tipsJar[tipsJar.length-1][0] + " = " + tipsTotal);


baristaList.push(['kim',30]);
baristaList.push(['mel',40]);
baristaList.push(['aleana',50]);


var totalHours = 0;

for(var j=1; j<baristaList.length; j++){
	totalHours += baristaList[j][1];
}

for(var k=1; k<baristaList.length; k++){
	baristaList[k].push(baristaList[k][1]/totalHours);
}

for(var l=1; l<baristaList.length; l++){
	baristaList[l].push(Math.round( ((baristaList[l][1]/totalHours)*tipsTotal) ));
}


//adding new barista doesnt work - doesnt get included in tips