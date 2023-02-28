import { FormText } from './FormText'

export const Form = () => {
  return (
    <form className="flex w-fit flex-col gap-4 rounded-lg bg-white px-6 py-8 text-blue-marine shadow-lg">
      <h1 className="text-2xl font-bold">Personal info</h1>
      <p className="text-gray-cool">
        Please provide your name, email adress, and phone number.
      </p>
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
