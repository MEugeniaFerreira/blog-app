// tests/integration/HomePage.test.tsx
import { render, screen } from '@testing-library/react';
import HomeContent from '@components/HomeContent';
import { posts as mockPosts } from '@data/mocks';

describe('Home Page integration', () => {
  it('renders all posts correctly', async () => {
    render(<HomeContent posts={mockPosts} categories={[]} />);

    expect(await screen.findByRole('link', { name: /React Testing/i })).toBeInTheDocument();
    expect(await screen.findByRole('link', { name: /React with tailwind/i })).toBeInTheDocument();
  });
});