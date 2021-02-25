// my-first-snowpack/index.js
import './css/index.scss'

import { helloWorld } from './scripts/hello-world.js'

document.getElementById('changeTitleBtn').addEventListener('click', () => {
  console.log('clicked')
})
