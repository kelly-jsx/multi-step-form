import { AddonsSelect } from 'components/Form/AddonsSelect'
import { Form } from 'components/Form/Form'
import { useState } from 'react'

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

export const Step3 = () => {
  const [showYearly, setShowYearly] = useState(false)

  return (
    <Form
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      {Object.keys(addons).map((addonKey) => {
        const addon = addons[addonKey]
        return (
          <AddonsSelect
            key={addonKey}
            title={addon.title}
            description={addon.description}
            price={`$${
              showYearly ? addon.price * 10 + '/yr' : addon.price + '/mo'
            }`}
            yearly={showYearly}
          />
        )
      })}
    </Form>
  )
}
