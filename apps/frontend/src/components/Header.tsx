import Link from 'next/link'
import { Button } from '@/components/ui/button'
import NotificationPanel from './Notification'

export default function Header() {
  const isLoggedIn = true // temporary for demonstration

  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Acolhe</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Início</Link>
          <Link href="#como-funciona" className="text-gray-600 hover:text-blue-600">Como Funciona</Link>
          <Link href="#encontrar-cuidador" className="text-gray-600 hover:text-blue-600">Encontrar Cuidador</Link>
          <Link href="#para-cuidadores" className="text-gray-600 hover:text-blue-600">Para Cuidadores</Link>
          <Link href="#contato" className="text-gray-600 hover:text-blue-600">Contato</Link>
        </nav>
        <div className="flex items-center space-x-2">
          {isLoggedIn ? (
            <>
              <NotificationPanel />
              <Button variant="outline">Minha Conta</Button>
            </>
          ) : (
            <>
              <Button variant="outline">Login</Button>
              <Button className='bg-blue-600 text-white hover:bg-blue-700'>Cadastro</Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}