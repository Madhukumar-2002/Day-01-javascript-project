document.getElementById('btn')
    btn.addEventListener('click',function(){
       btn=document.getElementById('names').value;
       mobile=document.getElementById('names2').value;
       password=document.getElementById('message').value;


        if(btn==""){
         names.style.border = "2px solid red";
         isValid = false;
        }else{
         names.style.border = "1px solid #ccc";
        }
        if(mobile==""){
         names2.style.border = "2px solid red";
         isValid = false;
        }else{
         names2.style.border = "1px solid #ccc";
        }
        if(password==""){
         message.style.border = "2px solid red";
         isValid = false;
        }else{
         message.style.border = "1px solid #ccc";
        }
      })        