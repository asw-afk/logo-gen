//Basis for all shapes below. A very simple string that's connected to user input of setShape function
// inside of the text.js
class Shape {
  constructor() {
    this.color = '';
 
  }
  setColor(color) {
    this.color = color;
  }
}

//Users selections will return the return the corresponding string as well as their color input. 
class Triangle extends Shape {
  render() {
    return `<polygon points="150,0 300,300 0,300" style="fill:${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle r="100" cx="150" cy="100" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" width="200" height="200" fill="${this.color}/>`;
  }
}

module.exports = { Triangle, Circle, Square, Shape };
