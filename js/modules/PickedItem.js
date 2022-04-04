import Item from "./Item.js";

export default class PickedItem extends Item
{
    constructor(originItem) {
        super(originItem);
        this.orderlist=originItem.orderlist;
        this.quantity=1;
    }
    createDomElement() {

        let name =$("<p class='product-name'></p>").text(this.name);
        let image=$("<img>").attr("src",this.image);
        let price=$("<p class='price'></p>").text(this.price);
        let quantity=$("<p class='quantity'></p>").text(this.quantity)
        this.quantityDomObject=quantity
        let addButton=$("<button> + </button>").on("click",()=>{
            this.orderlist.addItem(this);

        });
        let deleButton=$("<button> - </button>").on("click",()=>{
            this.orderlist.removeItem(this);
        });
        let buttonsContainer = $("<div class='button-container'></div>")
        buttonsContainer.append(addButton, deleButton)
        let container=$("<div class='picked-item item'></div>").attr("id",this.name)
            .append(name,price,image,buttonsContainer,quantity);
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