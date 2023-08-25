import jwt from 'jsonwebtoken';

function createToken (id: string): string {
  return jwt.sign({ id }, process.env.JWT_SECRET || '', {
    expiresIn: 60 * 60 * 24 * 7,
  })
}

export {
  createToken
}