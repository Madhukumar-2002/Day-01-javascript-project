fetch("api.json")

.then((data)=>{         
 return data.json(); 
})

.then((complteddata)=>{
let data1="";
complteddata.map((value)=>{
data1+=`<div class="cardsData" >
     <img id="img" src="${value.image}" alt ="img">
      <h1 id="title"> ${value.title}</h1>
      <p id="description">${value.description}</p>
     <hr>
     <p id="price">$ ${value.price} </p>
     <hr>
     <button id="two-btn">Detalis</button>
     <button id="two-btn">Add to Cart</button>
    </div>`    
});
document.getElementById("cards").innerHTML=data1;
})
.catch((err)=>{
alert(err);
})
