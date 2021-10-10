var Popup = (function () {
    "use strict" ;

    var pub = {};

    function total() {
        var total = 0;
        $('#cartTable tbody tr td:nth-child(4)').each(function(){
            total += parseInt($(this).text(), 10);
        });
        return "<p>total: $" + total + "</p>";
    }

    function generateCart(cart) {
        var cartTable = "";
        for (var i = 0; i < cart.length; i++) {
            var total = cart[i].price * cart[i].quantity;
            cartTable += "<tr id='" + i + "'><td>" + cart[i].name + "</td><td>" + cart[i].price + "</td><td>" + cart[i].quantity + "</td><td id='totalValue'>" + total + "</td></tr>";
        }
        return cartTable;
    }

    pub.setup = function() {

        /*
        proceeds to checkout
        checkout not handled yet
        sends alert
        does nothing
        */
       $(checkout).click(function() {
           alert("Checkout functionality has not yet been implemented\n\nHave a great day!")
       });
        
        /*
        clears the cart when button pressed
        */
        $(clearCart).click(function() {
            sessionStorage.clear();
            window.location.reload();
        });

        /*
        If there are any items in cart
        display items as a table
        with total price at bottom
        */
        var cart = sessionStorage.getItem("cart");
        if (cart) {
            cart = JSON.parse(cart);
            $(tableContent).append(generateCart(cart));
            $(totalCart).append(total);
        } else {
            $(cartTable).replaceWith("<p>your cart is empty</p>");
        }

        /*
        Display the cart popup
        */
        var modal = document.getElementById("cartModal");
        var btn = document.getElementById("cartButton");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    };

    return pub;

}());

if (window.addEventListener) {
window.addEventListener('load', Popup.setup);
} else if (window.attachEvent) {
window.attachEvent('onload', Popup.setup);
} else {
alert("Could not attach 'Popup.setup' to the 'window.onload' event");
}