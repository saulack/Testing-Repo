var obj;
function DYAPICall(event) {
    event.preventDefault();
    // // event.stopPropagation();
     obj = {
        name: "Add To Cart",
        properties: {
            dyType: "add-to-cart-v1",
            productId: "sku-4324-bg",
            value: 12.34,
            currency: "any supported currency code",
            quantity: 2,
            size: "M",
            cart: [
             {
               productId: "item-34454",
               quantity: 1, 
               itemPrice: 65.87, 
               size: "XL", 
             },
             {
               productId: "sku-4324-bg", 
               quantity: 2, 
               itemPrice: 12.34,
               size: "M", 
             }]
        }
    }
    console.log(event, obj)

DY.API(event, obj);


} 