import { newE2EPage } from '@stencil/core/testing';

describe('generic-countdown-timer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<generic-countdown-timer></generic-countdown-timer>');

    const element = await page.find('generic-countdown-timer');
    expect(element).toHaveClass('hydrated');
  });
});
