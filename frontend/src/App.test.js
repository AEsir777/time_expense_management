import { render, screen } from '@testing-library/react';
import App from './App';


// test fiels
const ALList = [
  {
    pk: 1,
    activity: "Do the cleaning",
    description: "Clean the living room and bed room",
    is_compeleted: true,
    due_time: '2022 October 11 19:00',
    priority: 'list-group-item-light',
  },
  {
    pk: 2,
    activity: "Study CS 1023",
    description: "Prepare for the mid term",
    is_compeleted: false,
    due_time: '2022 October 23 12:00',
    priority: 'list-group-item-danger',
  },
  {
    pk: 3,
    activity: "Study MATH 4233",
    description: "Finish first chapter and do the after chapter problems",
    is_compeleted: false,
    due_time: '2022 October 24 14:00',
    priority: 'list-group-item-warning',
  },
  {
    pk: 4,
    activity: "Finish ARTS 342 Assignment 4",
    description: "",
    is_compeleted: false,
    due_time: '2022 October 29 19:00',
    priority: 'list-group-item-danger',
  },
];

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
