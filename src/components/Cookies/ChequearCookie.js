import Cookies from 'universal-cookie'
import RecuperarCookie from './RecuperarCookie'

const ChequearCookie = (salida, landing_redirect) => {
    const cookies = new Cookies();
  
    const timeout = cookies.get('timeout');
    const cookie = RecuperarCookie();

    if (cookie === undefined || cookie === null || timeout === undefined) {
        return window.location = landing_redirect
    } else {
        return salida
    }

}

export default ChequearCookie