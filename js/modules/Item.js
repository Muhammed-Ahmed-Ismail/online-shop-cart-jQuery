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
        let container = $("<div class='item'></div>").attr("id", this.name)
            .append(name, price,image, addButton, deleButton);
        let self = this;

        container.draggable({
            //appendTo:"#orderList",
            helper: "clone",
            drag: function (e, ui) {
                console.log(ui.helper.prevObject[0].id)
                ui.helper.item = self
            }
        })
        this.domObject = container;
        container.item = this;
        let parent = $("#menu").append(container);
    }

    addToList() {
        // let parent=$("#selction-container");
        console.log(`${this.name} added`);
        console.log(this)

    }

    deleteFromList() {
        console.log(`${this.name} eleted`);
    }

    toString() {
        return this.name
    }
}