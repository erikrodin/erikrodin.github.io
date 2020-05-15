function mobil() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
var m=mobil();
if (m==true) {
  $(".tillägg").hide();
  $(".tilläggcontainer").hide();
  $("#rubriker").hide();
  $("#rubriker2").hide();
  $("#rubriker3").show();
  $(".mobil").show();
  $(".mobilknapp").show();
}
else {
  $("#bestpizz").hide();
}

$("#rubriker3-2").hide();
$(".mobil-2").hide();
$(".mobilknapp-2").hide();
$(".bestpizz").hide();
$("#stjärna1").show();
$("#stjärna2").show();
$("#stjärna3").show();
$("#stjärna4").show();
$("#stjärna5").show();
$("#stjärna6").show();
$("#stjärna7").show();
$("#stjärna8").show();
$("#stjärna9").show();


$(".läggtill").show();
$(".store").show();

$("#extrabeställning").show();



document.getElementById("wrapper").style.gridTemplateRows = "20% 5% auto 10%";
$("#köpknapp").click(function(){
  alert("din beställning har skickats");
});

var pizzas = [];
$(".store").click(function(){

  if (!pizzas.includes(this.id)) {
    document.getElementById(this.id).style.backgroundColor = "yellow";
    pizzas.push(this.id);
    console.log(pizzas);
  }
  else  {
    document.getElementById(this.id).style.backgroundColor = "white";
  var index = pizzas.indexOf(this.id);
  if (index !== -1) pizzas.splice(index, 1);
  console.log(pizzas);

  }
  localStorage.setItem("p", JSON.stringify(pizzas));

  //...

});
var storedNames = JSON.parse(localStorage.getItem("p"));
console.log(storedNames);
for (var i = 0; i < storedNames.length; i++) {
  $("#"+storedNames[i]+"f").show();
}

var total = [];
$(".läggtill").click(function(){

  if (!total.includes(this.id)) {

    total.push(this.id);

  }
  else  {

  var index = total.indexOf(this.id);
  if (index !== -1) total.splice(index, 1);
  console.log(total);

  }
  localStorage.setItem("k", JSON.stringify(total));

});
var storedkostnad = JSON.parse(localStorage.getItem("k"));
//var pris= storedkostnad.lenght()*75;
//$("#kostnad").text("Total: "+pris+" kr");



function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


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
