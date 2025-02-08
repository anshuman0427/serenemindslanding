import React, { useState, useEffect } from 'react';

function RefundandCancellation() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/Refund-and-Cancellation.html')
      .then(response => response.text())
      .then(html => setHtmlContent(html));
  }, []);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

export default RefundandCancellation;