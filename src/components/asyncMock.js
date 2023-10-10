const products = [
    {id: '1', name:'Remera', precio:'5000', categoria: 'Remera', img:'https://static.dafiti.com.ar/p/vinson-3625-764805-1-product.jpg', stock: 6 ,
    descripcion: 'una ropa de buena calidad y tiene un buen precio'},
    {id: '2', name:'Pantalon', precio:'9000', categoria: 'Pantalon', img:'https://static.dafiti.com.ar/p/vinson-3625-764805-1-product.jpg', stock: 4 ,
    descripcion: 'una ropa de buena calidad y tiene un buen precio'},
    {id: '3', name:'Buzo', precio:'10.000', categoria: 'Buzo', img:'https://static.dafiti.com.ar/p/polo-label-2741-8764221-1-product.jpg', stock: 20 ,
    descripcion: 'una ropa de buena calidad y tiene un buen precio'},
   
    
    
 ]

 export const getProducts = () => {
    return new Promise ((resolve)=>[
        setTimeout(() => {
            resolve(products)
        }, 500)
    ])
 }

 export const getProductById = (productId) => {
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve(products.find(prod => prod.id === productId))
    },500)
})
 }

 export const getProductsByCategoria = (categoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.categoria === categoria));
      }, 500);
    });
  }