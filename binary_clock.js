function startClock(){
    //canvas scaled to match with dimensions of monitor
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var cvs = document.getElementById("clock");
    var ctx = cvs.getContext("2d");
    var w = window.innerWidth*0.75;
    var h = window.innerHeight*0.7;
    ctx.canvas.width  = w;
    ctx.canvas.height = h;

    //displaying time on the right
    var fontSize =w*0.14;
    ctx.font = "bolder "+fontSize+"px Titillium Web";
    if(hours<10)
        ctx.fillText('0'+hours,w*0.04,h*0.62);
    else
        ctx.fillText(hours,w*0.04,h*0.62);
    if(minutes<10)
        ctx.fillText('0'+minutes,w*0.04,h*0.76);
    else
        ctx.fillText(minutes,w*0.04,h*0.76);

    if(seconds<10)
        ctx.fillText('0'+seconds,w*0.04,h*0.90);
    else
        ctx.fillText(seconds,w*0.04,h*0.90);
    
    //seconds 1's digit
    for(var i=0;i<4;i++){

        if(((seconds%10)& (1<<i))==0){
            ctx.beginPath();
            ctx.arc(w*0.9,h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.stroke();   
        }else{
            ctx.beginPath();
            ctx.arc(w*0.9,h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.fill();              
        }
     
    }
    //seconds 10's digit
    for(var i=0;i<3;i++){

        if(((seconds/10)& (1<<i))==0){
            ctx.beginPath();
            ctx.arc(w*0.9-(w*0.1),h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.stroke();   
        }else{
            ctx.beginPath();
            ctx.arc(w*0.9-(w*0.1),h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.fill();              
        }
     
    }

    //minutes 1's digit
    for(var i=0;i<4;i++){

        if(((minutes%10)& (1<<i))==0){
            ctx.beginPath();
            ctx.arc(w*0.65,h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.stroke();   
        }else{
            ctx.beginPath();
            ctx.arc(w*0.65,h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.fill();              
        }
     
    }
    //minutes 10's digit
    for(var i=0;i<3;i++){

        if(((minutes/10)& (1<<i))==0){
            ctx.beginPath();
            ctx.arc(w*0.65-(w*0.1),h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.stroke();   
        }else{
            ctx.beginPath();
            ctx.arc(w*0.65-(w*0.1),h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.fill();              
        }
     
    }

    //hours 1's digit
    for(var i=0;i<4;i++){

        if(((hours%10)& (1<<i))==0){
            ctx.beginPath();
            ctx.arc(w*0.4,h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.stroke();   
        }else{
            ctx.beginPath();
            ctx.arc(w*0.4,h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.fill();              
        }
     
    }
    //hours 10's digit
    for(var i=0;i<2;i++){

        if(((hours/10)& (1<<i))==0){
            ctx.beginPath();
            ctx.arc(w*0.4-(w*0.1),h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.stroke();   
        }else{
            ctx.beginPath();
            ctx.arc(w*0.4-(w*0.1),h*0.9-(w*0.1)*i,w*0.04,0,2*Math.PI);
            ctx.fill();              
        }
     
    }
    var t = setTimeout(startClock, 500)
}
