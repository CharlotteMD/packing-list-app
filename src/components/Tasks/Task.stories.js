import React from 'react'
import { action } from '@storybook/addon-actions'

// Import the component that you want to test
import Task from './Task'

// This is the info for Storybooks UI - the title of your component and any info that it should ignore
export default {
  component: Task,
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

// This is the test data
export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
}

// Action helps us see the action in the Storybook UI
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

// Here you pass the component that already exists in your app, the test data and the action triggers
export const Default = () => <Task task={{ ...taskData }} {...actionsData} />

export const Pinned = () => (
  <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
)

export const Archived = () => (
  <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
)
