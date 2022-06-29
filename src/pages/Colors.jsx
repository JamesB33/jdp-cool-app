

function Colors({rainbow, colorIndex, setColorIndex}) {
  
  
  const colorSelector = () => {
    if (colorIndex === rainbow.length - 1) {
      setColorIndex(0);
      return;
    }
    setColorIndex(colorIndex + 1);
  };
 
  return (
    <div className='colors' style={{ backgroundColor: `${rainbow[colorIndex]}`, height: '100vh' }}>
      <p style={{color: `${rainbow[colorIndex - 1]}`}}>Colors</p>
      <button style={{backgroundColor: `${rainbow[colorIndex + 1]}`}} onClick={() => colorSelector()}>see the rainbow</button>
    </div>
  );
}

export default Colors;
