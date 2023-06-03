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

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={ index } type={animal} />
  });

  return (
    <div>
      <button onClick={ handleClick }>Add Animal</button>
      { renderedAnimals }
    </div>
  );
}

export default App;
