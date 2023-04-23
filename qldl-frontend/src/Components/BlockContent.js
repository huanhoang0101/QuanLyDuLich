import React, { useState, useEffect } from 'react';

function BlogBlock(props) {
  const parseHtml = function(htmlString){
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const plainText = doc.documentElement.textContent;
    const shortText = plainText.slice(0, 300);
    return shortText  + " ... ";
  }
  return (
    <>
        {props.value}
    </>
  );
}

export default BlogBlock;