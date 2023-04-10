import ViewPage from "@/pages/product/view/[productId]";
import { RenderResult, render } from "@testing-library/react"
import { mockRouter } from "../../../mocks/next-router.mock";
import ViewForm from "@/components/page/product/view/ViewForm";


const mockedRouter = mockRouter();

jest.mock("next/router", () => {
  return {
    useRouter: ()=>mockedRouter
  }
});

jest.mock("@/components/page/product/view/ViewForm", () => {
  const MockedViewForm: typeof ViewForm = ({productId}) => (<div data-testid="mockedViewForm" data-productid={productId}></div>);

  return MockedViewForm;
});



const MOCK_PRODUCT_ID = "Mock Product ID";


describe("View Product", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<ViewPage></ViewPage>)  
  })

  describe("Router is NOT ready", () => {
    beforeAll(() => {

      mockedRouter.isReady = false;
      
    })

    test("Renders empty element", () => {
      expect(renderResult.getByTestId("viewProductEmpty")).toBeInTheDocument()
    })
  })

  describe("Router is ready", () => {
    beforeAll(() => {
      mockedRouter.isReady = true;
      mockedRouter.query = {
        productId: MOCK_PRODUCT_ID
      }
    })

    test("Renders ViewForm element", () => {
      const mockedViewForm = renderResult.getByTestId("mockedViewForm");
      expect(mockedViewForm).toBeInTheDocument();
      expect(mockedViewForm.getAttribute("data-productid")).toBe(MOCK_PRODUCT_ID)
    })
  })
})