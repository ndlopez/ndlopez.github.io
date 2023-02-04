const tot=10;
function pswdgen(){
    const nump = (tot)?(tot):(10);
    const txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    const num = "23456789";
    const sym = "!#$%&()-_}{@][";
    let mystr = num + txt + sym;
    // returns a number between 0 and 9
    //var num2=Math.floor(Math.random() * 10);
    let pasw="";let hole="";
    //var tot=txt.length+num.length+sym.length;
    let ent1,ent2,ent3,i=0;
    while (hole.length<nump) {  
        ent1=Math.floor(mystr.length*Math.random()*Math.random());
        //ent2=Math.floor(Math.random()*Math.random()*num.length);
        //ent3=Math.floor(Math.random()*Math.random()*sym.length);
        //var vec=[ent1,ent2,ent3];
        pasw+=mystr.charAt( ent1 );
        //pasw+=txt[ent1];//Should not be treated as array!!
        //pasw+=num.charAt( ent2 );
        //pasw+=sym.charAt( ent3 );
        hole=pasw;i++;
    }
    //return pasw;	//pasw is a string!
    const num2=hole.length;
    /*ent2=0;
    while(pasw.length<nump){
        ent1=Math.floor(Math.random()*num2);
        if(ent1==ent2){	ent2=ent1; }
        else{ hole+=pasw.charAt(ent1);}
    }*/
    //hole+=i;
    document.getElementById("pass").innerHTML = hole;
}