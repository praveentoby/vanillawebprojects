
import React, { Component } from 'react';

class Balance extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <h2>Expense Tracker</h2>
                <div className="container">
                    <h4>Your Balance</h4>
                    <h1 id="balance">{this.props.totalBalance}</h1>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Balance;