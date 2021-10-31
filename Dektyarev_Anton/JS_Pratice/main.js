var block = document.getElementById("block");

function func1() {

    var rtl = document.getElementById("rtl").value;
    var ttl = document.getElementById("ttl");

    var rtr = document.getElementById("rtr").value;
    var ttr = document.getElementById("ttr");

    var rbr = document.getElementById("rbr").value;
    var tbr = document.getElementById("tbr");

    var rbl = document.getElementById("rbl").value;
    var tbl = document.getElementById("tbl");

    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;

    block.style.borderRadius = rtl + "% " + rtr + "% " + rbr + "% " + rbl + "% ";
};

var buttonColor = document.getElementsByClassName("btn");

buttonColor[0].addEventListener("click", function () {
    block.style.background = "black";
});
buttonColor[1].addEventListener("click", function () {
    block.style.background = "white";
});
buttonColor[2].addEventListener("click", function () {
    block.style.background = "red";
});
buttonColor[3].addEventListener("click", function () {
    block.style.background = "green";
});
buttonColor[4].addEventListener("click", function () {
    block.style.background = "yellow";
});
buttonColor[5].addEventListener("click", function () {
    block.style.background = "blue";
});
buttonColor[6].addEventListener("click", function () {
    block.style.background = "pink";
});
buttonColor[7].addEventListener("click", function () {
    block.style.background = "orange";
});
buttonColor[8].addEventListener("click", function () {
    block.style.background = "purple";
});
buttonColor[9].addEventListener("click", function () {
    block.style.background = "lavender";
});

function func2() {

    var redBgRange = document.getElementById("red").value;
    var greenBgRange = document.getElementById("green").value;
    var blueBgRange = document.getElementById("blue").value;

    var redBox = document.getElementById("rb");
    var greenBox = document.getElementById("gb");
    var blueBox = document.getElementById("bb");

    redBox.value = redBgRange;
    greenBox.value = greenBgRange;
    blueBox.value = blueBgRange;

    block.style.background = `rgb(${redBgRange}, ${greenBgRange}, ${blueBgRange})`;
};

function func2a() {
    var bgPicker = document.getElementById("cpic").value;
    block.style.background = bgPicker;
}

function func3() {

    var opacityRange = document.getElementById("opacity").value;
    block.style.opacity = opacityRange + "%";
};

function func4() {

    var offsetX = document.getElementById("ox").value;
    var offsetY = document.getElementById("oy").value;
    var blurRadius = document.getElementById("blurr").value;
    var rangeRadius = document.getElementById("spreadr").value;

    var sRedRange = document.getElementById("sred").value;
    var sGreenRange = document.getElementById("sgreen").value;
    var sBlueRange = document.getElementById("sblue").value;

    var sRedBox = document.getElementById("srb");
    var sGreenBox = document.getElementById("sgb");
    var sBlueBox = document.getElementById("sbb");

    sRedBox.value = sRedRange;
    sGreenBox.value = sGreenRange;
    sBlueBox.value = sBlueRange;

    block.style.boxShadow = offsetX + "px " + offsetY + "px " + blurRadius + "px " + rangeRadius + "px " + `rgb(${sRedRange}, ${sGreenRange}, ${sBlueRange})`;
};

function func4a() {
    var sBgPicker = document.getElementById("scpic").value;

    var offsetX = document.getElementById("ox").value;
    var offsetY = document.getElementById("oy").value;
    var blurRadius = document.getElementById("blurr").value;
    var rangeRadius = document.getElementById("spreadr").value;

    block.style.boxShadow = offsetX + "px " + offsetY + "px " + blurRadius + "px " + rangeRadius + "px " + sBgPicker;
};

function func5() {
    var bType = document.querySelector('input[name="bordertype"]:checked').value;

    var bDepth = document.getElementById("bdepth").value;

    var bRedRange = document.getElementById("bred").value;
    var bGreenRange = document.getElementById("bgreen").value;
    var bBlueRange = document.getElementById("bblue").value;

    var bDepthInfo = document.getElementById("bdepthinfo");

    bDepthInfo.value = bDepth;
    block.style.border = bDepth + "px " + bType + " " + `rgb(${bRedRange}, ${bGreenRange}, ${bBlueRange})`;
};

function func5a() {
    var bType = document.querySelector('input[name="bordertype"]:checked').value;

    var bDepth = document.getElementById("bdepth").value;

    var bBgPicker = document.getElementById("bcpic").value;

    block.style.border = bDepth + "px " + bType + " " + bBgPicker;
};

function func6() {
    var bWidth = document.getElementById("bwidth").value;
    var textBlockWidth = document.getElementById("tbw");
    textBlockWidth.value = bWidth;


    var bHeigth = document.getElementById("bheigth").value;
    var textBlockHeigth = document.getElementById("tbh");
    textBlockHeigth.value = bHeigth;

    var bRotate = document.getElementById("brotate").value;
    var textBlockRotate = document.getElementById("ttbr");
    textBlockRotate.value = bRotate;

    block.style.width = bWidth + "px";
    block.style.height = bHeigth + "px";
    block.style.transform = `rotate(${bRotate}deg)`;
};

function func7() {
    var textToBlock = document.getElementById("blocktext").value;
    var textInBlock = document.getElementById("inboxtext");

    var textFontSize = document.getElementById("textfontsize").value;

    var textColor = document.getElementById("textblockcolor").value;

    var textFontWeight = document.getElementById("textfontweight").value;

    textInBlock.innerText = textToBlock;
    textInBlock.style.fontSize = textFontSize + "px";
    textInBlock.style.color = textColor;
    textInBlock.style.fontWeight = textFontWeight;
};