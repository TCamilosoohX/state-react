import React, { useState } from 'react';

const PiedraPapelTijeras = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (choice) => {
    const computerChoices = ['Piedra', 'Papel', 'Tijeras'];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    let result = '';

    if (choice === computerChoice) {
      result = 'Empate';
    } else if (
      (choice === 'Piedra' && computerChoice === 'Tijeras') ||
      (choice === 'Papel' && computerChoice === 'Piedra') ||
      (choice === 'Tijeras' && computerChoice === 'Papel')
    ) {
      result = '¡Ganaste!';
    } else {
      result = 'Perdiste :(';
    }

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(result);
  };

  return (
    <div>
      <h1>Piedra, Papel y Tijeras</h1>
      <div>
        <button onClick={() => handleClick('Piedra')}>Piedra</button>
        <button onClick={() => handleClick('Papel')}>Papel</button>
        <button onClick={() => handleClick('Tijeras')}>Tijeras</button>
      </div>
      {playerChoice && computerChoice && (
        <div>
          <p>Tu elección: {playerChoice}</p>
          <p>Elección de la computadora: {computerChoice}</p>
          <p>Resultado: {result}</p>
        </div>
      )}
    </div>
  );
};

export default PiedraPapelTijeras;
