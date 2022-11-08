class ItemsController {
    constructor(currentId = 0) {
        this._items = [];
        this._currentId = currentId;


    }
    addItem(Name, description, imag, createdAt) {

        let id = this._currentId;
        this._currentId++;
        //push 
        this._items.push({ id, Name, description, imag, createdAt });
        //console.log("print");
    }


};

let myItem = new ItemsController();
//console.log(myItem);

myItem.addItem("ChristmasCandle", "For Christmas", "images\martipaan - QagIzHwsy4A - unsplash.jpg", "By candleShop");
myItem.addItem("Pumpkin spice", "For thanskgiving", "images\martipaan - QagIzHwsy4A - unsplash.jpg", "By candleShop");
myItem.addItem("Apple Candle", "For Christmas", "images\martipaan - QagIzHwsy4A - unsplash.jpg", "By candleShop");
console.log(myItem);

//console.log(myItem._currentId);

//let myItem1 = new ItemsController();

//console.log(myItme._currentId);
//console.log(myItem);
//console.log(myItem._currentId);