import logo from './logo.svg';
import './App.css';
import {Greet} from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet name="Md. Imran Habib">
        <p>This is a child element</p>
      </Greet>
      <Greet name="Nahidul Islam Prince">
        <button>Action</button>  
      </Greet>
      <Greet name="Hasibul Islam" />
      <Welcome name="Md. Saiyem" >
        <p>This is a child element</p>
      </Welcome>
      <Welcome name="Izabuddin" />
      <Welcome name="Md Zahidul iSlam" /> */}
    </div>
  );
}

export default App;
