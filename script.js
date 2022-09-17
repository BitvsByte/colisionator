 //Definimos las variables:
 var y=0;          
 var x=0;
 var controlY=1; 
 var controlX=1; 
 var velocidad=1;

 // Cada 6 mili-segundos se va a ejecutar la función mover que comprueba
         // las colisiones de la pelota
 var intervalo=setInterval("mover()",6);

 function mover(){
     //Eje Y
     if(controlY==1){
         y+=velocidad;
     }else{        
         y-=velocidad;
     }
     if(y<=0){
         controlY=1;
         y=0;
     }else if(y>=document.getElementById("lienzo").offsetHeight-200){
// Esto significa si y es mayor o igual a la altura que tiene el lienzo menos el tamaño de la imagen

                         controlY=0;
         y=document.getElementById("lienzo").offsetHeight-200;
     }

     //Eje X
     if(controlX==1){
         x+=velocidad;
     }else{        
         x-=velocidad;
     }
     if(x<=0){
         controlX=1;
         x=0;
     }else if(x>=document.getElementById("lienzo").offsetWidth-200){
         controlX=0;
         x=document.getElementById("lienzo").offsetWidth-200;
     }
     document.getElementById("imagen").style.left=String(x)+"px";
     document.getElementById("imagen").style.top=String(y)+"px";
 }

 function girar(){
     document.getElementById("imagen").className="gira";
     console.log(girar);
 }
 function stop(){
     document.getElementById("imagen").className="para";

     console.log(stop);
 }