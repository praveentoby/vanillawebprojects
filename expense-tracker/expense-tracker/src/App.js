// import './App.css';
import './style.css';

import Balance from './components/balance';
import IncExp from './components/inc_exp';
import History from './components/history';
import AddDeleteIncExp from './components/add_delete';

function App() {
  return (
    <div className="App">
     <Balance/>
     <IncExp/>
     <History/>
     <AddDeleteIncExp/>
    </div>
  );
}

export default App;
