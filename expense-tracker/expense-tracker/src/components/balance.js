
import React, { Component } from 'react';

class Balance extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h2>Expense Tracker</h2>
                <div class="container">
                    <h4>Your Balance</h4>
                    <h1 id="balance">$0.00</h1>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Balance;