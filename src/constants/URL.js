/* Para poder manejar distintas URLs en Desarrollo y Produccion */
export const DOMAIN = process.env.NODE_ENV === 'production' ? 'https://slothfashion-node.herokuapp.com' : 'http://localhost:4000'

export const URL_ADDPOST = DOMAIN + '/addpost'
export const URL_EDITPOST = DOMAIN + '/editPost'
export const URL_GETPOSTBYID = DOMAIN + '/getpost/'
export const URL_MERCADOPAGO = DOMAIN + '/mercadopago'
export const URL_FILTERTAGS = DOMAIN + '/filterTags/'
export const URL_FILTERPOSTS = DOMAIN + '/filterPosts'
export const URL_POPULARTAGS = DOMAIN + '/mostUsedTags'
export const URL_HACERCOMPRA = DOMAIN + '/hacerCompra'
export const URL_LOGIN = DOMAIN + '/logIn'
export const URL_GETPUBLICATION = DOMAIN + '/getpublicaciones'
export const URL_MPCHECK = DOMAIN + '/mpCheck'
export const URL_SIGNUP = DOMAIN + '/signUp'
export const URL_HISTORIAL = DOMAIN + '/getHistorial/'
export const URL_COMENTARIOS = DOMAIN + '/hacerComentario'
export const URL_AWSFILES = process.env.NODE_ENV === 'production' ? 'https://slothfashionreact.s3-sa-east-1.amazonaws.com/' : 'https://slothfashionreactpre.s3-sa-east-1.amazonaws.com/'
export default DOMAIN