import './App.css';

import ItemListContainer from './containers/itemListContainer';
import Navbar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
