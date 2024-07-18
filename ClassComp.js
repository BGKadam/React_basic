import React from 'react'

class ClassComp extends React.Component {//class componant
    constructor() {
        super()
        this.state = {
            planet: "Earth"
        }
    }

    render() {
        return (
            <div>{this.state.planet}</div>
        )
    }
}

export default ClassComp;


/*OR

import React, {Component}from 'react'

class ClassComp extends Component {//class componant....comp me predifine method aahet ,super keyword aahe
    render() {
      return (
        <div>ClassComp</div>
      )
    }
  }
  
  export default ClassComp; */
