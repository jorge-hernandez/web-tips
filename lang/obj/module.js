class Obj{
    constructor(){
        this.i = 0;
        return this;   
    }
    increment(){
        return this.i++;
    }
}

module.exports = Obj;