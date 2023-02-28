type Props = {
  step: number
  currentStep?: boolean
}

export const Step = ({ step, currentStep }: Props) => {
  return (
    <>
      {currentStep ? (
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-light font-bold text-blue-marine">
          {step}
        </div>
      ) : (
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white font-bold text-white">
          {step}
        </div>
      )}
    </>
  )
}
