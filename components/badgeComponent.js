export const badgeComponent = (elementId, data) => {
  console.log(data)
  const li = document.getElementById(elementId)
  const template = `
    <span class="badge bg-secondary">${data}</span></h1>
  `

  console.log(li)
  //return (li.innerHTML = template)
}
