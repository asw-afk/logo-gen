class Shape {
    constructor(text, color, textColor) { 
        this.color = color;
        this.text = text; 
        this.textColor = textColor;
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