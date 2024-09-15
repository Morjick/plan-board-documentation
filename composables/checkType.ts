
export const checkType = (type: string): boolean => {
  if (type == 'string') return false
  if (type == 'number') return false
  if (type == 'string[]') return false
  if (type == 'number[]') return false
  if (type == 'boolean') return false

  return true
}
