class Apple{
    constructor(_model,_colour,_memory){
        this.phonename='iPhone'
        this.model=_model
        this.colour=_colour
        this.memory=_memory
    }
    getModel(){
        return this.model
    }
    getColour(){
        return this.colour
    }
    getMemory(){
        return this.memory
    }
    setModel(_model){
        this.model=_model
    }
    setColour(_colour){
        this.colour=_colour
    }
    setMemory(_memory){
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
    getModel(){
        return this.model
    }
    getColour(){
        return this.colour
    }
    getMemory(){
        return this.memory
    }
    setModel(_model){
        this.model=_model
    }
    setColour(_colour){
        this.colour=_colour
    }
    setMemory(_memory){
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
    getModel(){
        return this.model
    }
    getColour(){
        return this.colour
    }
    getMemory(){
        return this.memory
    }
    setModel(_model){
        this.model=_model
    }
    setColour(_colour){
        this.colour=_colour
    }
    setMemory(_memory){
        this.memory=_memory
    }
    }

    let phone1=new Apple('X','Black',128)
    phone1.setModel('Xs'), phone1.setColour("Black Jet"), phone1.setMemory(256)
    console.log(phone1)
    