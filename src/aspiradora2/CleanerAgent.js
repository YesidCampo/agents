const Agent = require('../core/Agent');

/**
 * Simple reflex agent. Search for an object whithin a labyrinth. 
 * If the object is found the agen take it.
 */
class CleanerAgent extends Agent {
    constructor(value) {
        super(value);
        this.actions = ["L", "R", "A"]
    }

    setup(initialState={}) {
        this.table ={
            '0,0':'R',
            '1,0':'L',
            '0,1':'A',
            '1,1':'A',
            'default' : 'A'
        }
    }

    //[1, [1, 1]]

    /**
     * We override the send method. 
     * In this case, the state is just obtained as the join of the perceptions
     */
    send() {
        let viewKey = this.perception[0] + "," + [this.perception[1][this.perception[0]]]
        //console.log(this.perception[1][this.perception[0]]);
        //return this.actions[Math.floor(Math.random() * this.actions.length)]     
        // @TODO
        // Implement based on the cost of each action
        //return this.table[this.perception.join(",")]
        return this.table[viewKey] ? this.table[viewKey] : this.table['default'];
    }

}

module.exports = CleanerAgent;