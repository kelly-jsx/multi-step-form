import { Form } from 'components/Form/Form'
import { FormText } from 'components/Form/FormText'
import { PlanSelect } from 'components/Form/PlanSelect'

import arcade from '../public/icon-arcade.svg'
import advanced from '../public/icon-advanced.svg'
import pro from '../public/icon-pro.svg'
import { useState } from 'react'

const plans = {
  arcade: {
    title: 'arcade',
    price: 9,
    icon: arcade
  },
  advanced: {
    title: 'advanced',
    price: 12,
    icon: advanced
  },
  pro: {
    title: 'pro',
    price: 15,
    icon: pro
  }
}

type Props = {
  steps: string[]
}

export const Step2 = ({ steps }) => {
  const [showYearly, setShowYearly] = useState(false)
  return (
    <Form
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
      steps={steps}
      curr={2}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">
        {Object.keys(plans).map((planKey) => {
          const plan = plans[planKey]
          return (
            <PlanSelect
              key={planKey}
              imgUrl={plan.icon}
              title={plan.title}
              price={`$${
                showYearly ? plan.price * 10 + '/yr' : plan.price + '/mo'
              }`}
              yearly={showYearly}
            />
          )
        })}
      </div>
      <div className="mt-6 flex justify-center gap-4 lg:gap-6">
        <p
          className={`font-bold ${
            showYearly ? 'text-gray-cool' : 'text-blue-marine'
          }`}
        >
          Monthly
        </p>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value=""
            className="peer sr-only"
            onChange={() => setShowYearly(!showYearly)}
          />
          <div className="peer-focus:ring-blue-300dark:peer-focus:ring-blue-800 peer h-6 w-11 rounded-full bg-blue-marine after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
        </label>
        <p
          className={`font-bold ${
            showYearly ? 'text-blue-marine' : 'text-gray-cool'
          }`}
        >
          Yearly
        </p>
      </div>
    </Form>
  )
}
