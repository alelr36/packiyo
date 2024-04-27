import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { fetchOrder } from '@/lib/actions/orders';

import OrderPage from './page';

jest.mock('@/lib/actions/orders', () => ({
  fetchOrder: jest.fn(),
}));

describe('OrderPage', () => {
  it('should render expected information', async () => {
    fetchOrder.mockResolvedValueOnce({ attributes: { testKey: 'testValue' } });

    render(await OrderPage({ params: {id: 'test'} }));

    expect(screen.getByText('testKey')).toBeInTheDocument();
    expect(screen.getByText('testValue')).toBeInTheDocument();
  });
});
