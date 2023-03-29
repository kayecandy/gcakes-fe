/**
 * Add unit test code here
 */
import { Tags } from "@/components/page/product/view/Tags";
import { productMock } from "../../../mocks/product.mock";
import { render, RenderResult } from "@testing-library/react";
import Chip, { ChipProps } from "@mui/material/Chip";

jest.mock('@mui/material/Chip', ({ className, label } : ChipProps) => {
  
  return <div className={className} data-label={label}></div>
  
});

describe("Tags Page", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    
    rendered = render(<Tags product={productMock} />);
  });

  test("Tags has correct class name", () => {
    const tagEls = rendered.container.querySelectorAll(".tag");
    
    expect(tagEls.length).toBe(3);
  })

  test("Tags has correct labels", () => {

    const tagEls = rendered.container.querySelectorAll(".tag");
    const tagLabels: string[] = [];

    tagEls.forEach((tagEl) => {
      const attribute = tagEl.getAttribute("label");
      if (attribute) {
        tagLabels.push(attribute)
      }
    })

    console.log("Tags", tagLabels);

    for (const mockTag of productMock.tags) {
      expect(tagLabels.find((label)=>mockTag.name===label)).toBeDefined()
    }


    
  });
  
});
