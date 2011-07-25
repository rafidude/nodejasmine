describe "jasmine-node-uber-nested", ->
  it "should pass", ->
    expect(1 + 2).toEqual 3
  
  describe "failure", ->
    it "should report failure (THIS IS EXPECTED)", ->
      expect(true).toBeFalsy()