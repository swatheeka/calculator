let answer=document.getElementById("answer");
inputs = document.querySelectorAll(".buttons input");
inputs.forEach(inp =>{
    inp.addEventListener("click", (e) => {
     text=e.target.value;
     console.log(text);
     if(text == "AC"){
         
         answer.value= null;

     }
     else if(text=="="){
         answer.value=eval(answer.value);
         
     }
     else if(text=="DEL"){
         answer.value=answer.value.substr(0,answer.value.length - 1);
     }
     else{
         
         answer.value+=text;
     }

    });
});