import type { User } from 'firebase/auth'

export default function () {
  const user = useState<User | null>('useFirebaseAuthUser', () => null)

  return {
    user,
  }
}