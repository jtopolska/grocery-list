import './App.css';
import picOne from './shopping.jpg';
import picTwo from './man.jpg';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={ picOne } alt='Shopping bag'/>
        <div className='big-container'>
          <GroceryList />
        </div>
        <img src={ picTwo } alt='Delivery man' />
      </div>
    </div>
  );
}

export default App;
