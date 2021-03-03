$( document).ready(function(){
    let clickMe = function(){
        let entryString = prompt("Hello or Goodbye");
        // document.getElementById("thebutton").innerHTML = entryString;

         switch(entryString.toUpperCase()){
         case "HELLO":
             document.querySelectorAll(".hello").forEach((hello)=>{
                 hello.innerHTML = `Hello Number ${hello.innerHTML.split(" ")[2] * 2}`
              })
              break;
         case "GOODBYE":
            document.querySelectorAll(".goodbye").forEach((hello)=>{
                hello.innerHTML = `Goodbye Number ${hello.innerHTML.split(" ")[2] * 2}`
             })  
             break;
     }
    }
    let choice = document.getElementById("thebutton").addEventListener("click", clickMe);
    console.log("The javascript is loaded!")
})
