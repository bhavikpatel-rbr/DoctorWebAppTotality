import { EncryptStorage } from 'encrypt-storage'

export const encryptStorage = new EncryptStorage(`${process.env.REACT_APP_ENCRYPTSTORAGE_SECRET_KEY}`, {
  prefix: '@secure',
});