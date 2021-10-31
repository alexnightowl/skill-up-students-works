function fun1() {
    let rtl = document.getElementById("rtl").value;
    let rtr = document.getElementById("rtr").value;
    let rbr = document.getElementById("rbr").value;
    let rbl = document.getElementById("rbl").value;
    let ttl = document.getElementById("ttl");
    let ttr = document.getElementById("ttr");
    let tbr = document.getElementById("tbr");
    let tbl = document.getElementById("tbl");

    let block = document.getElementById("block");
    
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px'; 
}

function fun2() {
    let colRed = document.getElementById("col__red").value;
    let colGreen = document.getElementById("col__green").value;
    let colBlue = document.getElementById("col__blue").value;
    let rTrans = document.getElementById("rtrans").value;
    let tRed = document.getElementById("t__col__red");
    let tGreen = document.getElementById("t__col__green");
    let tBlue = document.getElementById("t__col__blue");
    let tTrans = document.getElementById("ttrans");

    let block = document.getElementById("block");

    tRed.value = colRed;
    tGreen.value = colGreen;
    tBlue.value = colBlue;
    tTrans.value = rTrans;

    block.style.backgroundColor = `rgba(${colRed}, ${colGreen}, ${colBlue}, ${rTrans})`;
    
}

function fun3() {
    let sX = document.getElementById("sx").value;
    let sY = document.getElementById("sy").value;
    let sRad = document.getElementById("srad").value;
    let tSX = document.getElementById("tsx");
    let tSY = document.getElementById("tsy");
    let tRad = document.getElementById("tsrad");

    let block = document.getElementById("block");

    tSX.value = sX;
    tSY.value = sY;
    tRad.value = sRad;

    block.style.boxShadow = `${sX}px ${sY}px ${sRad}px`;
    
}

function fun4() {
    let borColR = document.getElementById("borcolr").value;
    let borColG = document.getElementById("borcolg").value;
    let borColB = document.getElementById("borcolb").value;
    let borWidth = document.getElementById("borw").value;
    let tBorWidth = document.getElementById("tborw");

    let block = document.getElementById("block");

    tBorWidth.value = borWidth;

    block.style.border = `${borWidth}px solid rgb(${borColR} ${borColG} ${borColB})`;
    
}

function fun5() {
    let fontSize = document.getElementById("fontsize").value;
    let fontColR = document.getElementById("fontcolr").value;
    let fontColG = document.getElementById("fontcolg").value;
    let fontColB = document.getElementById("fontcolb").value;
    let tFontSize = document.getElementById("tfontsize");
    

    let block = document.getElementById("block__text");

    tFontSize.value = fontSize;

    block.style.fontSize = `${fontSize}px`;
    block.style.color = `rgb(${fontColR}, ${fontColG}, ${fontColB}`;
    
}