import React from 'react';
import '../style.css';

function DefinitionList({ definitions }) {
  return (
    <div className="definition-list">
      <ul>
        {definitions.map((definition, index) => (
          <li key={index} className="definition-item">
            {definition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DefinitionList;
