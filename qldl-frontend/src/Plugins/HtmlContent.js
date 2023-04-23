import React from 'react';

function parseHTML(html) {
  return { __html: html };
}

function HTMLContent({ html }) {
  return <div dangerouslySetInnerHTML={parseHTML(html)} />;
}

export default HTMLContent;