(function() {
  describe("jasmine-node", function() {
    it("should pass", function() {
      return expect(1 + 2).toEqual(3);
    });
    return it("shows asynchronous test", function() {
      setTimeout((function() {
        expect("second").toEqual("second");
        return asyncSpecDone();
      }), 1);
      expect("first").toEqual("first");
      return asyncSpecWait();
    });
  });
}).call(this);
