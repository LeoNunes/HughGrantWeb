import React, { useRef } from 'react';
import { ReactEpubViewer } from 'react-epub-viewer';
import './Reader.css';

export default () => {
  const viewerRef = useRef(null);

  return (
    <div className='Reader-Container'>
      <ReactEpubViewer
        url='/ebooks/pg67098-images.epub'
        ref={viewerRef}
      />
    </div>
  );
}
