//This text constructor class is going to allow us to pass the user input
//in through the this.text and this.textColor when the Whatever class is called
//inside the init function 
class Text {
  constructor() {
    this.text = "";
    this.textColor = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.shape}${this.text}</svg>`;
  }

  setText(text, textColor) {
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
  setShape(shape) {
    this.shape = shape.render();
  }
}



module.exports = Text ;

