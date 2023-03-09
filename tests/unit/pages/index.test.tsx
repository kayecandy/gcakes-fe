import IndexPage from '@/pages/index';
import {
  render,
  screen,
} from '@testing-library/react';

jest.mock("@/components/page/homepage/HeaderSection", () => {
  return function HeaderSection() {
    return <div data-testid="header-section"></div>;
  };
});
jest.mock("@/components/page/homepage/FeaturedSection", () => {
  return function FeaturedSection() {
    return <div data-testid="featured-section"></div>;
  };
});
jest.mock("@/components/page/homepage/IconSection", () => {
  return function IconSection() {
    return <div data-testid="icon-section"></div>;
  };
});

describe("Index Page", () => {
  beforeAll(() => {
    render(<IndexPage />);
  });

  test("Renders sections", () => {
    expect(screen.getByTestId("header-section")).toBeInTheDocument();
    expect(screen.getByTestId("icon-section")).toBeInTheDocument();
    expect(screen.getByTestId("featured-section")).toBeInTheDocument();
  });
});
