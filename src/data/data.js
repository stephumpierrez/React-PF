const products = [
    {
        id: "ID1234",
        name: "Producto 1",
        description: "Description 1",
        price: 1390,
        stock: 5,
        category: "Bikinis",
        image: "/image/bikini-leo.jpg"
    },
    {
        id: "ID5678",
        name: "Producto 2",
        description: "Description 2",
        price: 1390,
        stock: 3,
        category: "Bikinis",
        image: "/image/bikini-afrodita.jpg"
    },
    {
        id: "ID91011",
        name: "Producto 3",
        description: "Description 3",
        price: 390,
        stock: 100,
        category: "Accesorios",
        image: "/image/acce-bucket.jpg"
    },
    {
        id: "ID121314",
        name: "Producto 4",
        description: "Description 4",
        price: 2490,
        stock: 6,
        category: "Vestimenta",
        image: "/image/vest-camisa.jpg"
    }
]

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3000);
    });
};

export default getProducts;