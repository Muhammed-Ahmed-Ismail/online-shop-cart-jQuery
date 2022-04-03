import PickedItem from "./PickedItem.js";
export  default class OrderList
{
    constructor() {
        this.itemsList=[];
    }
    createDomElement()
    {
        let parent=$("#selction-container");
        let self=this;
        let list=$('<div id="orderList"></div>').droppable({
            accept: '.item',
            drop: function(event, ui) {
                self.addItem(ui.helper.item);
            }
        });
        this.domObject=$("#orderList")
        parent.append(list);
    }
    addItem(item)
    {
        console.log(item)
       let retItem=this.findItem(item)

        if(retItem===null) {
            let pickedItem = new PickedItem(item)
            this.itemsList.push(pickedItem);
            pickedItem.createDomElement();
        }else
        {
            retItem.quantity++
            retItem.updateQuantity();
        }
    }
    removeItem(item)
    {
        let retItem=this.findItem(item)
        if(retItem===null) return
        else{
            retItem.quantity--
            if(retItem.quantity>0)
            retItem.updateQuantity();
            else {
                for(let i=0;i<this.itemsList.length;i++)
                {
                    if(this.itemsList[i].quantity === 0)
                    {
                        this.itemsList[i].domObject.remove();
                        this.itemsList.splice(i,1);

                    }
                }
            }
        }
    }
    findItem(item)
    {

        let retItem=null;
   /*     let retIndex= this.itemsList.findIndex(extistItem=>{extistItem.name === item.name
        console.log(  item.name)
            console.log( extistItem.name)
        });
        console.log(retIndex)
        console.log(item)
        console.log(this.itemsList)*/
        for(let i=0;i<this.itemsList.length;i++)
        {
            if(this.itemsList[i].name===item.name) {

               retItem=this.itemsList[i];
            }
        }
        return retItem;
    }
}