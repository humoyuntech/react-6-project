import React from 'react';

function Game({step, question, onClickVariant }) {

    const percentage = Math.round((step / question.length) * 100);
    
    console.log(percentage, "%");
  
    return (
      <>
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
            {
              question.variants.map((item, index) => (
              <li key={item} onClick={()=> onClickVariant(index)}>{item}</li>
            ))}
        </ul>
      </>
    );
  
}

export default Game;