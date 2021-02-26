// component imports
import { breadCrumbComponent } from './components/breadCrumbComponent'
import { jumbotronComponent } from './components/jumbotronComponent'
import { badgeListComponent } from './components/badgeListComponent'

const state = {
  jumbotronData: {
    title: 'Favorite Albums',
    imagUrl:
      'https://images.radiox.co.uk/images/126985?crop=16_9&width=660&relax=1&signature=DFvysDYfLDoEFCeqecAyIBmlLjc=',
    lead: 'The definite guide to the top albums of the 80s',
    description:
      'Was Prince really a sellouts king or a second rate wanna-be top performer of the 80s?'
  },
  favoritesList: [
    { artist: 'Bruce Springsteen', album: 'Born in the USA', genre: 'rock' },
    { artist: 'Queen', album: 'The Miracle', genre: 'pop' },
    { artist: 'Prince', album: 'The Revolution of Purple Rain', genre: 'pop' }
  ]
}

breadCrumbComponent('exercise1')
jumbotronComponent('exercise2', state.jumbotronData)
badgeListComponent('exercise3', 'genre', state.favoritesList)

window.onload = function () {}
