
import Menu from "./modules/Menu.js";
import Item from "./modules/Item.js";
import OrderList from "./modules/OrderList.js";
//import $ from "./jquery-3.6.0.slim.js"

const menu=new Menu().createDomElement();;
const orderList = new OrderList();
console.log(orderList)
orderList.createDomElement();
let item1=new Item("pizza","40","img.png",orderList)
item1.createDomElement()
let item2=new Item("water","40","img.png",orderList)
item2.createDomElement()
let item3=new Item("juice","40","img.png",orderList)
item3.createDomElement()
