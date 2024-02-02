import React, { useState } from 'react';
import UrlBox from './Componentes/url_box';
import Qr from './Componentes/qr';

const App = () => {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const [page, setPage] = useState(true);
  const [error, setError] = useState('');

  const generate = async () => {
    try {
      const response = await fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${url}!&size=210x210&bgcolor=white`);

      if (!response.ok) {
        throw new Error('Failed to generate QR code');
      }

      const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);

    setQr(imageUrl);
    setError('');
    setPage(!page);
    } catch (error) {
      setError('Error generating QR code');
      console.error(error);
    }
  };

  return (
    <div className='QR_app'>
      <div className='bg_svg'></div>
      {page ? <UrlBox setUrl={setUrl} url={url} generate={generate} /> : <Qr qr={qr} />}
    </div>
  );
};

export default App;
