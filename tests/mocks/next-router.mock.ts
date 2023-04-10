import { NextRouter, useRouter } from "next/router";

const MockRouter = jest.fn<NextRouter, []>();
export const mockRouter = () => jest.mocked(new MockRouter());
