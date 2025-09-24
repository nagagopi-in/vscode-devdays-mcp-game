# VS Code Dev Days MCP Game – Project Documentation

## Overview
This project is a modern, modular quiz game inspired by VS Code Dev Days themes. It demonstrates MCP-style architecture using React and TypeScript, making it easy to extend and integrate with future MCP services.

## Key Features
- **VS Code–inspired UI:** Colors, fonts, and accents match VS Code for a familiar look.
- **MCP Modular Design:** The code is organized for easy extension and future MCP integration.
- **Multiple Choice Quiz:** A simple, interactive quiz game foundation.
- **Ready for GitHub Pages:** Automated deployment for instant sharing.

## Architecture
```
vscode-devdays-mcp-game/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Game.tsx         # Main game logic and state
│   │   └── Question.tsx    # Renders individual questions
│   ├── mcp/
│   │   └── useMCP.ts       # Simulated MCP event logging
│   ├── theme/
│   │   └── vscodeTheme.ts  # VS Code-inspired styles
│   ├── App.tsx             # App entry point
│   ├── index.tsx           # React DOM rendering
│   └── types.ts            # TypeScript types
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── PROJECT_DOCUMENTATION.md
```

## System Flow (UML Diagram)
Below is a simple UML diagram showing the flow of the quiz game and MCP event logging:

```
+-------------------+
|      App.tsx      |
+-------------------+
          |
          v
+-------------------+
|    Game.tsx       |
+-------------------+
          |
          v
+-------------------+
|  Question.tsx     |
+-------------------+
          |
          v
+-------------------+
|   useMCP.ts       |
| (logEvent)        |
+-------------------+
```

- **App.tsx**: Renders the main game UI.
- **Game.tsx**: Manages game state, handles answers, and calls MCP logging.
- **Question.tsx**: Displays questions and options, triggers answer events.
- **useMCP.ts**: Simulates MCP event logging (could be extended to real MCP server).

## MCP Integration
The `useMCP` hook is a placeholder for future MCP context server integration. Currently, it logs events to the console, but it can be extended to:
- Send analytics to a backend
- Share state/context with other extensions
- Enable collaborative or adaptive quiz features

## Deployment
- Uses `gh-pages` for automated deployment to GitHub Pages.
- The `homepage` field in `package.json` ensures correct asset paths.

## Extending the Project
- Add more questions by editing the array in `Game.tsx`.
- Enhance MCP logic in `useMCP.ts` for real context server communication.
- Customize styles in `theme/vscodeTheme.ts`.

---

*This project was created and deployed solely by GitHub Copilot.*
