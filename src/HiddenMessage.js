const HiddenMessage = () => {
    let keyStrokes = [];
    const easterEgg = 'jumbo';
    return(
      document.addEventListener('keydown', (e) => {
        const key = e.key.toLocaleLowerCase();
        keyStrokes.push(key);
        keyStrokes.splice(-easterEgg.length - 1, keyStrokes.length - easterEgg.length);
        if (keyStrokes.join('').includes(easterEgg)) {
          alert('Dingading dang, my dangalong linglong..');
        }
      })
    )
}

export default HiddenMessage;