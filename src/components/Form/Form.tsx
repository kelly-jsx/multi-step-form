import React from 'react'
import { FormText } from './FormText'

type Props = {
  title: string
  description: string
  children: React.ReactNode
}

export const Form = ({ title, description, children }: Props) => {
  return (
    <form className="flex w-full flex-col gap-4 rounded-lg bg-white px-6 py-8 text-blue-marine shadow-lg">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-cool">{description}</p>
      {children}
    </form>
  )
}
