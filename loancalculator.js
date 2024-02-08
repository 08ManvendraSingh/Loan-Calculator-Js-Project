

// q.addEventListener('click',cal);
// a.addEventListener('Keyup',cal);
// b.addEventListener('Keyup',cal);
// c.addEventListener('Keyup',cal);

// var aa=a.value;
// var bb=b.value;
// var cc=c.value;
function cal(){
var a=document.getElementById('ainput').value;
var b=document.getElementById('iinput').value;
var c=document.getElementById('minput').value;
var d=document.getElementById('output');


	var e=Number((a*b)/100);
	var f=a+e;
	d.value=f;
}
