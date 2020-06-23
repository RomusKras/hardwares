summatorcolorone = 0;
summatorcolortwo = 0;
function gosumm(){
material = document.getElementsByName('material');
colorone = document.getElementsByName('color-type-one');
colortwo = document.getElementsByName('color-type-two');
thiscolor = document.getElementsByClassName('color-one-pick');
summator = 0;

if (summatorcolorone == 0) {
    document.getElementById('otvet').innerHTML = 'Необходимо выбрать цвет.';
    } else if (summatorcolortwo == 0) {
    	document.getElementById('otvet').innerHTML = 'Необходимо выбрать инверсию цвета.';
    } else {
    	if (material[0].checked)
		{summator=summator+100;} else if (material[1].checked)
		{summator=summator+200;} else if (material[2].checked)
		{summator=summator+300;} else
		{summator=summator+0;}

		summator = summator +  window.summatorcolorone + window.summatorcolortwo;

		document.getElementById('otvet').innerHTML = 'Предварительная стоимость: ' + summator;
    }
  }

function changecolors(whichcolor) {
    thiscolor = document.getElementsByClassName('color-one-pick');

    for (var i = 0; i < thiscolor.length; i++) {
        thiscolor[i].style.border = "none";
    }

    thiscolor[whichcolor].style.border = "solid 3px #f0801e";
    window.summatorcolorone = (Number(whichcolor)+1)*100;
}

function changecolorsinv(whichcolorinv) {
    thiscolor = document.getElementsByClassName('color-two-pick');

    for (var i = 0; i < thiscolor.length; i++) {
        thiscolor[i].style.border = "none";
    }

    thiscolor[whichcolorinv].style.border = "solid 3px #f0801e";
    window.summatorcolortwo = (Number(whichcolorinv)+1)*100;
}

function signpick() {
  	signobject = document.getElementsByClassName('sign-pick');
  	signobject.onlick = signobject.style.border = "solid 5px #f0801e";
}

function picktable(whichtable) {
    thiscolor = document.getElementsByClassName('metallsign');
    thiscap = document.getElementsByClassName('sign-cap');
    thispick = document.getElementsByClassName('cosn-sign');


    //Hide sign labels
    for (var i = 0; i < thiscap.length; i++) {
        thiscap[i].style.backgroundColor = "#727272";
    }

    // Hide picktures
    for (var i = 0; i < thispick.length; i++) {
        thispick[i].style.display = "none";
    }

    // Show one pickture
    for (var i = 0; i < thispick.length; i++) {
      if (i==whichtable) {
        thispick[i].style.display = "unset";
        break;
      }
    }

    for (var i = 0; i < thiscap.length; i++) {
      if (i==whichtable) {
        thiscap[i].style.backgroundColor = "#f0801e";
        break;
      }
    }


    for (var i = 0; i < thiscolor.length; i++) {
        thiscolor[i].style.border = "solid 2px #292929";
    }


    thiscolor[whichtable].style.border = "2px solid rgb(240, 128, 30)";
    //window.summatorcolortwo = (Number(whichtable)+1)*100;
}
