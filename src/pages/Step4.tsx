import { AddonsSelect } from 'components/Form/AddonsSelect'
import { Form } from 'components/Form/Form'
import { SummaryAddon } from 'components/Form/SummaryAddon'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const addons = {
  online: {
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: 1
  },
  storage: {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2
  },
  custom: {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2
  }
}

type Props = {
  steps: string[]
}

export const Step4 = ({ steps }: Props) => {
  const [showYearly, setShowYearly] = useState(false)

  const userOptions = {
    plan: {
      name: 'Arcade',
      price: 9
    },
    addons: [
      {
        online: {
          name: 'Online service',
          price: 1
        },
        storage: {
          name: 'Larger storage',
          price: 2
        }
      }
    ]
  }

  const addonsTotal = userOptions.addons.reduce((total, addonGroup) => {
    return (
      total +
      Object.keys(addonGroup).reduce((groupTotal, addonKey) => {
        return groupTotal + addonGroup[addonKey].price
      }, 0)
    )
  }, 0)

  const totalPrice = userOptions.plan.price + addonsTotal

  return (
    <Form
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
      steps={steps}
      curr={4}
    >
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-col  gap-2 rounded-lg bg-mangolia p-4">
          <div className="flex items-center justify-between border-b-2 pb-4">
            <div className="flex flex-col">
              <p className="font-bold">
                {userOptions.plan.name} ({showYearly ? 'Yearly' : 'Monthly'})
              </p>
              <Link
                to={'/'}
                className="underline transition duration-200 ease-in-out hover:text-blue-purplish"
              >
                Change
              </Link>
            </div>
            <p className="font-bold">
              $
              {showYearly
                ? userOptions.plan.price * 10 + '/yr'
                : userOptions.plan.price + '/mo'}
            </p>
          </div>
          {userOptions.addons.map((addonGroup, index) => (
            <div key={index}>
              {Object.keys(addonGroup).map((addonKey) => (
                <SummaryAddon
                  key={addonKey}
                  name={addons[addonKey].title}
                  price={`+$${
                    showYearly
                      ? addonGroup[addonKey].price * 10 + '/yr'
                      : addonGroup[addonKey].price + '/mo'
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between p-4">
          <p className="text-gray-cool">
            Total (per {showYearly ? 'year' : 'month'})
          </p>
          <p className="text-lg font-bold text-blue-purplish">
            {showYearly ? `+$${totalPrice * 10}/yr` : `+${totalPrice}/mo`}
          </p>
        </div>
      </div>
    </Form>
  )
}
