export const loadState = () => {
  try {
    const zidenceData = JSON.parse(localStorage.getItem('zidenceData'))
    return zidenceData || undefined
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const zidenceData = JSON.stringify(state)
    localStorage.setItem('zidenceData', zidenceData)
  } catch (error) {
    console.error(error)
  }
}
