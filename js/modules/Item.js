export default class Item {
    constructor(item, list) {
        this.name = item.name;
        this.price = item.price;
        this.image = item.image;
        this.orderlist = list;

    }

    createDomElement() {

        let name = $("<p class='product-name'></p>").text(this.name);
        let image = $("<img>").attr("src", this.image);
        let price = $("<p class='price'></p>").text(this.price);
        let addButton = $("<button> + </button>").on("click", () => {
            this.orderlist.addItem(this);
        });
        let deleButton = $("<button> - </button>").on("click", () => {
            this.orderlist.removeItem(this);
        });
        let buttonsContainer=$("<div class='button-container'></div>")
        buttonsContainer.append(deleButton,addButton)
        let container = $("<div class='item'></div>").attr("id", this.name)
            .append(name, price,image, buttonsContainer);
        let self = this;

        container.draggable({
            //appendTo:"#orderList",
            helper: "clone",
            drag: function (e, ui) {
                ui.helper.item = self
            }
        })
        this.domObject = container;
        container.item = this;
        let parent = $("#menu").append(container);
    }

    toString() {
        return this.name
    }
}