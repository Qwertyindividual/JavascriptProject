let products;
if (localStorage.getItem("products")) {
    products = localStorage.getItem("products")
} else {
    products = [
        {
           id: 1,
           product: "Necklace",
           price: 1500.00,
           image: "https://i.postimg.cc/hvR3fhz6/necklace-1.jpg"
       },
       {
           id: 2,
           product: "Necklace",
           price: 1250.00,
           image: "https://i.postimg.cc/vHQ3jJWr/necklace-2.jpg"
       },
       {
           id: 3,
           product: "Necklace",
           price: 1200.00,
           image: "https://i.postimg.cc/tT3NvkJv/necklace-3.jpg"
       },
       {
           id: 4,
           product: "Necklace",
           price: 1325.00,
           image: "https://i.postimg.cc/05Zp6bwS/klace-4.jpg"
       },
       {
           id: 5,
           product: "Bracelet",
           price: 750.00,
           image: "https://i.postimg.cc/DwhJBhLh/bracklet1.jpg"
       },
       {
           id: 6,
           product: "Bracelet",
           price: 620.00,
           image: "https://i.postimg.cc/Ls6qFVx0/bracelet2.jpg"
       },
       {
           id: 7,
           product: "Bracelet",
           price: 250.00,
           image: "https://i.postimg.cc/3Rkddx5X/bracelet3.jpg"
       },
       {
           id: 8,
           product: "Bracelet",
           price: 300.00,
           image: "https://i.postimg.cc/65JypKHZ/bracelet4.jpg"
       },
       {
           id: 9,
           product: "Clips",
           price: 200.00,
           image: "https://i.postimg.cc/MT9vGfFK/clips1.jpg"
       },
       {
           id: 10,
           product: "Clips",
           price: 135.00,
           image: "https://i.postimg.cc/rsvyd1Cc/clips2.jpg"
       },
       {
           id: 11,
           product: "Clip",
           price: 75.00,
           image: "https://i.postimg.cc/rwGymtdX/clips3.jpg"
       },
       {
           id: 12,
           product: "Clips",
           price: 350.00,
           image: "https://i.postimg.cc/rwGymtdX/clips3.jpg"
       },
       {
           id: 13,
           product: "Resin Rings",
           price: 75.00,
           image: "https://i.postimg.cc/fRSXgCg7/ring1.jpg"
       },
       {
           id: 14,
           product: "Resin Rings",
           price: 150.00,
           image: "https://i.postimg.cc/Fsdg2hYJ/ring2.jpg"
       },
       {
           id: 15,
           product: "Resin Earings",
           price: 175.00,
           image: "https://i.postimg.cc/6pBqC0x5/earings-1.jpg"
       },
       {
           id: 16,
           product: "Resin Earings",
           price: 280.00,
           image: "https://i.postimg.cc/N05gxCJY/earngs-3.jpg"
       },
       {
           id: 17,
           product: "Resin Earings",
           price: 370.00,
           image: "https://i.postimg.cc/xdCd41dw/earings2.jpg"
       },
   ]
   
   localStorage.setItem('products', JSON.stringify(products))
   }
   
function displayProducts(){
    products = JSON.parse(localStorage.getItem('products'))

    let body = document.querySelector('#HorizontalCard');
    products.forEach( item =>{
        if(products.length){
            console.log(`${item}: ${item}`);
            body.innerHTML +=
            `
       <div class="col">
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${item.image}" class="img-fluid rounded-start h-100" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body border border-4 border border-danger border-opacity-50">
                  <h5 class="card-title">${item.product}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button class="checkout rounded-pill p-2" onclick='addToCheckout(${JSON.stringify(item)})'>Add to checkout</button>
                  <p class="card-text">Price: R${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>  
        `       
          
        } 
    })
}

displayProducts()

localStorage.setItem('products', JSON.stringify(products));
