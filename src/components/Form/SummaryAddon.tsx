type Props = {
  name: string
  price: string
}

export const SummaryAddon = ({ name, price }: Props) => (
  <div className="flex items-center justify-between">
    <p>{name}</p>
    <p>{price}</p>
  </div>
)
