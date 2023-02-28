type Props = {
  iName: string
  iLabel: string
  iType: string
  iPlaceholder: string
}

export const FormText = ({ iName, iLabel, iType, iPlaceholder }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm" htmlFor={iName}>
        {iLabel}{' '}
      </label>
      <input
        className="w-full rounded border py-2 pl-4"
        type={iType}
        name={iName}
        placeholder={iPlaceholder}
        required
      />
    </div>
  )
}
