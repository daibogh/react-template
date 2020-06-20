import React, { ReactChild } from 'react'
import { SelectBaseField } from './selectBaseField'

interface Props<TOption extends  string | number> {
  getContent?: (option: TOption) => ReactChild
  label?: string
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'
  className?: string
  value?: string[] | null
  options: Map<string, TOption>
  getLabel: (option: TOption) => string
  onChange: (options: string[]) => void
  showSearch?: boolean
  dragAndDrop?: boolean
  inline?: boolean
  disable?: boolean
  onlyKeys?: boolean
  alphabeticalOrder?: boolean
}

export const MultiselectField = <TOption extends  string | number>({
  getContent,
  options,
  getLabel,
  onChange,
  showSearch,
  dragAndDrop = false,
  inline,
  disable = false,
  onlyKeys,
  alphabeticalOrder,
  ...other
}: Props<TOption>) => {
  return (
    <SelectBaseField
      inline={inline}
      getContent={getContent}
      showSearch={showSearch}
      options={options}
      getLabel={getLabel}
      onChange={(options: string | string[]) => onChange(options as string[])}
      {...other}
      multiselect
      dragAndDrop={dragAndDrop}
      disable={disable}
      onlyKeys={onlyKeys}
      alphabeticalOrder={alphabeticalOrder}
    ></SelectBaseField>
  )
}
