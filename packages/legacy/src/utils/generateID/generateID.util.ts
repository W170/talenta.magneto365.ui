export const generateID = () => {
  const markTime = new Date().getTime()
  const randomNumber = Math.floor(Math.random() * 1000000)
  const uniqueID = `${markTime}${randomNumber}`
  return uniqueID
}
