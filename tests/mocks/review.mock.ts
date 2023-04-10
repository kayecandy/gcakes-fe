import { Review } from "@/types/review";

export const mockReview: Review = {
  sys: {
    id: "Mock review"
  },
  title: "Mock Review",
  rating: 3,
  comment: "Mock comment",
  user: {
    sys: {
      id: "Mock user ID"
    },
    userid: "Mock user id",
    email: "mockemail@email.com"
  }
}