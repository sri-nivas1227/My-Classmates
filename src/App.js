import logo from './logo.svg';
import './App.css';

function App() {
  const people = [
    { name: "Varshith Bachu", favoriteColor: "red", favoriteFood: "Mandi" },
    {
      name: "Aakanksha Rangdal",
      favoriteColor: "Lavendar",
      favoriteFood: "ice-cream",
    },
    { name: "Bharat Vamsy", favoriteColor: "blue", favoriteFood: "Biryani" },
    {
      name: "Srinivas Mekala",
      favoriteColor: "sky blue",
      favoriteFood: "Dosa",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
