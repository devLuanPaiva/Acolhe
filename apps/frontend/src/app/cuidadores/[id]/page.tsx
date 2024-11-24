'use client'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export default function PerfilCuidador() {
  const match: "pending" | "aceito" | "rejeitado" = "pending"
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
    <div className='container mx-auto flex flex-col gap-8 py-12 px-4 max-w-4xl'>
      <div className='flex gap-8 flex-col md:flex-row items-center md:items-start'>
        <div className='text-center'>
          <Avatar className="w-40 h-40 border-4 border-white shadow-lg">
            <AvatarImage src={cuidador.foto} alt={cuidador.nome} />
            <AvatarFallback className="text-3xl">{cuidador.nome.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className='mt-4 text-yellow-500 text-lg'>⭐⭐⭐⭐⭐</p>
        </div>
        <div className='flex-1 text-center md:text-left space-y-3'>
          <h1 className='text-3xl font-bold text-gray-800'>{cuidador.nome}</h1>
          <p className='text-lg text-muted-foreground'>{cuidador.idade} anos, {cuidador.genero}</p>
          <p className='text-muted-foreground flex items-center justify-center md:justify-start gap-2'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {cuidador.endereco}
          </p>
          <p className='text-muted-foreground flex items-center justify-center md:justify-start gap-2'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {match === "pending" ? "Celular disponível após match" : cuidador.celular}
          </p>
        </div>
      </div>

      <div className='bg-white rounded-xl shadow-sm p-6 space-y-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Sobre {cuidador.nome.split(" ")[0]}</h2>
        <p className='text-gray-600 leading-relaxed'>{cuidador.sobre}</p>
        <Button className='mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full'>
          Tenho interesse
        </Button>
      </div>

      <div>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Avaliações</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {cuidador.avaliacoes.map((avaliacao) => (
            <div 
              key={avaliacao.id} 
              className='bg-white rounded-xl shadow-sm p-6 space-y-3 hover:shadow-md transition-shadow'
            >
              <p className='text-yellow-500 text-lg'>{'⭐️'.repeat(avaliacao.estrelas)}</p>
              <p className='text-gray-600'>{avaliacao.comentario}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}