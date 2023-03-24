import { ProductGrid } from '@/components/common/product/ProductGrid';
import { CupcakesSection } from '@/components/page/cupcakes/CupcakesSection';
import CupcakePage from '@/pages/cupcakes';
import {
  render,
  screen,
} from '@testing-library/react';

jest.mock('@/components/page/cupcakes/CupcakesSection', () => {
  const CupcakesSectionMock: typeof CupcakesSection = () => {
    return <div data-testid="cupcakes-section"></div>
  }
  
  return {
    CupcakesSection: CupcakesSectionMock
  }
});

describe("Cupcakes Page", () => {
  let cupcakesSection: HTMLElement;
  let cupcakesTypography: HTMLElement;
  beforeEach(() => {
    render(<CupcakePage />);
    cupcakesSection = screen.getByTestId("cupcakes-section");
    cupcakesTypography = screen.getByText("Cupcakes page!");
  });

  test("Renders CupcakesSection component", () => {
    expect(cupcakesSection).toBeInTheDocument();
  });

  test("Renders CupcakesSection typography header", () => {
    expect(cupcakesTypography).toBeInTheDocument();
  });
});
