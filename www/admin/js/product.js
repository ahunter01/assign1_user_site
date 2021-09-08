var Product = (function () {
    "use strict" ;

    var pub = {};

    var product;

    function addProd() {
        var category = $(addCat).val();
        var name = $(addName).val();
        var description = $(addDesc).val();
        var price = $(addPrice).val();
        var quantity = $(addQuantity).val();
        var image = "images/" + $(imagePath).val();
        $.ajax({
            type: "POST",
            url: 'addProduct.php',
            data: {'category' : category, 'name' : name, 'description': description, 'price': price, 'quantity': quantity, 'image' : image},
            success: function (response) {
                setTimeout(location.reload.bind(location), 5000);
            }
        });
        window.location.reload();
    }

    function deleteProd(name) {
        $.ajax({
            url: './deleteProduct.php',
            type: 'POST',
            data: {'name' : name},
            success: function(response) {
                setTimeout(location.reload.bind(location), 5000);
            }
        });
        window.location.reload();
    }

    pub.setup = function() {

        $(addFinal).click(addProd);

        $(deleteItem).click(function() {
            product = $(this).parent().parent().attr('id');
        });

        $(finalDelete).click(function() {
            deleteProd(product);
        });

        $(pname).hide();
        $(price).hide();
        $(pdesc).hide();

        $(addItem).click(function() {
            /*
            Display the add product popup
            */
            var modal = document.getElementById("addProduct");
            var span = document.getElementsByClassName("close")[2];

            modal.style.display = "block";

            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });

        $(editItem).click(function() {
            /*
            Display the edit product popup
            */
            var modal = document.getElementById("editProduct");
            var span = document.getElementsByClassName("close")[0];

            modal.style.display = "block";
            
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });

        $(deleteItem).click(function() {
            /*
            Display the delete product popup
            */
            var modal = document.getElementById("deleteProduct");
            var span = document.getElementsByClassName("close")[1];

            modal.style.display = "block";
            
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });
        
    };

    return pub;

}());

if (window.addEventListener) {
window.addEventListener('load', Product.setup);
} else if (window.attachEvent) {
window.attachEvent('onload', Product.setup);
} else {
alert("Could not attach 'Product.setup' to the 'window.onload' event");
}