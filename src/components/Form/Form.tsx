import { FormText } from './FormText'

export const Form = () => {
  return (
    <form className="w-fit rounded-lg bg-white shadow-lg">
      <h1>Personal info</h1>
      <p>Please provide your name, email adress, and phone number.</p>
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
    </form>
  )
}
