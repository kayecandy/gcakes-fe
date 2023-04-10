import { LogoutButton } from "@/components/common/user/login/LogoutButton";

import * as sessionHook from "@/components/common/hooks/useSession";
import { RenderResult, render } from "@testing-library/react";
import Profile from "@/pages/[userId]/profile";
import { withSessionPage } from "@/components/common/user/session/withSessionPage";
import { mockUser } from "@/tests/mocks/user.mock";


jest.mock('@/components/common/user/login/LogoutButton', () => {
  const LogoutButtonMock: typeof LogoutButton = () => {
    return <div data-testid="logout-button"></div>
  }
  
  return {
    LogoutButton: LogoutButtonMock
  }
});

jest.mock("@/components/common/user/session/withSessionPage", () => {

  const withSessionPageMock: typeof withSessionPage = (component) => component;

  return {
    withSessionPage: withSessionPageMock
  }
  
})

jest.mock("@/components/common/hooks/useSession", () => {
  return {
    useSession: ()=>undefined
  }
});

describe("Profile", () => {
  const mockedUseSession = jest.spyOn(sessionHook, "useSession")

  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Profile></Profile>)
  })

  describe("No session defined", () => {
    beforeAll(() => {
      mockedUseSession.mockReturnValue(undefined);
    })

    test("Render empty", () => {
      expect(renderResult.getByTestId("profilePageEmpty")).toBeInTheDocument()
    })
    
  })

  describe("Session defined", () => {
    beforeAll(() => {
      mockedUseSession.mockReturnValue({
        accessToken: "",
        currentUser: mockUser,
        expiration: new Date()
      })
    })

    test("Renders correct user data", () => {
      /**
       * TODO: Add all user data
       */
      expect(renderResult.getByTestId("profileFirstName").textContent).toBe(mockUser.firstName)
    })
  })
  
})