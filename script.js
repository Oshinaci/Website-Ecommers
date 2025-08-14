document.addEventListener('DOMContentLoaded', () => {
    // Data produk (bisa diganti dengan data produk Anda)
    const products = [
        {
            id: 1,
            name: "Sepatu Lari X100",
            image: "https://via.placeholder.com/250", // Ganti dengan URL gambar Anda
            price: "Rp 500.000",
            description: "Sepatu lari yang ringan dan nyaman, cocok untuk kegiatan sehari-hari."
        },
        {
            id: 2,
            name: "Kaos Polos Katun",
            image: "https://via.placeholder.com/250",
            price: "Rp 150.000",
            description: "Kaos katun 100% yang lembut dan adem."
        },
        // Tambahkan produk lain di sini
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <a href="#" class="button">Lihat Detail</a>
        `;

        productList.appendChild(productCard);
    });
});
