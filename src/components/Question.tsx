import React from 'react';
import { Question as QuestionType } from '../types';

interface Props {
  question: QuestionType;
  onAnswer: (selected: number) => void;
}

const Question: React.FC<Props> = ({ question, onAnswer }) => (
  <div className="vscode-question">
    <h2>{question.question}</h2>
    <ul>
      {question.options.map((opt, idx) => (
        <li key={idx}>
          <button className="vscode-btn" onClick={() => onAnswer(idx)}>{opt}</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Question;
