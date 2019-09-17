// es5 面向对象
function Person(name){
    //constructor
    // object
    this.name = name;
}
Person.prototype = {
    getName:function(){
        return this.name;
    },
    playHpjy:function(){
        console.log('大吉大利,今晚吃鸡');
        
    }
}
// new +fun() 新的对象
// 实例
let person = new Person('赵小萌');
console.log(person.name);
