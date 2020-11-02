import React, { Component } from 'react';
import Balance from './balance';
import IncExp from './inc_exp';
// import History from './history';

class AddDelete extends Component {
    state = 
    {
      transaction :[],
      text : '',
      amount : '',
      totalIncome: 0,
      totalExpense: 0,
      totalBalance: 0,
      selectedOption: null,
    }
    input_text(value) {
      this.setState({
        text : value,
      })
    }
    input_amount(value) {
      this.setState({
        amount : value,
      })
    }

    addAmout()
    {
      if(this.state.text && this.state.amount)
      {
        let totalBalance = 0;
        const item = {
        id:Math.floor(Math.random() * 100000000),
        text: this.state.text,
        amount: this.state.amount,
        }
        let transaction = this.state.transaction
        transaction.push(item);

        this.setState({
          transaction,
          text : '',
          amount : '',
          totalBalance : totalBalance,
        })

        this.calculate_balance();
      }
    }
    delete_transaction(e){
     
      let transaction = this.state.transaction;
      transaction.splice(e, 1);
      this.setState({
        transaction:transaction,
      })
      this.calculate_balance();
    }
    calculate_balance()
    {
      let totalBalance = 0;
      this.state.transaction.map((curr) => {
        totalBalance +=  Number(curr.amount);
      })
      this.setState({
         totalBalance : totalBalance,
      })
    }
    calculate_income()
    {
      let totalIncome = 0;
      this.state.transaction.map((curr) => {
        totalIncome +=  Number(curr.amount);
      })
      this.setState({
        totalIncome : totalIncome,
      })
    }
    calculate_expense()
    {
      let totalExpense = 0;
      this.state.transaction.map((curr) => {
        totalExpense +=  Number(curr.amount);
      })
      this.setState({
        totalExpense : totalExpense,
      })
    }
    onValueChange(event) {
      console.log(event)
      this.setState({
        selectedOption: event,
      });
    }
    render() 
    { 
        return ( 
            <React.Fragment>
             <Balance totalBalance={this.state.totalBalance}/>
             <IncExp />
           
            <h3>History</h3>
                  <ul id="list" className="list">
                    {
                      this.state.transaction.map((current, key) => {
                        return(
                          <li key={current.id}  className="minus">
                          {current.text} <span>{current.amount}</span>
                          <button  data-id={key}
                          onClick = {(e) => this.delete_transaction(e.target.dataset['id'])}
                          className="delete-btn">x</button>
                         </li> 
                        )
                      })
                    }
                  </ul>
                <h3>Add new transaction</h3>
               
                  <div className="form-control">
                    <label>Text</label>
                    <input type="text" id="text" placeholder="Enter text..." 
                      value={ this.state.text}
                      onChange = { e => this.input_text(e.target.value) }
                    />
                  </div>
                  <div className="radio">
                  <label> +
                    <input
                      type="radio" value="plus" className="form-control"
                      checked={this.state.selectedOption === "Male"}
                      onChange={e => this.onValueChange(e.target.value)}
                    />
                    </label>

                    <label> -
                      <input
                        type="radio" value="minus" className="form-control"
                        checked={this.state.selectedOption === "Female"}
                        onChange={e => this.onValueChange(e.target.value)}
                      />
                    
                    </label>
                  </div>

  
                  <div className="form-control">
                    <label>Amount <br /></label>
                    <input type="number" id="amount" placeholder="Enter amount..."
                      value={ this.state.amount } 
                      onChange = { e => this.input_amount(e.target.value) }
                    />
                  </div>
                  <button className="btn"
                  onClick = {e => this.addAmout()}
                  >Add transaction</button>
               
            </React.Fragment>
         );
    }
}
 
export default AddDelete;