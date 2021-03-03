$( document).ready(function(){
    let clickMe = function(){
        let entryString = prompt("Hello or Goodbye");
        // document.getElementById("thebutton").innerHTML = entryString;

         switch(entryString.toUpperCase()){
         case "HELLO":
             document.querySelectorAll(".hello").forEach((hello)=>{
                 hello.innerHTML = `Hello Number ${hello.innerHTML.split(" ")[2] * 2}`
                 var hellos = document.getElementsByClassName("hello");
                 Array.prototype.forEach.call(goodbyes, function(goodbye) {
                   hellos.classList.add('hightlight');
            });  
                var goodbyes = document.getElementsByClassName("goodbye");
                Array.prototype.forEach.call(goodbyes, function(goodbye) {
                    goodbyes.classList.add('hightlight');
             });  
                })
            break;
         case "GOODBYE":
            document.querySelectorAll(".goodbye").forEach((hello)=>{
                hello.innerHTML = `Goodbye Number ${hello.innerHTML.split(" ")[2] * 2}`
                var goodbyes = document.getElementsByClassName("goodbye");

                Array.prototype.forEach.call(goodbyes, function(goodbye) {
                    goodbye.ClassName = hightlight;
            });  
            var hellos = document.getElementsByClassName("hello");

                Array.prototype.forEach.call(hellos, function(hello) {
                    hello.style.color = "black";
                });
            })
            break;
         
     }
    }
    let choice = document.getElementById("thebutton").addEventListener("click", clickMe);
    console.log("The javascript is loaded!")
})
