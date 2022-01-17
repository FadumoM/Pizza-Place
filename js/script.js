$(document).ready(function() {
  $("#order-details").hide();
  $("#deliver").hide();


  var totalPriceArray = [];
  function Order(size,toppings,crust, amount) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.amount = amount;
    this.pizzaPrice = 0;
  }
  Order.prototype.pizzaCost = function() {
    if (this.size === "small") {
      this.pizzaPrice += 500;
    } else if (this.size === "mid-size") {
      this.pizzaPrice += 700;
    } else if (this.size === "large") {
      this.pizzaPrice += 1000;
    }
    if (this.toppings === "bacon") {
      this.pizzaPrice += 150;
    } else if (this.toppings === "mushrooms") {
      this.pizzaPrice += 150;
    } else if (this.toppings === "chicken") {
      this.pizzaPrice += 150;
    }
    if (this.crust === "thin") {
      this.pizzaPrice += 100;
    } else if (this.crust === "thick") {
      this.pizzaPrice += 100;
    } 
    
  };
  function Address(address) {
    this.address = address;
    this.deliveryAddress = (address);
  }
  
  Order.prototype.finalCost = function() {
    var cartTotalPrice = [];
    for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
      cartTotalPrice += totalPriceArray[arrayElement];
    }
    return cartTotalPrice;
  };
  $(".btn.check-out").click(function() {
  });
  $("form#custom-pizza").submit(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    var toppings = $("select#toppings").val();
    var crust = $("select#crust").val();
    var pizzaDetails = (size + " - " + toppings + " - " + crust);
    var newPizzaOrder = new Order(size,toppings,crust);
    newPizzaOrder.pizzaCost();
    totalPriceArray.push(newPizzaOrder.pizzaPrice);
    
    $("#final-cost").text(newPizzaOrder.finalCost());
    $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    
  });
  $("#submit-pizza").click(function() {
    $("#deliver").toggle();
  });

  $("#checkout-btn").click(function() {
    $("#order-details").toggle();
  });
  $("form#address-form").submit(function(event) {
    $(".address-form").toggle();
    event.preventDefault();
    var address = $("input#location").val();
    var newAddress = new Address(address);
    $("#delivery-option").text("Your pizza will be delivered to: " + newAddress.deliveryAddress);
  });
});
