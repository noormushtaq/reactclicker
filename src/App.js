import React from 'react';

import SocialCard from './SocialCard';

import Button from './Button';

import './App.css';



function App() {

  let [counter, setCounter] = React.useState(0);



  function increment() {

    setCounter(counter + 1);

  }



  function decrement() {

    setCounter(counter - 1); 

  }



  function reset() {

    setCounter(0);

  }



  return (

    <div className="app">

      <SocialCard 

        imageUrl="https://placehold.it/600x400"

        title="This is the title"

        description="The description"

        url="dev.to"

      />



      <div className="counter-container">

        <h1>{counter}</h1>



        <div className="button-container">

          <Button 

            label="+" 

            bgColor="green"

            textColor="white"

            onClick={increment}

          />

          <Button 

            label="reset" 

            bgColor="yellow" 

            textColor="black" 

            onClick={reset}

          />

          <Button 

            label="-" 

            bgColor="red" 

            textColor="white"

            onClick={decrement}

          />

        </div>

      </div>



      {counter < 0 && <h2>You went below 0! Consider resetting</h2>}

      {counter > 0 && <h2>You're in the clear!</h2>}

    </div>

  );

}



export default App;