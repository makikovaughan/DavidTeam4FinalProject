 import {myItem} from './itemsController.js';

function addItemCard(item){
    let itemContainer=document.getElementById('list-items');
    
    

    let itemCard= `<div class="card m-5 center  " style="width: 20rem;">
    <img src="${item.img}" class="card-img-top " alt="product image">
    <div class="card-body mx-3 pt21">
      <h5 class="card-title font-weight-bold">${item.name}</h5>
      <p class="card-text">${item.description}</p>
      <p class="card-text d-inline"><p class="d-inline">$</p>${item.price}</p>
      <p class="card-text d-inline mt-5"><p class="d-inline">created at: </p>${item.createdAt}</p>
      <div class="card__btn">
      <select id='${item.id}' class="form-select border-dark" style="width:fit-content"aria-label="Default select example"><option selected>Quantity</option></select>
      <a href="#" class="btn btn-color border-dark btn--hover">Add to Cart</a>
      </div
            </div>
        </div>
    <br>`;
    
    let itemSelect=`<select id='${item.id}' class="form-select border-dark" style="width:fit-content"aria-label="Default select example"><option selected>Quantity</option></select>`;
    
    itemContainer.innerHTML+= itemCard;//display card with object info

let selectOption=document.getElementById(item.id); //grab select by its item id attribute
// console.log(selectOption);
for(let i=1;i<=item.quantity;i++){ //display options to selected select element
    let option= document.createElement('option');
         option.innerHTML=i;
         selectOption.appendChild(option); 
  }

}
       
    
const sampleItems = [{'name':'Vanilla Cream', 
'img':'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
'description':'Relaxing with rich vanilla.','createdAt':'2022-11-11','price':'10.00','quantity':'6'},
{'name':'Cinnamon',
'img':'./images/stories-mFTOFzUKdl0-unsplash.jpg',
'description':'Hot and Spicy','createdAt':'2022-11-11','price':'12.20','quantity':'7'},
{'name': 'Bergamot', 'img':'https://images.unsplash.com/photo-1596433809252-260c2745dfdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGNhbmRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60','description':'A bergamot scented candle','createdAt':'2022-11-11','price':'12.00','quantity':'10'}];


        
 function storeSampleData(){ //puts sample data 'sampleItems'- an orray of objects into the local storage
    if(!localStorage.getItem("items")){ //if there is no items, then 
localStorage.setItem("items", JSON.stringify(sampleItems));//call local storage and set the sample item under variable items-also turn object into a string 
    
    }
}


function displayItemCards(){
   
    for(let i = 0; i < myItem._items.length; i++){ // loops through objects array of items 
        const item = myItem._items[i]; 
        addItemCard(item); //adds each item into a card 
    }
}



export {storeSampleData,displayItemCards};