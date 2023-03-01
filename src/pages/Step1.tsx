import { Form } from 'components/Form/Form'
import { FormText } from 'components/Form/FormText'

export const Step1 = () => {
  return (
    <Form
      title="Personal info"
      description="Please provide your name, email adress, and phone number."
    >
      <FormText
        iType="text"
        iLabel="Name"
        iName="name"
        iPlaceholder="e.g. Stephen King"
      />
      <FormText
        iType="email"
        iLabel="Email Address"
        iName="email"
        iPlaceholder="e.g. stephenking@lorem.com"
      />
      <FormText
        iType="tel"
        iLabel="Phone Number"
        iName="phone"
        iPlaceholder="e.g. +1 234 567 890"
      />
    </Form>
  )
}
