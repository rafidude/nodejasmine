(function() {
  describe("jasmine-node-uber-nested", function() {
    it("should pass", function() {
      return expect(1 + 2).toEqual(3);
    });
    return describe("failure", function() {
      return it("should report failure (THIS IS EXPECTED)", function() {
        return expect(true).toBeFalsy();
      });
    });
  });
}).call(this);
