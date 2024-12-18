/* global describe, it, before */

import "mocha";
import { expect, use } from "chai";
import chaiHttp from "chai-http";
import sequelize from "../src/config/db.js";
import { seed } from "../src/config/seed.js";
import app from "../src/app.js";

const chai = use(chaiHttp);

describe("Author", function () {
  before(async () => {
    await sequelize.drop();
    await seed();
  });

  describe("/", function () {
    it("should return all authors", async function () {
      const res = await chai.request(app).get("/authors");

      expect(res).to.have.status(200);
      expect(res.body.length).to.equal(10);
    });
  });
});
