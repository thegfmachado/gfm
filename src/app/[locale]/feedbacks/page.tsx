import { prisma } from "@/db/prisma";
import type { Feedback as FeedbackType } from "@prisma/client";

import { FeedbacksWrapper } from "@/components/feedback/feedbacks-wrapper";

async function getFeedbacks(): Promise<FeedbackType[]> {
  return await prisma.feedback.findMany({
    where: {
      active: true,
    },
    orderBy: [{ pinned: "desc" }, { createdAt: "desc" }],
  });
}

export default async function Feedbacks() {
  const feedbacks = await getFeedbacks();
  const mappedFeedbacks = feedbacks.map((item) => ({ ...item, createdAt: new Date(item.createdAt) }));

  return (
    <FeedbacksWrapper feedbacks={mappedFeedbacks} />
  );
}
