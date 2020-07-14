'use strict'

import pako from 'pako'
import jwtDecode from 'jwt-decode'
import libbase64 from 'libbase64'

const jwt = {
  isObject (val) {
    return Boolean(val && typeof val === 'object' && Object.keys(val).length)
  },

  checkCompressType (header) {
    const base64Decode = JSON.parse(libbase64.decode(header))
    return this.isObject(base64Decode) && base64Decode.zip ? base64Decode.zip : null
  },

  inflateToken (body) {
    const base64Decode = libbase64.decode(body)
    const jwtDecode = pako.inflate(base64Decode, { to: 'string' })
    return JSON.parse(jwtDecode)
  },

  decode (token) {
    try {
      const [header, body] = token.split('.')
      const compressType = this.checkCompressType(header)
      return compressType === 'DEF' ? this.inflateToken(body) : jwtDecode(token)
    } catch (err) {
      return new Error(err)
    }
  }
}

export default jwt