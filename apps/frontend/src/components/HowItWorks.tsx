import { UserPlus, Search, MessageCircle, Star } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: UserPlus, title: 'Cadastro', description: 'Crie seu perfil familiar ou de cuidador.' },
    { icon: Search, title: 'Busca Personalizada', description: 'Filtre cuidadores por localização, especialidade e disponibilidade.' },
    { icon: MessageCircle, title: 'Contato Direto', description: 'Converse e contrate via WhatsApp.' },
    { icon: Star, title: 'Avaliação', description: 'Deixe e consulte feedbacks para maior segurança.' },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <step.icon className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

