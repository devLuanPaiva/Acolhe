'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'
import { toast } from '@/hooks/use-toast'

export default function CadastroPage() {
  const [isCuidador, setIsCuidador] = useState(true)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    celular: '',
    endereco: '',
    especialidade: '',
    condicaoPaciente: '',
    detalhesAdicionais: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.senha !== formData.confirmarSenha) {
        toast({
            title: 'Erro na validação',
            description: 'As senhas não correspondem. Por favor, verifique e tente novamente.',
            variant: 'destructive',
        })
        return
    }
    console.log('Cadastro', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Cadastro no Acolhe</CardTitle>
          <CardDescription className="text-center">
            Crie sua conta para começar a usar a plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <Button
                type="button"
                variant="outline"
                className={`flex-1 ${
                  isCuidador ? 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setIsCuidador(true)}
              >
                Sou cuidador
              </Button>
              <Button
                type="button"
                variant="outline"
                className={`flex-1 ${
                  !isCuidador ? 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setIsCuidador(false)}
              >
                Busco cuidador
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nome">Nome completo</Label>
              <Input 
                id="nome" 
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input 
                id="senha" 
                name="senha"
                type="password"
                value={formData.senha}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmarSenha">Confirmar senha</Label>
              <Input 
                id="confirmarSenha" 
                name="confirmarSenha"
                type="password"
                value={formData.confirmarSenha}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="celular">Celular (WhatsApp)</Label>
              <Input 
                id="celular" 
                name="celular"
                type="tel"
                value={formData.celular}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço completo</Label>
              <Input 
                id="endereco" 
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                required 
              />
            </div>

            {isCuidador ? (
              <div className="space-y-2">
                <Label htmlFor="especialidade">Especialidade</Label>
                <Select onValueChange={handleSelectChange('especialidade')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione sua especialidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="parcialmente">Parcialmente dependente</SelectItem>
                    <SelectItem value="totalmente">Totalmente dependente</SelectItem>
                    <SelectItem value="independente">Não é dependente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="condicaoPaciente">Condição do paciente</Label>
                  <Select onValueChange={handleSelectChange('condicaoPaciente')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a condição" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="parcial">Parcialmente dependente</SelectItem>
                      <SelectItem value="total">Totalmente dependente</SelectItem>
                      <SelectItem value="independente">Não é dependente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="detalhesAdicionais">Detalhes adicionais do paciente (opcional)</Label>
                  <Textarea 
                    id="detalhesAdicionais" 
                    name="detalhesAdicionais"
                    value={formData.detalhesAdicionais}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}

            {isCuidador && (
              <div className="space-y-2">
                <Label htmlFor="referencias">Referências e experiência</Label>
                <Input 
                  id="referencias" 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                />
                <p className="text-sm text-gray-500">Faça upload de certificados ou documentos relevantes</p>
              </div>
            )}

            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 hover:text-white">Concluir cadastro</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-sm text-center text-gray-600 mt-4">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Faça login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}