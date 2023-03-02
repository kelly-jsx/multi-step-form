type Props = {
  title: string
  price: string
  yearly: boolean
  description: string
}

export const AddonsSelect = ({ title, description, price, yearly }: Props) => {
  const handleCheckbox = (e) => {
    const input = e.target
    const label = e.target.parentNode.parentNode.parentNode

    if (input.checked) {
      label.classList.add('border-blue-purplish')
    } else {
      label.classList.remove('border-blue-purplish')
    }
  }

  return (
    <>
      <label
        className="addon-card w-full cursor-pointer rounded-lg border px-4 py-2 lg:px-6 lg:py-4"
        htmlFor={title}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <input
              onChange={handleCheckbox}
              type="checkbox"
              name="addon"
              id={title}
              className="addon-radio checked:bg-green-500"
            />

            <div className="flex flex-col">
              <h1 className="text-base font-bold text-blue-marine">{title}</h1>
              <p className="text-xs text-gray-cool">{description}</p>
            </div>
          </div>
          <p className="text-xs text-blue-purplish">{price}</p>
        </div>
      </label>
    </>
  )
}
