import { AboutHead, AboutBody, AboutFoot } from "@/components/page/about/AboutContent"
import AboutPage from "@/pages/about";
import {
    render,
    screen,
} from "@testing-library/react";

jest.mock('@/components/page/about/AboutContent', () => {
    const AboutHeadMock: typeof AboutHead = () => {
        return <div data-testid="about-head"></div>
    }

    const AboutBodyMock: typeof AboutBody = () => {
        return <div data-testid="about-body"></div>
    }

    const AboutFootMock: typeof AboutFoot = () => {
        return <div data-testid="about-foot"></div>
    }

    return {
        AboutHead: AboutHeadMock,
        AboutBody: AboutBodyMock,
        AboutFoot: AboutFootMock
    }
});

describe("About Page", () => {
    let aboutTypography: HTMLElement;
    let aboutHead: HTMLElement;
    let aboutBody: HTMLElement;
    let aboutFoot: HTMLElement;
    beforeEach(() => {
        render(<AboutPage />);
        aboutTypography = screen.getByText("About Gina");
        aboutHead = screen.getByTestId("about-head");
        aboutBody = screen.getByTestId("about-body");
        aboutFoot = screen.getByTestId("about-foot");
    });

    test("Renders AboutPage head title", () => {
        expect(aboutTypography).toBeInTheDocument();
    });

    test("Render AboutPage head section", () => {
        expect(aboutHead).toBeInTheDocument();
    });

    test("Renders AboutPage body section", () => {
        expect(aboutBody).toBeInTheDocument();
    });
    
    test("Renders AboutFoot foot section", () => {
        expect(aboutFoot).toBeInTheDocument();
    });
});