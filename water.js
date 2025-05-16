'use strict';
let perlin = {
    rand_vect: function () {
        let theta = Math.random() * 2 * Math.PI;
        return { x: Math.cos(theta), y: Math.sin(theta) };
    },
    dot_prod_grid: function (x, y, vx, vy) {
        let g_vect;
        let d_vect = { x: x - vx, y: y - vy };
        if (this.gradients[[vx, vy]]) {
            g_vect = this.gradients[[vx, vy]];
        } else {
            g_vect = this.rand_vect();
            this.gradients[[vx, vy]] = g_vect;
        }
        return d_vect.x * g_vect.x + d_vect.y * g_vect.y;
    },
    smootherstep: function (x) {
        return 6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3;
    },
    interp: function (x, a, b) {
        return a + this.smootherstep(x) * (b - a);
    },
    seed: function () {
        this.gradients = {};
        this.memory = {};
    },
    get: function (x, y) {
        if (this.memory.hasOwnProperty([x, y]))
            return this.memory[[x, y]];
        let xf = Math.floor(x);
        let yf = Math.floor(y);
        //interpolate
        let tl = this.dot_prod_grid(x, y, xf, yf);
        let tr = this.dot_prod_grid(x, y, xf + 1, yf);
        let bl = this.dot_prod_grid(x, y, xf, yf + 1);
        let br = this.dot_prod_grid(x, y, xf + 1, yf + 1);
        let xt = this.interp(x - xf, tl, tr);
        let xb = this.interp(x - xf, bl, br);
        let v = this.interp(y - yf, xt, xb);
        this.memory[[x, y]] = v;
        return v;
    }
}
perlin.seed();

function init(){
    cnvsb = document.getElementById('waterHolder');
    ctxb = cnvsb.getContext('2d');
    cnvsb.height = document.body.clientHeight;    
    cnvsb.width = document.body.clientWidth;
    // reset();
    // render();
    whileloop();
};

async function whileloop(){
    while(on){
        cnvsb.height = document.body.clientHeight;    
        cnvsb.width = document.body.clientWidth;
        reset();
        render();
        await sleep(50);
    }
}

var cnvsb;
var ctxb;
var w = window.innerWidth;
var gridSize, resolution;
let on = true;

function reset() {
    gridSize = 9;
    resolution = 100;
    let inpts = document.getElementsByTagName('input');
    for (let i = 0; i < inpts.length; i++) {
        inpts[i].disabled = false;
    }
}

function render() {
    let pixSize = w / resolution;

    ctxb.clearRect(0, 0, cnvsb.width, cnvsb.width);
    perlin.seed();

    for (var y = 0; y < gridSize; y += gridSize / resolution) {
        for (var x = 0; x < gridSize; x += gridSize / resolution) {
            var v = parseInt((perlin.get(x, y)/20) * 255);
            ctxb.fillStyle = 'rgb( 255, 255, 255, 0.'+ v +')';
            ctxb.fillRect(x * (w / gridSize), y * (w / gridSize), pixSize, pixSize);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}