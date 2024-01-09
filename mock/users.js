import { stores } from "./stores.js";

export const users = [
  {
    id: "7385ac56-3786-4d64-88ff-6d6870dfa540",
    fullname: "Samuel Carneiro",
    birthdate: new Date(),
    email: "email@email.com",
    phone: "85999999999",
    cpf: "00000000000",
    stores: stores.filter(
      (store) => store.userId === "7385ac56-3786-4d64-88ff-6d6870dfa540"
    ),
  },
];