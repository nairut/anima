import React, { useEffect, useState } from 'react';

function HTMLComponent() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        const response = await fetch('/file.html');
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML file:', error);
      }
    };

    fetchHtml();
  }, []);

  return (
    <div>
      <h2>My App</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default HTMLComponent;
