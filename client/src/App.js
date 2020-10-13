import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Introduction from './components/Introduction'
import Banner from './components/Banner'

function App() {
  const deepFocus = <h2 className="banner-general-inside">Deep <span className="bold-test">Focus</span></h2>
  const designingFuture = <h2 className="banner-general-inside">Designing Your <span className="bold-test">Future</span></h2>
  const structureRythmBalance = <h2 className="banner-general-inside"><span className="bold-test">Structure</span> | Rythm | Balance</h2>

  return (
    <div>
      <NavBar />
      <Introduction />
      <Banner caption={deepFocus}/>
      <Banner caption={designingFuture} />
      <Banner caption={structureRythmBalance} />
    </div>
  );
}

export default App;
