import { getChatMessages } from '@/helpers/get-chat-messages'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { chatId }: { chatId: string } = await req.body
      const messages = await getChatMessages(chatId)

      res.status(200).json(messages)
    } catch (error) {
      console.log(error)

      res.status(500).json({ message: 'Getting comments failed.' })
    }
  }
  // res.status(200).json({ test: 'hello' })
}
