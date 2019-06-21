describe("Utils", () => {
  const utils = require("../../src/utils");

  it("pick will pick properties", async () => {
    const obj = {
      hello: "world",
      goodbye: "world"
    };

    expect(utils.pick(obj, ["hello"])).toEqual({
      hello: "world"
    });
  });
});
