import { ProductGrid } from '@/components/common/product/ProductGrid';
import { DecoratedCookiesSection } from '@/components/page/decoratedCookies/DecoratedCookiesSection';
import DecoratedCookiesPage from '@/pages/decoratedCookies';
import {
  render,
  screen,
} from '@testing-library/react';

jest.mock('@/components/page/decoratedCookies/DecoratedCookiesSection', () => {
  const DecoratedCookiesSectionMock: typeof DecoratedCookiesSection = () => {
    return <div data-testid="decoratedcookies-section"></div>
  }
  
  return {
    DecoratedCookiesSection: DecoratedCookiesSectionMock
  }
});

describe("Decorated Cookies Page", () => {
  let decoratedcookiesSection: HTMLElement;
  let decoratedcookiesTypography: HTMLElement;
  beforeEach(() => {
    render(<DecoratedCookiesPage />);
    decoratedcookiesSection = screen.getByTestId("decoratedcookies-section");
    decoratedcookiesTypography = screen.getByText("Decorated Cookies page!");
  });

  test("Renders DecoratedCookiesSection component", () => {
    expect(decoratedcookiesSection).toBeInTheDocument();
  });

  test("Renders DecoratedCookiesSection typography header", () => {
    expect(decoratedcookiesTypography).toBeInTheDocument();
  });
});
