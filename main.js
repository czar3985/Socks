var app = new Vue({
    el: '#app',
    data: {
        product: 'Christmas Socks',
        brand: 'Elf Brand',
        description: 'Christmas Socks For Sale',
        image: './assets/Sock-Stripes-Asterisks-Red.jpg',
        altText: 'Christmas socks with stripes and asterisks',
        link: 'https://www.amazon.com/s?k=christmas+socks&ref=nb_sb_noss_1',
        inventory: 12,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'Red',
                variantImage: './assets/Sock-Stripes-Asterisks-Red.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'Green',
                variantImage: './assets/Sock-Stripes-Asterisks-Green.jpg'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        cart: 0
    },
    methods: {
        addToCart: function () {
            if (this.inventory > 0) {
                this.cart++;
                this.inventory--;
            }
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart--;
                this.inventory++;
            }
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        }
    }
})
