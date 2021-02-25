export const breadCrumbComponent = (elementId, listLinks) => {
  const section = document.getElementById(elementId)
  const template = `
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">albums</li>
        </ol>
      </nav>
  `

  section.innerHTML = template

  return section
}
