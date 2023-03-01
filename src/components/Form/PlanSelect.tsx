type Props = {
  imgUrl: string
  title: string
  price: string
  yearly: boolean
}

export const PlanSelect = ({ imgUrl, title, price, yearly }: Props) => (
  <>
    <input type="radio" name="plan" id={title} className="plan-radio hidden" />
    <label
      className="plan-card flex w-full gap-4 rounded-lg border px-4 py-2"
      htmlFor={title}
    >
      <img src={imgUrl} alt={title} />
      <div className="flex flex-col">
        <h1 className="text-base font-bold capitalize text-blue-marine">
          {title}
        </h1>
        <p className="text-sm text-gray-cool">{price}</p>
        {yearly && <p className="text-xs">2 months free</p>}
      </div>
    </label>
  </>
)
