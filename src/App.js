import './App.css';
import Header from '../src/components/Header';
import Card from '../src/components/Card';
import Data from '../src/components/Data';

function App() {
    const cards = Data.map(card => {
      return(
        <Card 
          key={card.id}
          card={card}
        />
      )
    })
  return (
    <div className="App">
      <Header />
      {cards}

    </div>
  );
}

export default App;
