import ProductReview from "@/components/page/product/view/ProductReview";
import { RenderResult, render } from "@testing-library/react"
import { mockReview } from "../../../mocks/review.mock";

describe("Product Review", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<ProductReview review={mockReview}></ProductReview>)  
  })

  test("Review displays correct details", () => {
    expect(rendered.getByTestId("reviewUserId").textContent).toContain(mockReview.user.userid)
    expect(rendered.getByTestId("reviewTitle").textContent).toBe(mockReview.title)
    expect(rendered.getByTestId("reviewComment").textContent).toBe(mockReview.comment)
  })
  
})