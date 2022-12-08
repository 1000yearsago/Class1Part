class Apple{
    constructor(_model,_colour,_memory,_date,_price){
        this.phonename='iPhone'
        this.model=_model
        this.colour=_colour
        this.memory=_memory
        this.date=_date
        this.price=_price
    }

    getAge(){
        return 2022-this.date
    }

    getPrice(){
        return this.price
    }
    }
    
    let phone1=new Apple('X','Black',128,2020,300)
    console.log('This phone is',phone1.getAge(),'years old','\n',"This phone's price is",phone1.getPrice(),'$ worth')