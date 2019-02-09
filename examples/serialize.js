/* eslint-disable prefer-template */
/* eslint-disable no-console */
'use strict'

// Setup code
const DC = require('../index.js')

const template = {
  div: {
    props: {
      class: 'welcome',
    },

    user: {
      condition: (ctx) => {
        if (ctx.loggedIn)
          return 'loggedIn'

        if (ctx.admin)
          return 'admin'
      },

      content: {
        loggedIn: (ctx) => 'Welcome ' + ctx.username,
        admin: (ctx) => 'Admin ' + ctx.username,
      },

      tags: ['<h1>', '</h1>'],
      props: {
        align: 'center',
      },
    },
  },
}

const appContext = {
  user: {
    username: 'Levi',
    loggedIn: true,
    admin: false,
  },
}


// Take a template and serialize it to JSON
let dc = new DC(template)
let serialized = dc.serialize()

console.log('Serialized template (JSON): ')
console.log(serialized)
console.log()

// Read the serialized JSON and parse it back into template.
dc = new DC(serialized, appContext)

console.log('Parsed Template: ')
console.log(dc.parse())
console.log()

// Render the template
let output = dc.render()

console.log('Output: ')
console.log(output)
console.log()
