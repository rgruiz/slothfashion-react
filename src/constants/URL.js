/* Para poder manejar distintas URLs en Desarrollo y Produccion */
//const DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://guardame-lugar.azurewebsites.net';

const DOMAIN = 'http://localhost:4000'

export const URL_ADDPOST = DOMAIN + '/addpost'