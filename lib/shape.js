class Shape {
    constructor(text, color, textColor) { 
        this.color = color;
        this.text = text; 
        this.textColor = textColor;
    }


renderText() {
    return `<text x="50%" y="125" text-anchor="middle" font-size="80px" fill="${this.textColor}">${this.text}</text>`;
  }

createShape() {
    let str = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;
    str = str.concat(this.render(), this.renderText());
    str += "</svg>";
    return str;
}

};

class triangle extends Shape {
    render(){

     `<polygon points="150,0 300,300 0,300" style="fill:${this.color}" />`;
}
}

class circle extends Shape {
    render() {
       return `<circle r="100" cx="150" cy="100" fill="${this.color}" />`
    }
}

class square extends Shape {
    render() {
        return `<rect x="50" width="200" height="200" fill="${this.color}`
    }
}




module.exports = { Shape };