
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
export {PaltformLogin,user,run}
export default user

function cliapp(path,args){
   
     this.exefilepath= path
     this.appname =args[0]
}

cliapp.prototype.catch=function(err) {
    console.log(`some wrong hapends ${err}`)
}
function run(args) {
     console.log(`this is a demo application ${JSON.stringify(user)},${JSON.stringify(args)}`)
     return new cliapp(args[0],args[1],args[2])
}