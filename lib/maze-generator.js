const Stack = require('./Stack');
const Node = require('./maze-node');
const DEFAULT_VALUE = 0;
class MazeGenerator {

    constructor(dim) {
        this.maze = [];
		for (let i = 0; i < dim; i++) {
			this.maze[i] = [];
			for (let j = 0; j < dim; j++)
				this.maze[i][j] = 0;
		}
        this.dimension = dim;
		this.stack = new Stack();
    }
	
	rand(size) {
		return Math.floor(Math.random() * size);
	}

    generateMaze() {
        this.stack.push(new Node(0,0));
        while (!this.stack.isEmpty()) {
            const next = this.stack.pop();
            if (this.validNextNode(next)) {
                this.maze[next.y][next.x] = 1;
                const neighbors = this.findNeighbors(next);
                this.randomlyAddNodesToStack(neighbors);
            }
        }
    }

    getRawMaze() {
        let sb = "";
        for (let i =0; i < this.dimension; i++) {
            sb += this.maze[i].join(", ") + "\n";
        }
        return sb.toString();
    }

     getSymbolicMaze() {
        let sb = "";
        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                sb += (this.maze[i][j] == 1 ? "1" : " ") + " ";
            }
            sb += "\n";
        }
        return sb.toString();
    }

    validNextNode(node) {
        let numNeighboringOnes = 0;
        for (let y = node.y-1; y < node.y+2; y++) {
            for (let x = node.x-1; x < node.x+2; x++) {
                if (this.pointOnGrid(x, y) && this.pointNotNode(node, x, y) && this.maze[y][x] == 1) {
                    numNeighboringOnes++;
                }
            }
        }

        return (numNeighboringOnes < 3) && this.maze[node.y][node.x] != 1;
    }

    randomlyAddNodesToStack(nodes) {
        let targetIndex;
        while (nodes.length) {
            targetIndex = this.rand(nodes.length);
            this.stack.push(nodes[targetIndex]);
			nodes.splice(targetIndex, 1);
        }
    }

    findNeighbors(node) {
        const neighbors = [];
        for (let y = node.y-1; y < node.y+2; y++) {
            for (let x = node.x-1; x < node.x+2; x++) {
                if (this.pointOnGrid(x, y) && this.pointNotCorner(node, x, y)
                    && this.pointNotNode(node, x, y)) {
                    neighbors.push(new Node(x, y));
                }
            }
        }
        return neighbors;
    }

    pointOnGrid(x, y) {
        return x >= 0 && y >= 0 && x < this.dimension && y < this.dimension;
    }

    pointNotCorner(node, x, y) {
        return (x == node.x || y == node.y);
    }
    
    pointNotNode(node, x, y) {
        return !(x == node.x && y == node.y);
    }
}

module.exports = MazeGenerator;