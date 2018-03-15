import React from 'react';
// renderToString on return html string without js
const Home = () => {
  return (
    <div>
      <div>I'm the home component</div>
      <button onClick={ () => console.log('press button in home')}>Press me</button>
    </div>

  );
};


export default Home;
