import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  let navlink = ["services","projects","about"]
  return (
    <div>
    
    <Navbar itemlink={navlink} buttoname={"contact"}/>
  </div>
  );
}

export default App;
