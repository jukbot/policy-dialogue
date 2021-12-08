import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.body === 'PING\u0000') {
    // TODO: track here
    console.log(req.query?.path)
    res.status(200).json({ message: 'PONG' })
  }
  res.end()
}
