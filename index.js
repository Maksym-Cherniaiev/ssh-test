class Canvas {
    constructor(coordinate) {
        this.x = 5|| coordinate.x;
        this.y = 5 || coordinate.y;
        this.canvas = document.querySelector(".canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvasSize();
    }

    canvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}

class Circle extends Canvas {
    constructor(radius) {
        super();
        this.radius = 3 || radius;
        this.radian = 0;
        this.createCircle();
    }

    createCircle() {
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "burlywood";
        this.ctx.fillStyle = "burlywood"
        this.ctx.beginPath();
        this.ctx.arc(
            this.x, 
            this.y, 
            this.radius,
            this.radian,
            Math.PI * 2,
            false
        );
        this.ctx.stroke();
        this.ctx.fill();
    }
}

class Background extends Circle {
    constructor(space) {
        super();
        this.space = 15 || space;
        this.multiplyRowOfCircles();
    }

    multiplyCircle() {
        while (this.x < this.canvas.width) {
            this.createCircle();
            this.x += this.space;
        }
        this.x = 5;
    }

    multiplyRowOfCircles() {
        this.multiplyCircle();
        if (this.y < this.canvas.height - this.space) {
            this.y += this.space;
            return this.multiplyRowOfCircles();
        }
    }
}


const background = new Background();
