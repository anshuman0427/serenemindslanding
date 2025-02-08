import React, { useState, useEffect } from 'react';

function ShippingPolicy() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/Shipping-Policy.html')
      .then(response => response.text())
      .then(html => setHtmlContent(html));
  }, []);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

export default ShippingPolicy;