// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (price < 0 || quantity <= 0) {
            throw new Error("Price must be non-negative and quantity must be greater than zero.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(code) {
        // Coupon codes must look like SAVE20 or DISC10.
        if (!/^(SAVE20|DISC10)$/.test(code)) {
            return { valid: false, discountPercent: 0, message: "Invalid coupon. Use SAVE20 or DISC10." };
        }
        const discountPercent = code === "SAVE20" ? 20 : 10;
        return {
            valid: true,
            discountPercent,
            message: `${discountPercent}% discount applied.`
        };
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("USB Cable", 200, 3);

console.log("Cart items:");
cart.items.forEach(item => {
    console.log(`${item.name}: ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}`);
});

const total = cart.getTotal();
console.log(`\nSubtotal: ₹${total}`);

const couponCode = "SAVE20"; // Try SAVE20, DISC10, or an invalid code.
const coupon = cart.applyCoupon(couponCode);
console.log(coupon.message);

if (coupon.valid) {
    const finalTotal = total * (1 - coupon.discountPercent / 100);
    console.log(`Final total after discount: ₹${finalTotal.toFixed(2)}`);
} else {
    console.log(`Final total: ₹${total.toFixed(2)}`);
}
