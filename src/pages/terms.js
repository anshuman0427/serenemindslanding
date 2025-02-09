import React, { useState, useEffect } from 'react';

function TermsOfUse() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/Term-and-Conditions.html')
      .then(response => response.text())
      .then(html => setHtmlContent(html))
      .catch(error => console.error('Error loading page:', error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default TermsOfUse;
