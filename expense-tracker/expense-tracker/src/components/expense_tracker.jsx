import React, { Component } from 'react';

import AddDelete from './add_delete';


class ExpenseTracker extends Component {
    state = { 
       
     }
   
    render() { 
        return ( 
            <React.Fragment>

               <AddDelete
               />
            </React.Fragment>
         );
    }
}
 
export default ExpenseTracker;