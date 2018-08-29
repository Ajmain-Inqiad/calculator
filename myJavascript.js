var doc=document.getElementById('display');

function result(){
	a=doc.value;
	a=eval(a);
	if(a=="Infinity"){
		doc.value=0;
	}
	else{
		doc.value=a;
	}
}

function backspace(){
	var num=doc.value;
	var len=num.length-1;
	var newNum=num.substring(0,len);
	doc.value=newNum;
}

function power(b){
	a=doc.value;
	a=Math.pow(a,b);
	doc.value=a;
}
