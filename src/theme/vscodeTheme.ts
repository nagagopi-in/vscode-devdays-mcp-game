// VS Code-inspired theme styles
const style = document.createElement('style');
style.innerHTML = `
  body {
    background: #1e1e1e;
    color: #d4d4d4;
    font-family: 'Segoe UI', 'sans-serif';
  }
  .vscode-app {
    max-width: 600px;
    margin: 2rem auto;
    background: #252526;
    border-radius: 8px;
    box-shadow: 0 2px 8px #0008;
    padding: 2rem;
  }
  .vscode-header {
    background: #007acc;
    color: #fff;
    padding: 1rem;
    border-radius: 6px 6px 0 0;
    margin-bottom: 2rem;
    text-align: center;
  }
  .vscode-game {
    text-align: center;
  }
  .vscode-question h2 {
    color: #569cd6;
  }
  .vscode-btn {
    background: #007acc;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
  }
  .vscode-btn:hover {
    background: #005a9e;
  }
`;
document.head.appendChild(style);
