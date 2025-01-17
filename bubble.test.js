const bubbleSort = require('./bubble'); // Adjust the path as needed

describe("bubbleSort", () => {
  it("should exist", () => {
    expect(typeof bubbleSort).toBe("function");
  });

  it("should sort numbers in ascending order", () => {
    expect(bubbleSort([4, 2, 7, 1])).toEqual([1, 2, 4, 7]);
  });
});
