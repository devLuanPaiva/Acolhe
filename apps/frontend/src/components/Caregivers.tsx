import { Button } from '@/components/ui/button'

export default function CaregiversSection() {
  return (
    <section className="py-10 px-6 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Você é cuidador? Junte-se a nós!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Cadastre-se gratuitamente, encontre oportunidades de trabalho e faça parte de uma rede confiável.
        </p>
        <Button size="lg" variant="secondary">Quero me cadastrar</Button>
      </div>
    </section>
  )
}