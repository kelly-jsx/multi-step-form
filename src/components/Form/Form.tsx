import { Step } from 'components/Header/Step'
import React from 'react'

import sidebarDesktop from './../../public/bg-sidebar-desktop.svg'

type Props = {
  title: string
  description: string
  children: React.ReactNode
  steps: []
  curr: number
}

export const Form = ({ title, description, children, steps, curr }: Props) => {
  return (
    <form className="flex w-full rounded-lg bg-white px-6 py-8 text-blue-marine shadow-lg lg:gap-6">
      <div className="hidden h-full w-max rounded-md lg:flex">
        <img src={sidebarDesktop} alt="" className="" />
        <figcaption className="absolute flex flex-col gap-8 p-6">
          {steps.map((description: string, index: number) => (
            <Step
              step={index + 1}
              key={index}
              currentStep={index == curr - 1}
              description={description}
            />
          ))}
        </figcaption>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 lg:p-12">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-cool">{description}</p>
          {children}
        </div>
        <div className="hidden h-full items-end px-12 lg:flex">
          <div className="flex w-full items-center justify-between">
            <p>Go Back</p>
            <button className="rounded-md bg-blue-marine p-3 text-white transition duration-300 ease-in-out hover:bg-blue-purplish">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
