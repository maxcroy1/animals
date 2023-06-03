import { useState } from 'react';
import AnimalShow from './AnimalShow';

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }

  return (
    <div>
      <button onClick={ handleClick }>Add Animal</button>
      { animals && 
          animals.map((animal, index) => <AnimalShow key={ index } type={animal} />)
      }
    </div>
  );
}

export default App;
