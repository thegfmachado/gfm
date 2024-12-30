"use client";

import { useTranslations } from "next-intl";

import type { Feedback as FeedbackType } from "@prisma/client";

import { Separator } from "@/components/ui/separator";
import { FeedbackForm } from "@/components/feedback/feedback-form";
import { Feedback } from "@/components/feedback/feedback";

import { myUserInfo, publishedDate } from "@/constants/general";

type FeedbacksWrapperProps = {
  feedbacks: FeedbackType[];
};

export function FeedbacksWrapper(props: FeedbacksWrapperProps) {
  const { feedbacks } = props;
  const translate = useTranslations("feedbacks");

  return (
    <section className="container-app flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Feedback
          title={translate("title")}
          user={myUserInfo}
          postedAt={publishedDate}
          pinned
        />

        <FeedbackForm />
      </div>

      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="flex flex-col gap-4">
          <Separator />
          <div className="flex justify-between">
            <Feedback
              key={feedback.id}
              message={feedback.message}
              user={{
                name: feedback.name,
                avatarUrl: feedback.imageUrl,
                siteUrl: feedback.siteUrl,
              }}
              postedAt={feedback.createdAt}
              pinned={feedback.pinned}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
