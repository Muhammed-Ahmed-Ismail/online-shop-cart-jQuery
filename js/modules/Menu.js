
//import {$,jQuery} from "./jquery-3.6.0.slim.js"
export default  class Menu
{

    constructor(title) {
        this.title=title;
    }
    createDomElement()
    {

        let parent=$("#menu-container");
        let menu=$('<div id="menu"></div>');
        this.domObject=$("#menu")
        parent.append(menu);
    }
}

