import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      _id: "1",
      name: "Daniel",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      _id: "2",
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  bets: [
    {
      _id: "1",
      category: "sports",
      image:
        "https://cdn.betwaygroup.com/medusa-production-cache/b/6/b604ec0b6b3e584899a17fb3255e5177a8e649e0.webp",
      description: "Sports New Customer Offer",
      price: "£10",
    },
    {
      _id: "2",
      category: "live & real",
      image:
        "https://cdn.betwaygroup.com/medusa-production-cache/b/6/b604ec0b6b3e584899a17fb3255e5177a8e649e0.webp",
      description: "Live & Real New Customer Offer",
      price: "£15",
    },
    {
      _id: "3",
      category: "casino",
      image:
        "https://cdn.betwaygroup.com/medusa-production-cache/b/6/b604ec0b6b3e584899a17fb3255e5177a8e649e0.webp",
      description: "Casino New Customer Offer",
      price: "£20",
    },
    {
      _id: "4",
      category: "esports",
      image:
        "https://cdn.betwaygroup.com/medusa-production-cache/b/6/b604ec0b6b3e584899a17fb3255e5177a8e649e0.webp",
      description: "Esports New Customer Offer",
      price: "£11",
    },
    {
      _id: "5",
      category: "vegas",
      image:
        "https://cdn.betwaygroup.com/medusa-production-cache/b/6/b604ec0b6b3e584899a17fb3255e5177a8e649e0.webp",
      description: "Vegas New Customer Offer",
      price: "£30",
    },
  ],
};
export default data;
