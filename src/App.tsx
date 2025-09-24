import React from 'react';
import Game from './components/Game';
import './theme/vscodeTheme';

const App: React.FC = () => (
  <div className="vscode-app">
    <header className="vscode-header">
      <h1>VS Code Dev Days Quiz Game</h1>
    </header>
    <main>
      <Game />
    </main>
  </div>
);

export default App;
