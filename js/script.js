function Pizza(size,toppings,crust){
  this.size=size;
  this.toppings=toppings;
  this.crust=crust;
}
Pizza.prototype.price=function(){
  var pizzaSize =this.size;
  var pizzaToppings =this.toppings;
  var pizzaCrust =this.crust;
  debugger;
  if(pizzaSize ==="small"){
    return 5 + (pizzaToppings*2)+(pizzaCrust*2);
  }else if(pizzaSize ==="mid-size"){
    return 8 + (pizzaToppings*2)+(pizzaCrust*2);
  }else if (pizzaSize ==="large"){
    return 10 + (pizzaToppings*2)+(pizzaCrust*2);
  }
  
}
