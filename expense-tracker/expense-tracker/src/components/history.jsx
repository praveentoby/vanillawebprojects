import React, { Component } from 'react';

class History extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <h3>History</h3>
                  <ul id="list" className="list">
                    {
                      this.props.transaction.map((current, key) => {
                        return(
                          <li key={current.id}  className="minus">
                          {current.text} <span>{(current.type ==='plus')? '+':'-'}{current.amount}</span>
                          <button  data-id={key}
                          onClick = {(e) => this.props.delete_transaction(e.target.dataset['id'])}
                          className="delete-btn">x</button>
                         </li> 
                        )
                      })
                    }
                  </ul>
            </React.Fragment>
         );
    }
}
 
export default History;