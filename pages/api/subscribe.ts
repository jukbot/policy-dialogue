import http from 'https'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    externalResolver: true,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body)
    if (!body.email) {
      return res.status(400).json({ message: 'Email is required' })
    }
    addToSendGridContact(body.email, body.name ?? '')
    res.status(200).json({ message: 'success' })
  }
  res.end()
}

const addToSendGridContact = (email: string, name: string) => {
  const options = {
    method: 'PUT',
    hostname: 'api.sendgrid.com',
    path: '/v3/marketing/contacts',
    headers: {
      authorization: 'Bearer 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',
      'content-type': 'application/json',
    },
  }

  const req = http.request(options, function (res) {
    const chunks: Buffer[] = []

    res.on('data', function (chunk) {
      chunks.push(chunk)
    })

    res.on('end', function () {
      Buffer.concat(chunks)
    })
  })

  req.write(
    JSON.stringify({
      list_ids: ['5c0404cb-2bb6-4d83-9c41-d9199dfd5ae8'],
      contacts: [
        {
          email,
          first_name: name?.split(' ')[0],
          last_name: name?.split(' ')[1],
        },
      ],
    })
  )
  req.end()
}
