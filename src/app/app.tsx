import React from 'react';
import { Accordion } from '../../libs/react/components/accordion';

export function App() {
  return (
    <Accordion title="an react accordion">
      <p className="p-3">Styled with CSS Modules.</p>
    </Accordion>
  );
}
