import React, { Component } from 'react';

class History extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <h3>History</h3>
                    <ul id="list" class="list">
                        <li className="minus">
                        Cash <span>-$400</span><button class="delete-btn">x</button>
                        </li> 
                    </ul>
            </React.Fragment>
         );
    }
}
 
export default History;