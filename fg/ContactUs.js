import React, { useState, useEffect } from 'react';

function ContactUS() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/Contact-Us.html')
      .then(response => response.text())
      .then(html => setHtmlContent(html));
  }, []);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

export default ContactUS;