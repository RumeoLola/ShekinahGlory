document.addEventListener("DOMContentLoaded",
  function (event) {
    function openNav()  {
      document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    
    function addToCart()  {
      var orderfood = document.querySelector("#foodname").textContent;
      
      var message = "The following food items have been added to your cart " + orderfood ;
      
      console.log("The food item " + orderfood + " has been added to your cart")
      
      document.getElementById("cartitems").textContent = message
    
    }

    document.querySelector("button")
      .addEventListener("click", addToCart);

  }
);