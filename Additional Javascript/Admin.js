let products = JSON.parse(localStorage.getItem("products")) ?
    JSON.parse(localStorage.getItem("products")):
    [
        {
           id: 1,
           product: "Necklaceee",
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
   ]
   
   localStorage.setItem('products', JSON.stringify(products))

function displayProducts(){
    products = JSON.parse(localStorage.getItem('products'))


    let tableBody = document.querySelector('#table');
    products.forEach( (item)=>{
            console.log(`${item}: ${item}`);
            tableBody.innerHTML +=
            `
            <tr>
            <td class= "text-white fw-bold">${item.id}</td>
            <td><img id="admin_img" class="bg-body rounded" src="${item.image}"></td>
            <td class= "text-white fw-bold">${item.product}</td>
            <td class= "text-white fw-bold">${item.price}</td>
            <td><button>Edit</button><i class="fas fa-edit"></i>
            <button id="del" onclick="deleteProduct()">Delete</button>
            <i class="fa fa-trash" aria-hidden="true"></i>
            </td>
            </tr>
            `
    })
}
displayProducts();



// function filter(product){
//     let filtered = products.filter(item => {
//         return item.product === product
//     })
//     let tableBody = document.querySelector('#table');
//     filtered.forEach( (item)=>{
//             console.log(`${item}: ${item}`);
//             tableBody.innerHTML +=
//             `
//             <tr>
//             <td class= "text-white fw-bold">${item.id}</td>
//             <td><img id="admin_img" class="bg-body rounded" src="${item.image}"></td>
//             <td class= "text-white fw-bold">${item.product}</td>
//             <td class= "text-white fw-bold">${item.price}</td>
//             <td><button>Edit</button><i class="fas fa-edit"></i>
//             <button id="del" onclick="deleteProduct()">Delete</button>
//             <i class="fa fa-trash" aria-hidden="true"></i>
//             </td>
//             </tr>
//             `
//     })

// }

// displayProducts(product);

// let deleteProduct = (id) => {

//     for(i=0; i<products.length; i++) {
//         if(products.id == id) {
//             products.splice(id, 1);
//         }
// }
// };

// deleteProduct(id)

// function deleteItem(id) {
//     if (id > -1) {
//       products.splice(id, 1);
//       localStorage.Item("products", JSON.stringify(products));
//       
//     }




    


