import { badgeComponent } from './badgeComponent'

export const badgeListComponent = (elementId, items) => {
  const section = document.getElementById(elementId)

  const template = `
    <div>
      <ul id="badge-list">
        ${Object.values(items)
          .map((res, i) => {
            return `<li id="${i}">${badgeComponent(i, res.genre)}</li>`
          })
          .join('')}
      </ul>
    </div>
  `

  section.innerHTML = template
  const ul = document.getElementById('badge-list')
  ul.style.listStyle = 'none'

  return section
}
