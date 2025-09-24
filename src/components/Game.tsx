import React, { useState } from 'react';
import Question from './Question';
import { Question as QuestionType, GameState } from '../types';
import useMCP from '../mcp/useMCP';

const questions: QuestionType[] = [
  {
    id: 1,
    question: 'What is MCP in VS Code context?',
    options: ['Model Context Protocol', 'Main Code Process', 'Module Component Pattern', 'Modern Coding Practice'],
    answer: 0,
  },
  {
    id: 2,
    question: 'Which language is this quiz game built with?',
    options: ['JavaScript', 'TypeScript', 'Python', 'Go'],
    answer: 1,
  },
];

const initialState: GameState = {
  current: 0,
  score: 0,
  completed: false,
};

const Game: React.FC = () => {
  const [state, setState] = useState(initialState);
  const { logEvent } = useMCP();

  const handleAnswer = (selected: number) => {
    const correct = questions[state.current].answer === selected;
    logEvent('answer', { questionId: questions[state.current].id, correct });
    setState((prev) => {
      const next = prev.current + 1;
      return {
        current: next,
        score: prev.score + (correct ? 1 : 0),
        completed: next >= questions.length,
      };
    });
  };

  if (state.completed) {
    return (
      <div className="vscode-game">
        <h2>Quiz Complete!</h2>
        <p>Your score: {state.score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <Question
      key={questions[state.current].id}
      question={questions[state.current]}
      onAnswer={handleAnswer}
    />
  );
};

export default Game;
