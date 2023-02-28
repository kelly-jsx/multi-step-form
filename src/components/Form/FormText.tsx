type Props = {
  iName: string
  iLabel: string
  iType: string
  iPlaceholder: string
}

export const FormText = ({ iName, iLabel, iType, iPlaceholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={iName}>{iLabel} </label>
      <input type={iType} name={iName} placeholder={iPlaceholder} required />
    </div>
  )
}
