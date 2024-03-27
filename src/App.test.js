import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils'; // Import act

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      text: () => Promise.resolve('Mocked message'), // Mock fetch to resolve with your test message
    })
  );
});

afterEach(() => {
  global.fetch.mockRestore();
});

test('renders the fetched message', async () => {
  await act(async () => {
    render(<App />);
  });
  const messageElement = await waitFor(() => screen.getByText(/Mocked message/i));
  expect(messageElement).toBeInTheDocument();
});

test('renders functional component', async () => {
  await act(async () => {
    render(<App />);
  }); 
  const funcMessage = await waitFor(() => screen.getByText('Hello World from Function Component!'));
  expect(funcMessage).toBeInTheDocument();
});

test('render class component', async() => {
  await act(async () => {
    render(<App />);
  });
  const classMessage = await waitFor(() => screen.getByText('Hello World from Class Component!'));
  expect(classMessage).toBeInTheDocument();
});
