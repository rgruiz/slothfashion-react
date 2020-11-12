import { cookieName } from '../../constants/Cookie'
import Cookies from 'universal-cookie'
import SimpleCrypto from "simple-crypto-js"
import { SecretKey } from '../../constants/SecretKey'

/* recupera la cookie encriptada y la desencripta */

const RecuperarCookie = () => {
  const cookies = new Cookies();
  const encryptedCookie = cookies.get(cookieName);
  const simpleCrypto = new SimpleCrypto({ SecretKey })
  var cookie = undefined

  if (encryptedCookie !== undefined) {
    try {
      cookie = simpleCrypto.decrypt(encryptedCookie)
    }
    catch (error) {
      (window.location.pathname === '/login') &&
      alert("Hay un problema con la información de la cookie. Por favor logueate nuevamente.")
    }
  }

  return cookie

}

export default RecuperarCookie