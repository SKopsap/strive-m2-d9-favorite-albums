//const genres = ['Rock', 'Pop', 'Disco', 'Pop', 'Metal']
// removes duplicat words in an array
export const removeDuplicates = (words) => {
  let unique = {}
  words.forEach((el, i) => {
    el = el.toLowerCase()
    if (!unique[el.toLowerCase()]) {
      unique[el] = el
    }
  })
  return Object.keys(unique)
}
//console.log(removeDuplicates(genres))
