import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import FourKIcon from '@material-ui/icons/FourK';

function App() {
  const [clients, setClients] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/client")
      .then(res => res.json())
      .then(json => setClients(json))
  }, [])
  return (
    <div>
      {clients.map(c => (
        <div>
          <Button variant="contained">
            {c.email} <FourKIcon color="primary" />
          </Button>
        </div>
      ))}

    </div>
  );
}

export default App;
