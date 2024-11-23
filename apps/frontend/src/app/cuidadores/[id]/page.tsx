'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

export default function PerfilCuidador() {
  const [cuidador] = useState({
    nome: "Maria Aparecida da Silva",
    idade: 31,
    genero: "mulher",
    endereco: "Niterói, RJ",
    celular: "(21) 99999-9999",
    foto: "/placeholder.svg",
    sobre: "Lorem ipsulum dolor Lorem ipsulum dolor Lorem ipsulum dolor Lorem ipsulum dolor Lorem Lorem ipsulum dolor Lorem ipsulum dolor Lorem ipsulum dolor Lorem ipsulum dolor Lorem ipsulum dolor Lorem ipsulum dolor Lorem ipsulum dolor Lorem ipsulum dolor",
    avaliacoes: [
      { id:1, estrelas: 5, comentario: "Excelente profissional, muito atenciosa e dedicada." },
      { id:2, estrelas: 4, comentario: "Ótima cuidadora, sempre pontual e prestativa." }
    ]
  })

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="p-6">
        <div className="flex gap-4 mb-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={cuidador.foto} alt={cuidador.nome} />
            <AvatarFallback>{cuidador.nome.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">{cuidador.nome}</h1>
            <p className="text-sm text-muted-foreground">{cuidador.idade} anos, {cuidador.genero}</p>
            <p className="text-sm text-muted-foreground">Endereço aproximado: {cuidador.endereco}</p>
            <p className="text-sm text-muted-foreground">Celular: {cuidador.celular}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="flex items-center gap-2 font-semibold mb-2">
            Sobre Maria
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </h2>
          <p className="text-sm text-muted-foreground">{cuidador.sobre}</p>
        </div>

        <Button className="w-full mb-6" size="lg">
          Tenho interesse
        </Button>

        <div>
          <h2 className="font-semibold mb-3">Avaliações de Maria</h2>
          <div className="grid grid-cols-3 gap-4">
            {cuidador.avaliacoes.map((avaliacao) => (
              <div key={avaliacao.id} className="aspect-square bg-gray-100 rounded-lg" />
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}