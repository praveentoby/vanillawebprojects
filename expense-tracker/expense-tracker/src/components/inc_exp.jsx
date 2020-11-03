import React, { Component } from 'react';

class IncExp extends Component {
    render() { 
        return (  
            <React.Fragment>
                <div className = "inc-exp-container">
                        <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">+{this.props.income}</p>
                        </div>
                        <div>
                        <h4>Expense</h4>
                        <p id="money-minus" className="money minus">-{this.props.expense}</p>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}
 
export default IncExp;