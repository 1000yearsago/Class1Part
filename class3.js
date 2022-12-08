class Phone{
    constructor(_name,_model,_colour,_memory){
        this.name=_name
        this.model=_model
        this.colour=_colour
        this.memory=_memory
    }
}

class Apple extends Phone{
    constructor(_model,_colour,_memory){
        super('iPhone',_model,_colour,_memory)
    }
}

class Samsung extends Phone{
    constructor(_model,_colour,_memory){
        super('Samsung',_model,_colour,_memory)
    }
}

class Nokia extends Phone{
    constructor(_model,_colour,_memory){
        super('Nokia',_model,_colour,_memory)
    }
}

let phone1=new Apple('X','Black',128)
let phone2=new Samsung('Galaxy A53','Blue',128)
let phone3=new Nokia('G11','Charcoal',32)

console.log(phone1,'\n',phone2,'\n',phone3)