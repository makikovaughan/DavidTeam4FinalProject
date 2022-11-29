import {storeSampleData,displayItemCards} from './items.js';

class ItemsController {
    constructor(currentId = 0) {
        this._items = [];
        this._currentId = currentId;


    }
    addItem(name, description, img, createdAt, price, quantity) {

        let id = this._currentId;
        this._currentId++;
        //push 
        this._items.push({ id, name, description, img, createdAt, price, quantity });
        //console.log("print");
    }


    loadItemsFromLocalStorage() { //inputs data from local storage into the item controller array of objects
        const storageItems = localStorage.getItem("items")//storageItems is a string
        if (storageItems) { //if items is truthy-something is there
            const items = JSON.parse(storageItems)//items is an array of objects-stores the items from LS 
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                myItem.addItem(item.name,item.description,item.img, item.createdAt, item.price,item.quantity);
            }
        }
    }



};

let myItem = new ItemsController();
//console.log(myItem);

 myItem.addItem("ChristmasCandle", "For Christmas", "https://images.unsplash.com/photo-1607838656871-42eaf27177b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hyaXN0bWFzJTIwY2FuZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60", "By candleShop",'13','9');
 myItem.addItem("Pumpkin spice", "For thanskgiving", "https://images.unsplash.com/photo-1508093989287-061d64de7324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNocmlzdG1hcyUyMGNhbmRsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60", "By candleShop",'14','8');
 myItem.addItem("Apple Candle", "For Christmas", "https://images.unsplash.com/photo-1617041261380-15cf80c39f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80", "By candleShop",'15','7');
console.log(myItem);

storeSampleData(); //stores data to local storage 
myItem.loadItemsFromLocalStorage(); //grabs data from local storage to myItem object array 
console.log(myItem._items); //prints objects' array
displayItemCards(); //displays items as cards to user


export {myItem};


//console.log(myItem._currentId);

//let myItem1 = new ItemsController();

//console.log(myItme._currentId);
//console.log(myItem);
//console.log(myItem._currentId);


