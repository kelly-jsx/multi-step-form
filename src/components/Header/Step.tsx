type Props = {
  step: number
  currentStep?: boolean
  description?: string
}
``
export const Step = ({ step, description, currentStep }: Props) => {
  return (
    <>
      {currentStep ? (
        <div className="flex items-center gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-light font-bold text-blue-marine">
            {step}
          </div>
          <div className="hidden flex-col uppercase lg:flex">
            <p className="text-xs text-gray-light">step {step}</p>
            <p className="text-sm font-bold text-white">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white font-bold text-white">
            {step}
          </div>
          <div className="hidden flex-col uppercase lg:flex">
            <p className="text-xs text-gray-light">step {step}</p>
            <p className="text-sm font-bold text-white">{description}</p>
          </div>
        </div>
      )}
    </>
  )
}
