import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

const useKeyPress = (keys, callback, node = null) => {
  // implement the callback ref pattern
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  // handle what happens on key press
  const handleKeyPress = useCallback(
    (event) => {
      // check if one of the key is part of the ones we want
      if (keys.some((key) => event.key === key)) {
        callbackRef.current(event);
      }
    },
    [keys]
  );

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode = node ?? document;
    // attach the event listener
    targetNode &&
      targetNode.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () =>
      targetNode &&
        targetNode.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress, node]);
};



// const HiddenMessage = () => {
//     let keyStrokes = [];
//     const secret = 'hej';
//     return(
//         document.addEventListener('keydown', (e) => {
//             const key = e.key.toLocaleLowerCase();
//             keyStrokes.push(key);

//             let strokes = keyStrokes.slice(-3);
//             let strokesString = strokes.join('');

//             console.log(strokesString);
//             if (strokesString === secret) {
//                 alert('You found an easter egg!');
//             }
//         })
//     )
// }

// export default HiddenMessage;