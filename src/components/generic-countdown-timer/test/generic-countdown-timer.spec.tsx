import { newSpecPage } from '@stencil/core/testing';
import { GenericCountdownTimer } from '../generic-countdown-timer';

describe('generic-countdown-timer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GenericCountdownTimer],
      html: `<generic-countdown-timer></generic-countdown-timer>`,
    });
    expect(page.root).toEqualHtml(`
      <generic-countdown-timer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </generic-countdown-timer>
    `);
  });
});
