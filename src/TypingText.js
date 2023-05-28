import React, { useState, useEffect } from 'react';

const TypingText = () => {
  const words = ['Developer', 'Pythonist', 'Decision-Maker', 'Fast Learner'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 120);

    if (!reverse && subIndex === words[index].length + 1 ) {
      setTimeout(() => {
        setReverse(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prevIndex) => prevIndex === words.length - 1 ? 0 : prevIndex + 1);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <h2>
      I'm a <span>{`${words[index].substring(0, subIndex)}${subIndex === words[index].length && !reverse ? '' : ''}`}</span>
    </h2>
  );
};

export default TypingText;