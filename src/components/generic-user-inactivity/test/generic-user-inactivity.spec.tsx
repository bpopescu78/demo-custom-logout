import { newSpecPage } from '@stencil/core/testing';
import { GenericUserInactivity } from '../generic-user-inactivity';

describe('generic-user-inactivity', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GenericUserInactivity],
      html: `<generic-user-inactivity></generic-user-inactivity>`,
    });
    expect(page.root).toEqualHtml(`
      <generic-user-inactivity>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </generic-user-inactivity>
    `);
  });
});
