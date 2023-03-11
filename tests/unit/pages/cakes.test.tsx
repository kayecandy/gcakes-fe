import { ProductGrid } from '@/components/common/product/ProductGrid';
import CakePage from '@/pages/cakes';
import {
  render,
  screen,
} from '@testing-library/react';

jest.mock('@/components/common/product/ProductGrid', () => {
  const ProductGridMock: typeof ProductGrid = ({productType}) => {
    return <div data-testid="cakes-product-grid" data-product-type={productType}></div>
  }
  
  return {
    ProductGrid: ProductGridMock
  }
});


describe("Cakes Page", () => {
  let cakesProductGrid: HTMLElement;
  beforeAll(() => {
    render(<CakePage />);

    cakesProductGrid = screen.getByTestId("cakes-product-grid");

  });

  test("Renders ProductGrid component", () => {
    expect(cakesProductGrid).toBeInTheDocument();
  });

  test("ProductGrid component has correct productType", () => {
    expect(cakesProductGrid.getAttribute('data-product-type')).toBe("cakes")
  })
});
