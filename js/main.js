
import Menu from "./modules/Menu.js";
import Item from "./modules/Item.js";
import OrderList from "./modules/OrderList.js";
//import $ from "./jquery-3.6.0.slim.js"

const menu=new Menu().createDomElement();;
const orderList = new OrderList();

let menueItems=[
    {
        name:"Margritta",
        price:"60 LE",
        image: "../images/margrita.jpeg"
    },
    {
        name:"Mashroom",
        price:"65 LE",
        image: "../images/mashroom.jpeg"
    },
    {
        name:"Naboly",
        price:"60 LE",
        image: "../images/napoly.jpg"
    },
    {
        name:"Peprony",
        price:"60 LE",
        image: "../images/peprony.jpeg"
    },
]
let itemsInMenue=[];
menueItems.forEach((item)=> {
    let newItme=new Item(item,orderList)
    newItme.createDomElement();
    itemsInMenue.push(newItme);
})
console.log(itemsInMenue)