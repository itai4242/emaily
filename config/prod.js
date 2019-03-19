// module.expport = {
//   GOOGLECLIENT_ID : '689943943189-4lhqjoh1eib0k28es2nog0mc80rok804.apps.googleusercontent.com',
//   GOOGLE_CLIENT_SECRET:'FZKasMZbR_G3lpNKA1QYTV3n'
// }
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
}

// module.exports = {
//   googleClientID: '452594227698-s1sccoqora6onvk1p3rl2p4ij8506qi7.apps.googleusercontent.com',
//   googleClientSecret: ' dhWWyDlSpPvSlLDWJYE-4Vi5',
//   mongoURI: 'mongodb://itai:itai30@ds117816.mlab.com:17816/emaily-prod',
//   cookieKey: 'avnqrnqotbnlqtnbtqbolanvlrqgdfgghhhfdcvhtfdh'
// }
