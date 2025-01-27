export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: "swords" | "armor" | "accessories"
    features: string[]
  }
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Shadow Dragon Katana",
      description: "Hand-forged katana with black Damascus steel blade and dragon engraving.",
      price: 400,
      image: "https://d3524jlyu2md0e.cloudfront.net/5d/1633122632312.jpeg",
      category: "swords",
      features: ["Folded steel blade", "Full tang construction", "Hand-wrapped handle", "Custom wooden saya"],
    },
    {
      id: "2",
      name: "Crimson Warrior Armor",
      description: "Complete set of traditional samurai armor with modern protective elements.",
      price: 600,
      image: "https://d3524jlyu2md0e.cloudfront.net/56/16091122517041.jpeg",
      category: "armor",
      features: ["Hand-crafted steel plates", "Genuine leather straps", "Adjustable fit", "Includes storage stand"],
    },
    {
      id: "3",
      name: "Handmade Japanese Samurai Tanto Sword",
      description: "Companion sword with matching design elements to our katanas.",
      price: 1000,
      image: "https://d3524jlyu2md0e.cloudfront.net/bb/16182917044610.webp",
      category: "swords",
      features: ["Matching saya design", "Balanced weight", "Traditional construction", "Certificate of authenticity"],
    },
    {
      id: "4",
      name: "Imperial Guard Helmet",
      description: "Authentic reproduction of elite samurai helmet with mask.",
      price: 800,
      image: "/images/tsushima_bg.png",
      category: "armor",
      features: ["Detailed metalwork", "Comfortable padding", "Adjustable straps", "Display stand included"],
    },
  ]
  
  