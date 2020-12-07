import React from 'react';
import './answer-item.styles.scss';

function AnswerItem({ label, answer }) {
  return (
    <div className="answer-item">
      <p>{label}:</p>
      <span>
        <span> --&gt; </span>
        {answer}
      </span>
    </div>
  );
}

export default AnswerItem;
