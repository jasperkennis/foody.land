export const getTestAttribute = (name: string): string => {
  return `data-test-selector="${name}"`
}

export const getTestSelector = (name: string): string => {
  return `[${getTestAttribute(name)}]`
}
