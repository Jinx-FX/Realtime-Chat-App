import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

const page = async ({}) => {
  const session = await getServerSession(authOptions)

  return (
    <ul>
      {session ? (
        <>
          <li>{session.user.id}</li>
          <li>{session.user.name}</li>
          <li>{session.user.email}</li>
          <li>{session.user.image}</li>
        </>
      ) : (
        <li>Nothing to show</li>
      )}
    </ul>
  )
}

export default page
