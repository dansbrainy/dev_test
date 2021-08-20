import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Daniel",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
  ],
};
export default data;
