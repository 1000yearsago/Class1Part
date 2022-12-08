class Apple{
    constructor(_model,_colour,_memory){
        this.phonename='iPhone'
        this.model=_model
        this.colour=_colour
        this.memory=_memory
    }
    }
    
class Samsung{
    constructor(_model,_colour,_memory){
        this.phonename='Samsung'
        this.model=_model
        this.colour=_colour
        this.memory=_memory
    }
    }
     
class Nokia{
    constructor(_model,_colour,_memory){
        this.phonename='Nokia'
        this.model=_model
        this.colour=_colour
        this.memory=_memory
    }
    }

let phone1=new Apple('X','Black',128)
let phone2=new Samsung('Galaxy A53','Blue',128)
let phone3=new Nokia('G11','Charcoal',32)

console.log(phone1,'\n',phone2,'\n',phone3)