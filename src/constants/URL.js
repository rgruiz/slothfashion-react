/* Para poder manejar distintas URLs en Desarrollo y Produccion */
//const DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://guardame-lugar.azurewebsites.net';

export const DOMAIN = 'http://localhost:4000'

export const URL_ADDPOST = DOMAIN + '/addpost'
export const URL_EDITPOST = DOMAIN + '/editPost'
export const URL_GETPOSTBYID = DOMAIN + '/getpost/'
export const URL_MERCADOPAGO = DOMAIN + '/mercadopago'
export const URL_FILTERTAGS = DOMAIN + '/filterTags/'
export const URL_FILTERPOSTS = DOMAIN + '/filterPosts'
export const URL_POPULARTAGS = DOMAIN + '/mostUsedTags'

export default DOMAIN