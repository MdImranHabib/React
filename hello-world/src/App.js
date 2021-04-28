import logo from './logo.svg';
import './App.css';
import {Greet} from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Md. Imran Habib">
        <p>This is a child element</p>
      </Greet>
      <Greet name="Nahidul Islam Prince">
        <button>Action</button>  
      </Greet>
      <Greet name="Hasibul Islam" />
      <Welcome />
    </div>
  );
}

export default App;
