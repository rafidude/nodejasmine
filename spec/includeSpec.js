(function() {
  var Test;
  Test = require("../lib/test");
  describe("test", function() {
    return it("constructor should return \"Hello world\"", function() {
      return new Test().should === "Hello world";
    });
  });
}).call(this);
