import jwt from 'jsonwebtoken';

function createToken (id: string): string {
  return jwt.sign({ id }, "pls remember to send to envs" as string, { //TODO set as env
    expiresIn: 60 * 60 * 24 * 7,
  })
}

export {
  createToken
}