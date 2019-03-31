const env = process.env.NODE_ENV || 'dev'

const config  = () => {
  switch(env) {
    case 'dev': 
      return {
        bd_string: 'mongodb+srv://usuario_admin:12345@cluster0-avzlp.mongodb.net/test?retryWrites=true',
        jwt_pass: 'senhasuperfoda',
        jwt_expires_in: '7d'
      }
    case 'hml':
      return {
        bd_string: 'mongodb+srv://usuario_admin:12345@cluster0-avzlp.mongodb.net/test?retryWrites=true',
        jwt_pass: 'senhasuperfoda',
        jwt_expires_in: '7d'
      }
    case 'prod': 
      return {
        bd_string: 'mongodb+srv://usuario_admin:12345@cluster0-avzlp.mongodb.net/test?retryWrites=true',
        jwt_pass: 'senhasuperfoda',
        jwt_expires_in: '7d'
      }
  }
}

module.exports = config()