import React, { Component } from 'react';
import Balance from './balance';
import IncExp from './inc_exp';
import History from './history';


class AddDelete extends Component {

    state = 
    {
      transaction :[],
      text : '',
      amount : '',
      totalIncome: 0,
      totalExpense: 0,
      totalBalance: 0,
      setSign:'plus',
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
        type: this.state.setSign,
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
        if(this.state.setSign === 'plus')
        {
          this.calculate_income();
        }else{
          this.calculate_expense();
        }  

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
        (curr.type === 'plus')?totalBalance +=  Number(curr.amount): totalBalance -= Number(curr.amount)
      })
      this.setState({
         totalBalance : totalBalance,
      })
    }
    calculate_income()
    {
      console.log('calculating income')
      let totalIncome = 0;
      this.state.transaction.map(curr => {
        console.log(curr.type)
      if(curr.type ==='plus')
      totalIncome +=  Number(curr.amount)
      })
      console.log(totalIncome)
      this.setState({
        totalIncome : totalIncome,
      })
    }
    calculate_expense()
    {
      console.log('calculating expense')
      let totalExpense = 0;
      this.state.transaction.map(curr => {
        console.log(curr.type)
        if(curr.type ==='minus')
        totalExpense +=  Number(curr.amount);
      })
      console.log(totalExpense)
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
    setGender(event) {
      this.setState({
        setSign:event.target.value,
      });
    }
      
    render() 
    { 
        return ( 
            <React.Fragment>
             <Balance totalBalance={this.state.totalBalance}/>
             <IncExp 
             income={this.state.totalIncome}
             expense={this.state.totalExpense}
             />
           
             <History
               transaction={this.state.transaction}
             />
                <h3>Add new transaction</h3>
               
                  <div className="form-control">
                    <label>Text</label>
                    <input type="text" id="text" placeholder="Enter text..." 
                      value={ this.state.text}
                      onChange = { e => this.input_text(e.target.value) }
                    />
                  </div>
                  <div className="radio">
                 
                    <div onChange={this.setGender.bind(this)}>
                      <input type="radio" value="plus" name="gender" defaultChecked/> +
                      <input type="radio" value="minus" name="gender"/> -
                    </div>
                   
                    
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