export const formatMoney = (value: number) =>
  `$${value.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

export const formatDate = (value: string) => new Date(value).toLocaleDateString('ru-RU')
