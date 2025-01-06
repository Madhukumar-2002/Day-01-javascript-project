// fetch("0.api.json")

// .then((data)=>{         
//  return data.json(); 
// })

// .then((complteddata)=>{
// let data1="";
// complteddata.map((value)=>{
// data1+=`<div class="cardsData" >
//      <img id="img" src="${value.image}" alt ="img">
//       <h1 id="title"> ${value.title}</h1>
//       <p id="description">${value.description}</p>
//      <hr>
//      <p id="price">$ ${value.price} </p>
//      <hr>
//      <button id="two-btn">Detalis</button>
//      <button id="two-btn">Add to Cart</button>
//     </div>`    
// });
// document.getElementById("cards").innerHTML=data1;
// })
// .catch((err)=>{
// alert(err);
// })









let allData = []; // To store the fetched data

// Fetch data from the JSON file
fetch("0.api.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        allData = data; // Store the data globally
        displayData(allData); // Display all data initially
    })
    .catch((error) => {
        alert("Error fetching data: " + error.message);
    });

// Function to display data dynamically
function displayData(data) {
    let data1 = "";
    data.forEach((value) => {
        data1 += `<div class="cardsData">
                    <img id="img" src="${value.image}" alt="img">
                    <h1 id="title">${value.title}</h1>
                    <p id="description">${value.description}</p>
                    <hr>
                    <p id="price">$${value.price}</p>
                    <hr>
                    <button id="two-btn">Details</button>
                    <button id="two-btn">Add to Cart</button>
                </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
}

// Function to filter data based on category
function filterData(category, button) {
        if (category === 'all') {
            displayData(allData); // Display all items
        } else {
            const filteredData = allData.filter((item) => item.category.toLowerCase() === category.toLowerCase());
            displayData(filteredData);
        }

        // Update button styles
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((btn) => {
            btn.classList.remove("active");
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
        });
        button.classList.add("active");
        button.style.backgroundColor = "orange";
        button.style.color = "white";
  
    }