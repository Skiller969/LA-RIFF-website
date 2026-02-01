/**
 * LA RIFF PRODUCT COLLECTION
 * 
 * HOW TO ADD A NEW PRODUCT:
 * 1. Copy the "TEMPLATE" block at the bottom of the list.
 * 2. Paste it inside the `products` array (before the closing `]`).
 * 3. Fill in the details.
 * 
 *
 * IMAGE TIPS:
 * - Use a high-quality vertical image (recommended ratio 3:4).
 * - You can use local files (e.g., "/images/my-photo.jpg") or URLs.
 */

export const products = [
    {
        id: 1,
        name: "Concrete Knife",
        price: "₹ 12,500",
        description: "Oversized silhouette. Mess is a mindset.",
        image: "./public/pics/aesthetic/aesthetic-1.jpg",
    },
    {
        id: 2,
        name: "Glory Days",
        price: "₹ 18,900",
        description: "Designed for presence, not comfort zones.",
        image: "./public/pics/aesthetic/aesthetic-2.jpg",
    },
    {
        id: 3,
        name: "After Hours",
        price: "₹ 15,200",
        description: "Shadows speak louder than words.",
        image: "./public/pics/aesthetic/aesthetic-3.jpg"
    },
    {
        id: 4,
        name: "Last Alley",
        price: "₹ 22,000",
        description: "Where the pavement ends, we begin.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2600&auto=format&fit=crop",
    },

    /* --- PASTE NEW PRODUCTS BELOW THIS LINE --- */

    // {
    //   id: 5,
    //   name: "NEW PRODUCT NAME",
    //   price: "₹ 00,000",
    //   description: "Write your mood-based description here.",
    //   image: "IMAGE_URL_HERE",
    // },

];
