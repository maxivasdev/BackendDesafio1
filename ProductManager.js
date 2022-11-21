class ProductManager {
    constructor() {
        this.products = []
    }
    
    getProducts() {
        console.log(this.products);
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if(title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined){
            return console.log('Todos los campos son obligatorios');
        }

        const codeCheck = this.products.find(el => el.code == code)
        if (codeCheck) return console.log(`El codigo: ${code} ya existe, cambiarlo por uno no existente`);

        this.products.push({
            id: this.products.length !== 0 ? this.products[this.products.length - 1].id + 1 : 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
    }

    getProductById(id){
        const idCheck = this.products.find(el => el.id == id)
        if (idCheck) {
            console.log(`Este es el objeto Id ${id}`, idCheck)
            return idCheck
        } else {
            console.log(`El id: ${id} no existe`);
        }
    }
}

const allProducts = new ProductManager();
console.log(allProducts.products);

allProducts.addProduct('Zapatilla', 'Zapatilla Adidas Boost Running', 35000, 'img', 2701, 10)
console.log(allProducts.products);

allProducts.addProduct('Zapatilla', 'Zapatilla Adidas Boost Running', 35000, 'img', 2701, 10)
allProducts.getProductById(7)