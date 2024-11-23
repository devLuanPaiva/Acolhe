import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400">Sobre Nós</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Política de Privacidade</Link></li>
            </ul>
          </div>
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            </div>
          </div>
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p>Email: contato@acolhe.com</p>
            <p>Telefone: (11) 1234-5678</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Acolhe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}