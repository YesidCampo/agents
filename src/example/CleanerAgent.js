const Agent = require('../core/Agent');



/**
 * Simple reflex agent. Search for an object whithin a labyrinth. 
 * If the object is found the agen take it.
 */
class CleanerAgent extends Agent {

    constructor(value) {
        super(value);
        //LEFT, UP, RIGHT, DOWN, CELL
        this.table = {
            "0,0,0,0,0": "UP",
            "0,0,0,1,0": "UP",
            "0,0,1,0,0": "UP",
            "0,0,1,1,0": "UP",//5
            "0,1,0,0,0": "LEFT",
            "0,1,0,1,0": "RIGHT",//3
            "0,1,1,0,0": "UP",//4
            "0,1,1,1,0": "LEFT",
            "1,0,0,0,0": "UP",
            "1,0,0,1,0": "RIGHT",
            "1,0,1,0,0": "DOWN",//1
            "1,0,1,1,0": "UP",
            "1,1,0,0,0": "RIGHT",//2
            "1,1,0,1,0": "RIGHT",
            "1,1,1,0,0": "DOWN",
            "default": "TAKE"
        };
        let actionHistory = {};
        let positions = null;
    }

    /**
     * We override the send method. 
     * In this case, the state is just obtained as the join of the perceptions
     */
    send() {       

        //let viewKey = this.perception.join();
        let action = this.foo();
        console.log('estado ',this.initialState);
        this.newPosition();
        console.log('position ',this.positions);
        //this.internalState = updatex(this.internalState, this.perception, action)
        return action;
        /*
        if (this.table[viewKey]) {
            return this.table[viewKey];
        } else {
            return this.table["default"];
        }
        */

    }
    
    foo() {   
        let viewKey = this.perception.join();
        if (this.table[viewKey]) {
            let action = this.table[viewKey];
            return action;
        } else {
            return this.table["default"];
        }
    }


    /**
     * calcula la nueva posicion por la action pasada y el estado inicial
     */
    newPosition() {
        this.positions = new Array();
        this.positions.push(this.initialState);
        let position = {};
        let positionTmp = "";
        let positionMap = new Map();
        let positionX = this.initialState.x;
        let positionY = this.initialState.y;
        switch (this.foo()) {
            case "LEFT":
                position = { "x": this.initialState.x-1, "y":this.initialState.y}
                positionTmp = JSON.stringify(position);
                positionMap.set(positionTmp,"RIGHT");
                console.log('map',positionMap);
                break;
            case "UP":
                position = { "x": this.initialState.x, "y":this.initialState.y-1}
                positionTmp = JSON.stringify(position);
                positionMap.set(positionTmp,"DOWN");
                console.log('map',positionMap);
                break;
            case "RIGHT":
                position = { "x": this.initialState.x+1, "y":this.initialState.y}
                positionTmp = JSON.stringify(position);
                positionMap.set(positionTmp,"LEFT");
                console.log('map',positionMap);
                break;
            case "DOWN":
                position = { "x": this.initialState.x, "y":this.initialState.y+1}
                positionTmp = JSON.stringify(position);
                positionMap.set(positionTmp,"UP");
                console.log('map',positionMap);
                break;
            default:
                break;
        }

    } 




}

module.exports = CleanerAgent;