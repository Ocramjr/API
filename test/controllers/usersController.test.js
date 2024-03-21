import { app } from "../../src";
import supertest from "supertest";

describe("Users controller", () => {
  it("Deve ser possível buscar as informações de todos os usuários cadastrados", () => {
    const response = request(app).get("/users");
    expect(response.status).toBe(200);
  });
});
