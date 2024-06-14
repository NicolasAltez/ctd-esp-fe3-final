import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
