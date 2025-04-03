window.onload = async function(){
    console.log("task 7-8");
        try {
            console.log("in fetch");
            let response = await fetch('files/iris.json');
            let irises_original = await response.json();
            console.log(irises_original);
          //   document.querySelector("#resetButton").addEventListener("click", resetPoem);
          //   document.querySelector("#stepOneButton").style.display = "none";
          //   document.querySelector("#inputDiv").style.display = "block";
          //   document.getElementById("rainbow_text").textContent = raw_rainbow_text;
            
            // console.log(raw_rainbow_text);
      
} catch (e) { console.log(e); }
        
    }
    





  