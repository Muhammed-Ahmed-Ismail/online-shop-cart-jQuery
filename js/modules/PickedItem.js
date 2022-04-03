import Item from "./Item.js";

export default class PickedItem extends Item
{
    constructor(originItem) {
        super();
        this.name=originItem.name;
        this.price=originItem.price;
        this.itemimage=originItem.itemimage
        this.orderlist=originItem.orderlist;
        this.quantity=1;

    }
    createDomElement() {
        let addButton=$("<button> add </button>").on("click",()=>{
           this.orderlist.addItem(this);

            console.log(`${this.name} added from picked item`)});
        let deleButton=$("<button> dele </button>").on("click",()=>{
            this.orderlist.removeItem(this);
        });
        let name =$("<p></p>").text(this.name);
        let image=$("<img>").attr("src",this.itemimage);
        let price=$("<p></p>").text(this.price);
        let quantity=$("<p></p>").text(this.quantity)
        this.quantityDomObject=quantity
        let container=$("<div class='item'></div>").attr("id",this.name)
            .append(name,price,addButton,deleButton,quantity);
        let self=this;
        container.draggable({
            helper:"clone",
            drag: function (ev,ui){
                ui.helper.item=self
            },
            stop:function (){
                self.orderlist.removeItem(self)
            }
        })
        this.domObject=container;
        let parent=$("#orderList").append(container);

    }
    updateQuantity()
    {
        this.quantityDomObject.text(this.quantity)
    }
}