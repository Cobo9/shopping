class Storage {
    static saveProducts(products){
        localStorage.setItem('products', JSON.stringify(products));
    }
    static getProduct () {
        let products = JSON.parse(localStorage.getItem('products'));
    return products
    }
  }

export default Storage