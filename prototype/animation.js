function Animal(planet){
     this.planet = planet;
}
// constructor 函数是JS的一等对象
//原型对象  return {planet}
Animal.prototype.getPlanet =function(){
    return this.planet;
}
function Person(name){
     this.name = name;
}
//人属于动物
// 原型链  animal => Animal.prototype => object
Person.prototype = new Animal('earth');
Person.prototype.getName = function(){
     return this.name;
}
const person = new Person("sanshuiqing");
console.log(person.getPlanet());
console.log(person.getName());
console.log(Person.prototype._proto_ === Animal.prototype);
