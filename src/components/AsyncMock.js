const products = [
    {
        id: '1',
        name: 'espada de hierro',
        price: 300,
        category: 'espada',
        img: 'https://cdn.fireemblemwiki.org/7/7e/FEWATH_Wo_Dao.png',
        stock: 25,
        descripcion: 'una espada de hierro normal'
    },
    {id: '2', name: 'lanza de hierro', price: 350, category: 'lanza', img: 'https://img1.cgtrader.com/items/2091993/2e324ff416/large/spear-from-the-game-fire-emblem-three-houses-3d-model-obj-stl-ige-stp-sat.jpg', stock:20, descripcion:'una lanza de hierro normal' },
    {id: '3', name: 'hacha de hierro', price: 400, category: 'hacha', img: 'https://cdn.fireemblemwiki.org/d/df/FESK_Iron_Axe.png', stock:15, descripcion:'una hacha de hierro normal' }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
                resolve (products)
            }, 500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find(prod => prod.id === productId);
        if (product) {
          resolve(product);
        } else {
          reject(new Error(`Product with ID ${productId} not found`));
        }
      }, 500);
    });
  };

  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredProducts = products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase());
        if (filteredProducts.length > 0) {
          resolve(filteredProducts);
        } else {
          reject(new Error(`No products found for category: ${categoryId}`));
        }
      }, 500);
    });
  };