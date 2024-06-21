// const { Triangle, Circle, Square } = require("./shape.js");
const { Triangle, Circle, Square, Shape } = require("./shape.js");

const shapes = require("../lib/shape.js");

// describe("shapes", () => {
//   it("should return the value selected in choice", () => {
//     const shapeQuestion = [
//       {
//         type: "list",
//         message: "select a shape",
//         name: "shape",
//         choice: ["triangle", "circle", "square"],
//       },
//     ];
//     expect;
//   });
// });

describe("Shape parent class", () => {
  it("checks whether the shape returns a string", () => {
    const shape = new Shape();
    shape.setColor("");
    expect(typeof shape.color).toBe("string");
  });
  it("checks whether the string is empty", () => {
    const shape = new Shape(); // instantiate the class
    shape.setColor("blue"); // set the color to a specific value
    
    // expect the color to be defined(existing).
    // any trthy value will make this pass at this stage
    expect(shape.color).toBeDefined();
    // expects the shape.color to have a length greater than 0.
    // works with strings and arrays, will fail with other values that don't have a 'length' property
    expect(shape.color.length).toBeGreaterThan(0);
  });
});

describe("Circle", () => {
  test("To render a green circle svg", () => {
    const expectedElement = `<circle r="100" cx="150" cy="100" fill="green" />`;
    const circle = new Circle();
    circle.setColor("green");
    const actualSVG = circle.render();
    expect(actualSVG).toEqual(expectedElement);
  });
});

describe("Triangle", () => {
  test("To render a green triangle svg", () => {
    const expectedElement = `<polygon points="150,0 300,300 0,300" style="fill:green" />`;
    const triangle = new Triangle();
    triangle.setColor("green");
    const actualSVG = triangle.render();
    expect(actualSVG).toEqual(expectedElement);
  });
});
