import { messageArrayValidator } from '@/lib/validations/message'
import { fetchRedis } from './redis'
import { notFound } from 'next/navigation'

export async function getChatMessages(chatId: string) {
  try {
    const results: string[] = await fetchRedis(
      'zrange',
      `chat:${chatId}:messages`,
      0,
      -1
    )

    // Note: don't use `{ }` in `()=>` or add return
    const dbMessages = results.map((message) => JSON.parse(message) as Message)

    const reversedDbMessages = dbMessages.reverse()

    const messages = messageArrayValidator.parse(reversedDbMessages)

    return messages
  } catch (error) {
    console.log(error)
    notFound()
  }
}
