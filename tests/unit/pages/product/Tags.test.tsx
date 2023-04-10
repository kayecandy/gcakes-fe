/**
 * Add unit test code here
 */
import { Tags } from "@/components/page/product/view/Tags";
import { productMock } from "../../../mocks/product.mock";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import Chip, { ChipProps } from "@mui/material/Chip";


jest.mock("@/components/common/ThemeProvider", () => {
  return {
    COLOR_PALLETE: ["#FFECEE", "#FFECEE", "#FFECEE", "#FFECEE", "#FFECEE"],
  }
});

jest.mock('@mui/material/Chip', () => {
  const ChipMock: typeof Chip = ({ className, id , label, onClick } : ChipProps) => {
    return <div className={className} id={id} data-label={label} onClick={onClick} ></div>
  }

  return ChipMock
});

describe("Tags Page", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    
    rendered = render(<Tags product={productMock} />);
  });

  test("Tags has correct class name", () => {
    const tagEls = rendered.container.querySelectorAll(".tag");
    
    expect(tagEls.length).toBe(productMock.tags.length);
  })

  test("Tags has correct labels", () => {
    const tagEls = rendered.container.querySelectorAll(".tag");
    const tagLabels: string[] = [];

    tagEls.forEach((tagEl) => {
      const attribute = tagEl.getAttribute("data-label");
      
      if (attribute) {
        tagLabels.push(attribute)
      }
    })

    console.log("TagsConsole ", tagLabels);

    for (const mockTag of productMock.tags) {
      console.log("mockTagConsole ", mockTag.name);
      expect(tagLabels.find((label)=>mockTag.name===label)).toBeDefined()
    }

  }); 

  test("Tags have correct id", () => {
    for (const mockTag of productMock.tags) {
      console.log("idTag", mockTag.id)
      const idMock = rendered.container.querySelector(`#tag-${mockTag.id}`)
      
      expect(idMock).toBeInTheDocument()
    }
  });

  test("Click event", () => {
    const tagEls = rendered.container.querySelectorAll(".tag");

    fireEvent.click(tagEls[0])
  })

});
