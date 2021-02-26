import { removeDuplicates } from '../utils/helpers'

export const badgeListComponent = (elementId = '', title = '', data = {}) => {
  const state = {
    badges: []
  }

  data.forEach((element, i) => {
    state.badges[i] = element[title]
  })

  state.badges = removeDuplicates(state.badges)

  const template = `
    <div id="badge-list" class="card">
    <div>
      <h2>${title}</h2>
    </div>
      <ul>
        ${Object.values(data)
          .map((res, i) => {
            return `<h2>
                      <li class="hvr-grow id="badge-item-${i}">
                        <span class="badge ml-3 bg-secondary font-weight-light">${res[title]}</span>
                      </li>
                    </h2>`
          })
          .join('')}
      </ul>
    </div>
  `
  const section = document.getElementById(elementId)
  section.innerHTML = template
  return section
}

// TODO why doesn't the array work in the template lit
// <ul>
//     ${state.list.forEach((element, i) => {
//       console.log(element)
//       return `<h2>${element}</h2>`
//     })}
// </ul>
