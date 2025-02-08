import React, { useState, useEffect } from 'react';

function TermsandConditions() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/Term-and-Conditions.html')
      .then(response => response.text())
      .then(html => setHtmlContent(html));
  }, []);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

export default TermsandConditions;