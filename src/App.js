import styles from './styles/style.css';

/* Для удобства созданы переменные с символами */
const SYMBOL_X = 'X';
const SYMBOL_O = 'O';

function App() {
  const cells = [null, null, null, SYMBOL_X, SYMBOL_O, SYMBOL_X, null, null, null];

  const currentStep = SYMBOL_O;
  const getSymbol = (symbol) => {
    if (symbol === SYMBOL_O) return "symbol symbol--o";
    if (symbol === SYMBOL_X) return "symbol symbol--x";
    return '';
  }

  const renderSymbol = (symbol) => <span className={`symbol ${getSymbol(symbol)}`}>{symbol}</span>

  return (
      <div className="game">
        <div className="game-info">
          Ход: {renderSymbol(currentStep)}
        </div>
        <div className="game-field">
          {cells.map(symbol => {
            return <button className="cell">{ symbol ? renderSymbol(symbol) : null }</button>
          })}
        </div>
      </div>
  )
}

export default App;
