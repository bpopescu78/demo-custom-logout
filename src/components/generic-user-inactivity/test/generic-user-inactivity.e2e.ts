import { newE2EPage } from '@stencil/core/testing';

describe('generic-user-inactivity', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<generic-user-inactivity></generic-user-inactivity>');

    const element = await page.find('generic-user-inactivity');
    expect(element).toHaveClass('hydrated');
  });
});
