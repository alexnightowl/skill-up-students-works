function fun1 () {
    var  rtl=document.getElementById('rtl');
    var  rtr=document.getElementById('rtr');
    var  rbr=document.getElementById('rbr');
    var  rbl=document.getElementById('rbl');
    var  ttl=document.getElementById('ttl');
    var  ttr=document.getElementById('ttr');
    var  tbr=document.getElementById('tbr');
    var  tbl=document.getElementById('vbl');

    var block = document.getElementById('block');
    
    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;

    block.style.borderRadius=rtl+'px ' +rtr +'px ' +rbr +'px '+rbl+'px ';   
}
