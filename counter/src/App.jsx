import './index.scss';
import React from 'react';


function App() {
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  const onClickMinus = () => {
    if(count > 0) {
      setCount(count - 1);

    }
  }


  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={onClickMinus}>- Минус</button>
        <button className="plus" onClick={onClickPlus}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;