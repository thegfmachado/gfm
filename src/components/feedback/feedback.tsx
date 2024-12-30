"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import { Pin, SquareArrowOutUpRight } from "lucide-react";

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CircleSeparator } from "../circle-separator";

import { formatDate } from "@/utils/date";

type FeedbackUser = {
  name: string;
  avatarUrl: string | null;
  siteUrl?: string | null;
}

type FeedbackProps = {
  title?: string;
  message?: string;
  user: FeedbackUser;
  postedAt: Date;
  pinned?: boolean;
}

export function Feedback(props: FeedbackProps) {
  const { title = "", message = "", user, postedAt, pinned } = props;

  const translate = useTranslations('feedbacks');
  const { locale } = useParams();

  return (
    <article className="w-full flex flex-wrap justify-between gap-2 sm:gap-4">
      <div className="flex gap-4 flex-1">
        <Avatar>
          <AvatarImage src={user.avatarUrl ?? ''} alt={user.name} />
          <AvatarFallback>
            <Image src="/images/default-avatar.png" alt={user.name} quality={100} fill sizes="100%" />
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1 flex-1">
          {pinned && (
            <div className="flex gap-1 items-center">
              <Pin size={16} />
              <span className="text-sm">{translate("pinned")}</span>
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold whitespace-nowrap">{user.name}</h3>
            <CircleSeparator />
            <small className="font-normal text-sm">
              {formatDate({
                date: postedAt,
                locale: String(locale),
              })}
            </small>
          </div>
          {title.length > 0 && (
            <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
          )}
          {message.length > 0 && (
            <p className="text-sm sm:text-base mt-2">{message}</p>
          )}
        </div>
      </div>
      <div className="mt-2 sm:mt-0">
        {user.siteUrl?.length ? (
          <Link href={user.siteUrl} target="_blank">
            <Button variant="outline">
              <SquareArrowOutUpRight size={16} />
            </Button>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
