import React, { useState, useEffect } from 'react';

function PrivacyPolicy() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/privacy-policy.html')
      .then(response => response.text())
      .then(html => setHtmlContent(html))
      .catch(error => console.error('Error loading page:', error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default PrivacyPolicy;
