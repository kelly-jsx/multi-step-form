type Props = {
  name: string
  price: string
}

export const SummaryAddon = ({ name, price }: Props) => (
  <div className="flex items-center justify-between">
    <p className="text-gray-cool">{name}</p>
    <p>{price}</p>
  </div>
)
