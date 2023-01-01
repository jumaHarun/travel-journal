import Navbar from './components/Navbar';
import Destination from './components/Destination';
import data from './data';
import './App.css';

function App() {
  const destinations = data.map((site) => {
    return <Destination key={site.title} {...site} />;
  });

  return (
    <div className="App">
      <Navbar />
      <main>{destinations}</main>
    </div>
  );
}

export default App;
