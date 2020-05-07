
$("#stjärna1").show();
$("#stjärna2").show();
$("#stjärna3").show();
$("#stjärna4").show();
$("#stjärna5").show();
$("#stjärna6").show();
$("#stjärna7").show();
$("#stjärna8").show();
$("#stjärna9").show();
var färg1 = 1;
$("#stjärna1").click(function(){

  if (färg1==1) {
    document.getElementById("stjärna1").style.backgroundColor = "yellow";
    färg1=2;
  }
  else if (färg1==2) {
    document.getElementById("stjärna1").style.backgroundColor = "white";
    färg1=1;
  }

});
var färg2 = 1;
$("#stjärna2").click(function(){

  if (färg2==1) {
    document.getElementById("stjärna2").style.backgroundColor = "yellow";
    färg2=2;
  }
  else if (färg2==2) {
    document.getElementById("stjärna2").style.backgroundColor = "white";
    färg2=1;
  }

});
var färg3 = 1;
$("#stjärna3").click(function(){

  if (färg3==1) {
    document.getElementById("stjärna3").style.backgroundColor = "yellow";
    färg3=2;
  }
  else if (färg3==2) {
    document.getElementById("stjärna3").style.backgroundColor = "white";
    färg3=1;
  }

});
var färg4 = 1;
$("#stjärna4").click(function(){

  if (färg4==1) {
    document.getElementById("stjärna4").style.backgroundColor = "yellow";
    färg4=2;
  }
  else if (färg4==2) {
    document.getElementById("stjärna4").style.backgroundColor = "white";
    färg4=1;
  }

});
var färg5 = 1;
$("#stjärna5").click(function(){

  if (färg5==1) {
    document.getElementById("stjärna5").style.backgroundColor = "yellow";
    färg5=2;
  }
  else if (färg5==2) {
    document.getElementById("stjärna5").style.backgroundColor = "white";
    färg5=1;
  }

});
var färg6 = 1;
$("#stjärna6").click(function(){

  if (färg6==1) {
    document.getElementById("stjärna6").style.backgroundColor = "yellow";
    färg6=2;
  }
  else if (färg6==2) {
    document.getElementById("stjärna6").style.backgroundColor = "white";
    färg6=1;
  }

});
var färg7 = 1;
$("#stjärna7").click(function(){

  if (färg7==1) {
    document.getElementById("stjärna7").style.backgroundColor = "yellow";
    färg7=2;
  }
  else if (färg7==2) {
    document.getElementById("stjärna7").style.backgroundColor = "white";
    färg7=1;
  }

});
var färg8 = 1;
$("#stjärna8").click(function(){

  if (färg8==1) {
    document.getElementById("stjärna8").style.backgroundColor = "yellow";
    färg8=2;
  }
  else if (färg8==2) {
    document.getElementById("stjärna8").style.backgroundColor = "white";
    färg8=1;
  }

});
var färg9 = 1;
$("#stjärna9").click(function(){

  if (färg9==1) {
    document.getElementById("stjärna9").style.backgroundColor = "yellow";
    färg9=2;
  }
  else if (färg9==2) {
    document.getElementById("stjärna9").style.backgroundColor = "white";
    färg9=1;
  }

});
document.getElementById("window").style.display = "block";


$("#dot1").show();
$("#dot2").show();
$("#dot3").show();
$("#höger").show();
$("#vänster").show();
$("#bildspel").show();
$("#paus").show();



document.getElementById("window").style.overflow = "hidden";

$(document).ready(function (){


  document.getElementById("dot1").style.backgroundColor = "lightblue"; //använder javascript för att sätta ljusblå bakgrundsfärg på dot1 när slidern öppnas


});

var plats = 0; //intitierar variabeln "plats" med ett tilldelat värde: 0, för att hålla koll på vilken bild som visas
                //denna koden kunde jag själv sedan innan

$("#höger").click(function(){




    var slider = $("#imgs"); //gör en cachning av #imgs och lagrar det in en variabel "slider" så att det räcker att koppla sig mot "dom-trädet" en gång
                            //denna koden kunde jag själv efter att daniel gått igenom det på lektionen

    //nedan skapas if satser för att avgöra vilken bild som skall visas:
    if (plats==0) {
        slider.animate({right:"408"})  //om "plats" =0 så kommer scriptet att flytta på sig 408px från höger => bild 3 visas
        plats=2;     //samt att "plats kommer att tilldelas värdet 2"
        document.getElementById("dot3").style.backgroundColor = "lightblue"; //dot3 blir ljusblå när man befinner sig på sista bilden, vilket hjälper till att navigera vart man är i slidern
        document.getElementById("dot2").style.backgroundColor = "white"; //dot2 blir vit för att visa att man inte befinner sig på bild 2 i slidern
        document.getElementById("dot1").style.backgroundColor = "white"; //dot1 blir vit för att visa att man inte befinner sig på bild 2 1 slidern
    }else if (plats==1) {
        slider.animate({right:"0"})   //om plats =1 så återgår scriptet till position 0px => bild 1 visas
        plats=0;    //samt att "plats" kommer tilldelas värdet 0 efter att satsen exikverats
        // vilket leder till att slidern återgår till bild 1 efter exikveringen
        document.getElementById("dot1").style.backgroundColor = "lightblue"; //dot1 blir ljusblå när man befinner sig på första bilden, vilket hjälper till att navigera vart man är i slidern
        document.getElementById("dot2").style.backgroundColor = "white"; //dot2 blir vit för att visa att man inte befinner sig på bild 2 i slidern
        document.getElementById("dot3").style.backgroundColor = "white"; //dot3 blir vit för att visa att man inte befinner sig på bild 3 i slidern
    }else if (plats==2) {
        slider.animate({right:"204"})   //om "plats"=2 så visar scriptet från 204px och framåt => bild 2 visas
        plats=1; //efter exikveringen tilldelas "plats" värdet 1
        document.getElementById("dot2").style.backgroundColor = "lightblue"; //dot2 blir ljusblå när man befinner sig på andra bilden, vilket hjälper till att navigera vart man är i slidern
        document.getElementById("dot3").style.backgroundColor = "white"; //dot3 blir vit för att visa att man inte befinner sig på bild 3 i slidern
        document.getElementById("dot1").style.backgroundColor = "white"; //dot1 blir vit för att visa att man inte befinner sig på bild 1 i slidern
    }
    //koden gällande allt i if satserna kunde jag själv

});



$("#vänster").click(function(){




    var slider = $("#imgs");//gör en cachning av #imgs och lagrar det in en variabel "slider" så att det räcker att koppla sig mot "dom-trädet" en gång
                            //denna koden kunde jag själv efter att daniel gått igenom det på lektionen

    //nedan skapas if satser för att avgöra vilken bild som skall visas:
    if (plats==0) {
        slider.animate({right:"+=204"}) //om platsen är noll så kommer scriptet att visa de första 0 - 204 pixlarna => bild 1 visas
        plats++;                              // samt att variabeln "plats" kommer öka med +1 efter att satsen exikverats
        document.getElementById("dot2").style.backgroundColor = "lightblue"; //dot2 blir ljusblå när man befinner sig på andra bilden, vilket hjälper till att navigera vart man är i slidern
        document.getElementById("dot3").style.backgroundColor = "white"; //dot3 blir vit för att visa att man inte befinner sig på bild 3 i slidern
        document.getElementById("dot1").style.backgroundColor = "white"; //dot1 blir vit för att visa att man inte befinner sig på bild 1 i slidern

    }else if (plats==1) {
        slider.animate({right:"+=204"})  //om platsen är ett så kommer scriptet att visa pixlarna 204 - 608  => bild 2 visas
        plats++;    // samt att variabeln "plats" kommer öka med +1 efter att satsen exikverats
        document.getElementById("dot3").style.backgroundColor = "lightblue"; //dot3 blir ljusblå när man befinner sig på tredje bilden, vilket hjälper till att navigera vart man är i slidern
        document.getElementById("dot2").style.backgroundColor = "white"; //dot2 blir vit för att visa att man inte befinner sig på bild 2 i slidern
        document.getElementById("dot1").style.backgroundColor = "white"; //dot1 blir vit för att visa att man inte befinner sig på bild 1 i slidern

    }else if (plats==2) {
          slider.animate({right:"0"})   //om platsen är noll så kommer scriptet att visa pixlarna 608 - 812 => bild 3 visas
          plats=0;  // samt att variabeln "plats" kommer tilldelas värdet 0 efter att satsen exikverats
                    // vilket leder till att slidern återgår till bild 1 efter exikveringen
          document.getElementById("dot1").style.backgroundColor = "lightblue"; //dot1 blir ljusblå när man befinner sig på första bilden, vilket hjälper till att navigera vart man är i slidern
          document.getElementById("dot2").style.backgroundColor = "white"; //dot2 blir vit för att visa att man inte befinner sig på bild 2 i slidern
          document.getElementById("dot3").style.backgroundColor = "white"; //dot3 blir vit för att visa att man inte befinner sig på bild 3 i slidern
    }
    //koden gällande allt i if satserna listade jag ut själv


});

var kör;  //deklarerar en variabel kör
$(document).ready(function(){ //gör så att koden kommer exikveras när hela dokumentet är genomläst
  $("#bildspel").click(function(){
     kör=setInterval(auto, 1500); //tilldelar "kör" ett intervall som gör att funktionen "auto" kommer startas om igen, vilket gör att bilderna skiftar exter att koden på nytt exikverats och säger att det ska ta 2sek innan funktionen exikveras på nytt
                                  //koden för setInterval hittade jag på w3school
      function auto(){ //skapar funktionen auto som skall byta bild automtiskt

          var slider = $("#imgs");//gör en cachning av #imgs och lagrar det in en variabel "slider" så att det räcker att koppla sig mot "dom-trädet" en gång
                                  //denna koden kunde jag själv efter att daniel gått igenom det på lektionen

          //nedan skapas if satser för att avgöra vilken bild som skall visas:
          if (plats==0) {
            slider.animate({right:"+=204"}) //om platsen är noll så kommer scriptet att visa de första 0 - 204 pixlarna => bild 1 visas
            plats++;                              // samt att variabeln "plats" kommer öka med +1 efter att satsen exikverats
          document.getElementById("dot2").style.backgroundColor = "lightblue"; //dot2 blir ljusblå när man befinner sig på andra bilden, vilket hjälper till att navigera vart man är i slidern
          document.getElementById("dot3").style.backgroundColor = "white"; //dot3 blir vit för att visa att man inte befinner sig på bild 3 i slidern
          document.getElementById("dot1").style.backgroundColor = "white"; //dot1 blir vit för att visa att man inte befinner sig på bild 1 i slidern

          }else if (plats==1) {
            slider.animate({right:"+=204"})  //om platsen är ett så kommer scriptet att visa pixlarna 204 - 608  => bild 2 visas
            plats++;    // samt att variabeln "plats" kommer öka med +1 efter att satsen exikverats
          document.getElementById("dot3").style.backgroundColor = "lightblue"; //dot3 blir ljusblå när man befinner sig på tredje bilden, vilket hjälper till att navigera vart man är i slidern
          document.getElementById("dot2").style.backgroundColor = "white"; //dot2 blir vit för att visa att man inte befinner sig på bild 2 i slidern
          document.getElementById("dot1").style.backgroundColor = "white"; //dot1 blir vit för att visa att man inte befinner sig på bild 1 i slidern

          }else if (plats==2) {
            slider.animate({right:"0"})   //om platsen är noll så kommer scriptet att visa pixlarna 608 - 812 => bild 3 visas
              plats=0;  // samt att variabeln "plats" kommer tilldelas värdet 0 efter att satsen exikverats
              // vilket leder till att slidern återgår till bild 1 efter exikveringen
          document.getElementById("dot1").style.backgroundColor = "lightblue"; //dot1 blir ljusblå när man befinner sig på första bilden, vilket hjälper till att navigera vart man är i slidern
          document.getElementById("dot2").style.backgroundColor = "white"; //dot2 blir vit för att visa att man inte befinner sig på bild 2 i slidern
          document.getElementById("dot3").style.backgroundColor = "white"; //dot3 blir vit för att visa att man inte befinner sig på bild 3 i slidern
          }//koden gällande allt i if satserna listade jag ut själv

          }

      });

});

$(document).ready(function(){ //gör så att koden kommer exikveras när hela dokumentet är genomläst
    $("#paus").click(function(){

        clearInterval(kör); //skapar metoden clearInterval för att stoppa intervalet som ligger lagrat i kör
                        //koden för ClearInterval hittade jag på w3school
        });

});
