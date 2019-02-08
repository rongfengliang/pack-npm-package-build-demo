
class PaltformLogin {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    printName(){
        return this.name;
    }
}
var user = {
    name: "dalongdemo",
    age:333
}
export {PaltformLogin,user}
export default user