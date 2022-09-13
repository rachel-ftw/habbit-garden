"use strict";

// jest.mock( "./dailies-mocks" );
const { data, reorder } = require("./dailies-mocks");

describe("Dailies", () => {
  beforeAll(() => {
    console.log("beforeAll executes once before all tests");
    // calc.add.mockImplementation( () => -1 );
  });

  afterAll(() => {
    console.log("afterAll executes once after all tests");
  });

  describe("reordering", () => {
    beforeEach(() => {
      console.log("beforeEach executes before every test", data);
    });

    it("something", () => {
      expect(reorder(0, 2)).toBe(4);
    });
  });
});
