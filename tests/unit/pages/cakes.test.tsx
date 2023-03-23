import { ProductGrid } from '@/components/common/product/ProductGrid';
import { CakesSection } from '@/components/page/cakes/CakesSection';
import CakePage from '@/pages/cakes';
import {
  render,
  screen,
} from '@testing-library/react';

jest.mock('@/components/page/cakes/CakesSection', () => {
  const CakesSectionMock: typeof CakesSection = () => {
    return <div data-testid="cakes-section"></div>
  }
  
  return {
    CakesSection: CakesSectionMock
  }
});

describe("Cakes Page", () => {
  let cakesSection: HTMLElement;
  let cakesTypography: HTMLElement;
  beforeEach(() => {
    render(<CakePage />);
    cakesSection = screen.getByTestId("cakes-section");
    cakesTypography = screen.getByText("Cakes page!");
  });

  test("Renders CakesSection component", () => {
    expect(cakesSection).toBeInTheDocument();
  });

  test("Renders CakesSection typography header", () => {
    expect(cakesTypography).toBeInTheDocument();
  });
});
