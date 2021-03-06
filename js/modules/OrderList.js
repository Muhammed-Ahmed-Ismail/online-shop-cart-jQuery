import PickedItem from "./PickedItem.js";
export  default class OrderList
{
    constructor() {
        this.itemsList=[];
        this.createDomElement()
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
        this.calculateTotal();
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
        this.calculateTotal()
    }
    findItem(item)
    {

        let retItem=null;
        for(let i=0;i<this.itemsList.length;i++)
        {
            if(this.itemsList[i].name===item.name) {

               retItem=this.itemsList[i];
            }
        }
        return retItem;
    }
    calculateTotal()
    {
        let total=0;
        let delivery=15;
        this.itemsList.forEach((item)=>total+=item.quantity*parseFloat(item.price))
        let vat=total*.14.toFixed(2)
        let sum=total+vat+delivery
        $("#total-value").text(total+" L E")
        $("#delevery-value").text(delivery +" L E")
        $("#vat-value").text(vat + "L E")
        $("#total-bill-value").text(sum+" L E")
        if(total>300)
        {
            let discount=total*0.85.toFixed(2)
            $("#discount-value").text(discount)

        }
        else {
            $("#discount-value").text("No discount applied yet push uo !!")
        }
    }

}