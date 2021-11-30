import logo from './logo.svg';
import './App.css';
import newlogo from "./NewLogo.svg"           


function App() {
  return (
      <div className="App">
      <header className="App-header">
	<img src={newlogo} height={200} width={200} alt="" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Grant
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
  


export default App;
