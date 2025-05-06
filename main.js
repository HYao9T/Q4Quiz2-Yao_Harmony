

function result$(){

	var sub1 = Number(document.getElementById('science').value);
	var sub2 = Number(document.getElementById('math').value);
	var sub3 = Number(document.getElementById('english').value);

	var ave = Number((sub1 + sub2 + sub3)/3);

	var average = Math.round(ave);


	if (average >=94 && average <=100){
		window.alert("your average score is " + average + "-- excellent");
	}

	else if(average >=87 && average <=93.99){
		window.alert("your average score is " + average + "-- above satisfactory");
	}

	else if(average >=80 && average <=86.99){
		window.alert("your average score is " + average + "-- satisfactory");
	}

	else if(average >=75 && average <=79.99){
		window.alert("your average score is " + average + "- needs improvement");
	}

	else if (average >=70 && average<=74.99){
		window.alert("your average score is " + average + "-- poor");
	}
}

