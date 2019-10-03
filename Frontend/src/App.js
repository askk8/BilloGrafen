import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <table style={{
        backgroundColor: '#000',
        display: 'block',
        color: '#fff',
        paddingLeft: 16
      }}>
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width="90" src="Uggla2.PNG"/>
            </td>
            <td>
              <h1>BilloGrafen</h1>
            </td>
            <td width="30"/>
            <td>
              <h3>Filmer</h3>
            </td>
            <td width="30"/>
            <td>
              <h3>Medlem</h3>
            </td>
            <td width="30"/>
            <td>
              <h3> Lolol</h3>
            </td>
            <td width="30"/>
            <td>
             <h3>Om Oss</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
