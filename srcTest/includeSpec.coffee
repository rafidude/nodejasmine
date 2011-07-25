Test = require("../lib/test")
describe "test", ->
  it "constructor should return \"Hello world\"", ->
    new Test().should == "Hello world"