export default class Item {
    constructor(name, price, image, list) {
        this.name = name;
        this.price = price;
        this.itemimage = image;
        this.orderlist = list;
    }

    createDomElement() {
        let addButton = $("<button> add </button>").on("click", () => {
            this.orderlist.addItem(this);
        });
        let deleButton = $("<button> dele </button>").on("click", () => {
            this.orderlist.removeItem(this);
        });
        let name = $("<p></p>").text(this.name);
        let image = $("<img>").attr("src", this.itemimage);
        let price = $("<p></p>").text(this.price);
        let container = $("<div class='item'></div>").attr("id", this.name)
            .append(name, price, addButton, deleButton);
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