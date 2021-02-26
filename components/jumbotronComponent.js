export const jumbotronComponent = (
  elementId,
  { title, imageUrl, lead, description }
) => {
  const section = document.getElementById(elementId)
  const template = `
            <div class="jumbotron typewriter">
              <h1 class="display-4">${title}</h1>
              <p class="lead">${lead}</p>
              <p>${description}</p>
              <a class="btn btn-primary btn-lg color-black bg-dark" href="#" role="button">More</a>
            </div>
`

  section.innerHTML = template
  section.style.color = 'white'

  //section.style.backgroundImage = `url(${imageUrl})` // Todo fix image load error

  return section
}
