import { useState } from 'react';

export default function ReadMore({ content, defaultSize }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {readMore ? content : content?.slice(0, defaultSize)}
      {content?.length > defaultSize && (
        <>
          ...
          <button
            className='read-more link'
            onClick={() => setReadMore((prev) => !prev)}
          >
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </>
      )}
    </>
  );
}
