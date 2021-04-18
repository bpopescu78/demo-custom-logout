import { newSpecPage } from '@stencil/core/testing';
import { CustomInactiveLogout } from '../custom-inactive-logout';

describe('custom-inactive-logout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomInactiveLogout],
      html: `<custom-inactive-logout></custom-inactive-logout>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-inactive-logout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-inactive-logout>
    `);
  });
});
