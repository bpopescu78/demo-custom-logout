import { newE2EPage } from '@stencil/core/testing';

describe('custom-inactive-logout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-inactive-logout></custom-inactive-logout>');

    const element = await page.find('custom-inactive-logout');
    expect(element).toHaveClass('hydrated');
  });
});
