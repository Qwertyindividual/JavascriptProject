let products;
if (localStorage.getItem("products")) {
    products = localStorage.getItem("products")
} else {
    products = [
        {
           id: 1,
           make: "Necklace",
           price: 1500.00,
           image: "https://i.postimg.cc/hvR3fhz6/necklace-1.jpg"
       },
       {
           id: 2,
           make: "Necklace",
           price: 1250.00,
           image: "https://i.postimg.cc/vHQ3jJWr/necklace-2.jpg"
       },
       {
           id: 3,
           make: "Necklace",
           price: 1200.00,
           image: "https://i.postimg.cc/tT3NvkJv/necklace-3.jpg"
       },
       {
           id: 4,
           make: "Necklace",
           price: 1325.00,
           image: "https://i.postimg.cc/05Zp6bwS/klace-4.jpg"
       },
       {
           id: 5,
           make: "Bracelet",
           price: 750.00,
           image: "https://i.postimg.cc/DwhJBhLh/bracklet1.jpg"
       },
       {
           id: 6,
           make: "Bracelet",
           price: 620.00,
           image: "https://i.postimg.cc/Ls6qFVx0/bracelet2.jpg"
       },
       {
           id: 7,
           make: "Bracelet",
           price: 250.00,
           image: "https://i.postimg.cc/3Rkddx5X/bracelet3.jpg"
       },
       {
           id: 8,
           make: "Bracelet",
           price: 300.00,
           image: "https://i.postimg.cc/65JypKHZ/bracelet4.jpg"
       },
       {
           id: 9,
           make: "Clips",
           price: 200.00,
           image: "https://i.postimg.cc/MT9vGfFK/clips1.jpg"
       },
       {
           id: 10,
           make: "Clips",
           price: 135.00,
           image: "https://i.postimg.cc/rsvyd1Cc/clips2.jpg"
       },
       {
           id: 11,
           make: "Clip",
           price: 75.00,
           image: "https://i.postimg.cc/rwGymtdX/clips3.jpg"
       },
       {
           id: 12,
           make: "Clips",
           price: 350.00,
           image: "https://i.postimg.cc/rwGymtdX/clips3.jpg"
       },
       {
           id: 13,
           make: "Resin Rings",
           price: 75.00,
           image: "https://i.postimg.cc/fRSXgCg7/ring1.jpg"
       },
       {
           id: 14,
           make: "Resin Rings",
           price: 150.00,
           image: "https://i.postimg.cc/Fsdg2hYJ/ring2.jpg"
       },
       {
           id: 15,
           make: "Resin Earings",
           price: 175.00,
           image: "https://i.postimg.cc/6pBqC0x5/earings-1.jpg"
       },
       {
           id: 16,
           make: "Resin Earings",
           price: 280.00,
           image: "https://i.postimg.cc/N05gxCJY/earngs-3.jpg"
       },
       {
           id: 17,
           make: "Resin Earings",
           price: 370.00,
           image: "https://i.postimg.cc/xdCd41dw/earings2.jpg"
       },
   ]
   
   localStorage.setItem('products', JSON.stringify(products))
   }
   function displayProducts(){
    products = JSON.parse(localStorage.getItem('products'))

    let tableBody = document.querySelector('tableBody');
    products.forEach( (item)=>{
        if(products.length){
            console.log(`${item}: ${item}`);
            tableBody.innerHTML +=
            `
            <tr>
            <td>${item.id}</td>
            <td>${item.image}</td>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            `
        }
    })
}

displayProducts()

localStorage.setItem('products', JSON.stringify(products));