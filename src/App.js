// App.js

import React from 'react';
import { FcHome } from 'react-icons/fc';
import Form from './components/Form';
import ShareButtons from './ShareButtons';
import Footer from './components/Footer';


function App() {
  const shareUrl = 'https://example.com'; // Replace with your actual URL
  const shareTitle = 'Check out this awesome mortgage / bond calculator!';
  const shareDescription =
    'Calculate your mortgage or bond with this simple and effective calculator.';

  return (
    <div className="App container" style={{ maxWidth: 500, margin: '1rem auto' }}>
      <h1 className="display-5 my-5">
        <FcHome /> Mortgage / Bond Calculator{' '}
      </h1>
      <Form />
      <ShareButtons
        url={shareUrl}
        title={shareTitle}
        description={shareDescription}
      />
            
       <Footer />
    </div>
 
   
  );
}

export default App;
