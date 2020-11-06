import SimpleCrypto from "simple-crypto-js"
import { SecretKey } from '../../constants/SecretKey'

const EncryptData = (value) => {
  const simpleCrypto = new SimpleCrypto({ SecretKey })
  const encriptedData = simpleCrypto.encrypt(value)

  var formattedData = encriptedData.replace(/\+/g, 'p1L2u3S').replace(/\//g, 's1L2a3S4h').replace(/=/g, 'e1Q2u3A4l');

  return formattedData

}

export default EncryptData