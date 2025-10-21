 function calc(){

          let b = document.getElementById("ref").value
          let  charges;
          let a = Number(b);
          
          if (a<=500) {

    if (a<=100){

            document.getElementById("sef").innerText = "No Charges";
    }

    else if (a>=101 && a<=200) {
        
        charges = (2.35 * (a-100) );
        document.getElementById("sef").innerText = "The charges are : " + charges;

     }

    else if (a>=201 && a<=400) {
        
        charges = (232.65 + (4.7 * (a-200)) );
        document.getElementById("sef").innerText = "The charges are : " + charges;
     }


    else if (a>=401 && a<=500) {
        
        charges = (1167.95 + (6.3 * (a-400)) );
        document.getElementById("sef").innerText = "The charges are : " + charges
     }


}


else {

if (a<=100){

            document.getElementById("sef").innerText = "No Charges";
    }

    else if (a>=101 && a<=400) {
        
        charges = (4.7 * (a-100) );
         document.getElementById("sef").innerText = "The charges are : " + charges

     }

    else if (a>=401 && a<=500) {
        
        charges = (1405.3 + ( 6.3 * (a-400)) );
        document.getElementById("sef").innerText = "The charges are : " + charges
     }


    else if (a>=501 && a<=600) {
        
        charges = (2029 + (8.4 * (a-500)) );
        document.getElementById("sef").innerText = "The charges are : " + charges
     }

  else if (a>=601 && a<=800) {
        
        charges = (2860.6 + (9.45 * (a-600)) );
        document.getElementById("sef").innerText = "The charges are : " + charges
     }
  else if (a>=801 && a<=1000) {
        
        charges = (4741.15 + (10.5 * (a-800)) );
        document.getElementById("sef").innerText = "The charges are : " + charges
     }
  else if (a>1000) {
        
        charges = (6830.65 + (11.55 * (a-1000)) );
       document.getElementById("sef").innerText = "The charges are : " + charges
     }

}

    }