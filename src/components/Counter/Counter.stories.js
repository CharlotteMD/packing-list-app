import React from 'react'
import { action } from '@storybook/addon-actions'

import Counter from './Counter'

export default {
  component: Counter,
  title: 'Counter',
  // not quite sure what this bit does..
  excludeStories: /.*Data$/
}

export const CounterData = {
  title: 'How many nights will you be away for?',
  message: ' nights away!'
}

// dont get this - how can I tell what current state is?
export const actionsData = {
  setCount: action('setCount')
}

export const Default = () => (
  <Counter counter={{ ...CounterData }} {...actionsData} />
)
