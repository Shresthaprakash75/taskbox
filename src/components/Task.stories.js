import React from 'react';
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

// In this component, we builds Task’s three test states i.e. default, pinned & archived
// import things to use it in this component i.e. React to make JSX & Task component
// Use the same template

// explanation
// export default object: https://forum.freecodecamp.org/t/what-is-export-default/296431/2

// spread & rest operator
// https://www.youtube.com/watch?v=iLx4ma8ZqvQ&ab_channel=freeCodeCamp.org
// arguments : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// rest parameter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// spread syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
