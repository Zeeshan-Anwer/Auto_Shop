let products = [];
let productIdCounter = 1;

function addProduct() {
    const name = document.getElementById('productName').value;
    const buyPrice = parseFloat(document.getElementById('buyPrice').value);
    const minimumSellPrice = parseFloat(document.getElementById('minimumSellPrice').value);
    const normalPrice = parseFloat(document.getElementById('normalPrice').value);
    const pictures = Array.from(document.getElementById('pictures').files).map(file => URL.createObjectURL(file));
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    const product = {
        id: productIdCounter++,
        name,
        buyPrice,
        minimumSellPrice,
        normalPrice,
        pictures,
        description,
        location
    };

    products.push(product);
    displayProducts();
    clearForm();
}

function displayProducts() {
    const productsList = document.getElementById('products');
    productsList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('li');
        productItem.innerHTML = `
            <strong>${product.name}</strong><br>
            Buy Price: ${product.buyPrice}, Minimum Sell Price: ${product.minimumSellPrice}, Normal Price: ${product.normalPrice}<br>
            Pictures: ${product.pictures.map(picture => `<img src="${picture}" alt="${product.name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">`).join('')}<br>
            Description: ${product.description}<br>
            Location: ${product.location}<br>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;
        productsList.appendChild(productItem);
    });
}

function clearForm() {
    document.getElementById('productName').value = '';
    document.getElementById('buyPrice').value = '';
    document.getElementById('minimumSellPrice').value = '';
    document.getElementById('normalPrice').value = '';
    document.getElementById('pictures').value = '';
    document.getElementById('description').value = '';
    document.getElementById('location').value = '';
}

function searchProduct() {
    const searchName = document.getElementById('searchName').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchName));
    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const productsList = document.getElementById('products');
    productsList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productItem = document.createElement('li');
        productItem.innerHTML = `
            <strong>${product.name}</strong><br>
            Buy Price: ${product.buyPrice}, Minimum Sell Price: ${product.minimumSellPrice}, Normal Price: ${product.normalPrice}<br>
            Pictures: ${product.pictures.map(picture => `<img src="${picture}" alt="${product.name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">`).join('')}<br>
            Description: ${product.description}<br>
            Location: ${product.location}<br>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;
        productsList.appendChild(productItem);
    });
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    displayProducts();
}
