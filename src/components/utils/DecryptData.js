import SimpleCrypto from "simple-crypto-js"
import { SecretKey } from '../../constants/SecretKey'

const DecryptData = (value) => {
  const simpleCrypto = new SimpleCrypto({ SecretKey })
  const ciphertext = value.replace(/p1L2u3S/g, '+').replace(/s1L2a3S4h/g, '/').replace(/e1Q2u3A4l/g, '=');
  const decrypttedData = simpleCrypto.decrypt(ciphertext)
  
  return decrypttedData

}

export default DecryptData