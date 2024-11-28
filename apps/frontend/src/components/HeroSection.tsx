import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left     px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Encontre o cuidador ideal para quem você ama
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Conectamos famílias a cuidadores qualificados com rapidez e segurança.
          </p>
          <Button className='bg-blue-600 text-white hover:bg-blue-700' size='lg'>Comece Agora</Button>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src="https://medicinasa.com.br/wp-content/uploads/2024/01/idoso-old-negr.jpg"
            alt="Família interagindo com um cuidador"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
