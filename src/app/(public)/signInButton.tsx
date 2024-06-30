import { UserMenu } from "@/components/user-menu"
import Cookies from 'js-cookie'

export const SignInButton = ({ user }: any) => {
  const token = Cookies.get('token') || '';

  return (token && user) ? 
  <UserMenu user={user.data} /> : 
  (
    <li className="mt-2 lg:mt-0">
      <a
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        href="/entrar"
      >
        Entrar
      </a>
    </li>
  )
}
