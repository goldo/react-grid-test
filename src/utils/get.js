/* NodeJS style async/await fetch function 

  Usage:
  const [error, result] = await get(URL)
*/
const get = async url => {
  try {
    const response = await fetch(url)
    if (response.status !== 200)
      throw new Error(`Request ${response.status} ${response.statusText}`)

    const result = await response.json()
    return [null, result]
  } catch (error) {
    return [error, null]
  }
}

export default get
