import React from 'react'
import Historial from '../components/Historial/Historial'
import ChequearCookie from '../components/Cookies/ChequearCookie'

class HistorialPage extends React.Component {
  render() {
    const historialPage =  <Historial/>
    return (ChequearCookie(historialPage, '/'));
  }
}

export default HistorialPage