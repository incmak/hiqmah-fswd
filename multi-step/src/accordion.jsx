import { useState } from 'react';

export default function Accordion({
  title,
  //   content,
  //   emoji,
  //   emojiPosition,
  //   list,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='accordion'>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && (
        <div>
          {children}
          {/* {emojiPosition === 'left' && emoji} {content}{' '}
          {emojiPosition === 'right' && emoji}
          {list} */}
        </div>
      )}
    </div>
  );
}
