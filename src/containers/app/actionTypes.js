const asyncTypes = (base) => {
  return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}
export const APP_TEST = 'APP_TEST'
export const APP_ASYNC = asyncTypes('APP_ASYNC')
