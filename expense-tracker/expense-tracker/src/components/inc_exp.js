import React, { Component } from 'react';

class IncExp extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                 <div className="inc-exp-container">
                        <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">+$0.00</p>
                        </div>
                        <div>
                        <h4>Expense</h4>
                        <p id="money-minus" className="money minus">-$0.00</p>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}
 
export default IncExp;