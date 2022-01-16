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
    return 5 + (pizzaToppings+2)+(pizzaCrust+2);
  }else if(pizzaSize ==="mid-size"){
    return 8 + (pizzaToppings+2)+(pizzaCrust+2);
  }else if (pizzaSize ==="large"){
    return 10 + (pizzaToppings+2)+(pizzaCrust+2);
  }
  
}
  //user interface 

$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();

    var orderSize =$('#size').val();
    var orderToppings =$('#toppings').val();
    var orderCrust =$('#crust').val();

 var newOrder=new Pizza(orderSize,orderToppings,orderCrust );
 var orderPrice =newOrder.price().toFixed(2);

 $('.price').text(orderPrice);
 $('.size').text(newOrder.size);
 $('.toppings').text(newOrder.toppings);
 $('.crust').text(newOrder.crust);

 $('#result').hide();
  });
}); 
