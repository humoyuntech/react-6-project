import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    fetch('https://cbu.uz/uz/arkhiv-kursov-valyut/json/')
      .then((res) =>res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ma'lumot olib bo'lmayobdi")
      })
  })


  return (
    <div className="App">
      <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;
