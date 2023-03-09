import CakePage from '@/pages/cakes';
import {
  render,
  screen,
} from '@testing-library/react';

jest.mock("@/components/page/cakes/CakesSection", () => {
  return {
    CakesSection() {
      return <div data-testid="cakes-section"></div>;
    },
  };
});

describe("Cakes Page", () => {
  beforeAll(() => {
    render(<CakePage />);
  });

  test("Renders Sections", () => {
    expect(screen.getByTestId("cakes-section")).toBeInTheDocument();
  });
});
