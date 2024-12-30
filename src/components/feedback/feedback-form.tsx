"use client";

import * as React from "react";

import { useTranslations } from "next-intl";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function OptionalIndicator() {
  const translate = useTranslations("feedbacks");
  return (
    <div className="flex gap-1 items-center">
      <div className="h-1 w-1 rounded-full"></div>
      <small className="text-xs">{translate("optional")}</small>
    </div>
  );
};

export function FeedbackForm() {
  const [open, setOpen] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);

  const translate = useTranslations("feedbacks");

  const handleToggleDialog = React.useCallback((newValue: boolean) => {
    setOpen(newValue);
  }, []);

  const formSchema = React.useMemo(() => z.object({
    name: z.string().min(2, {
      message: translate("form.fields.name.requiredError"),
    }),
    message: z.string().min(1, {
      message: translate("form.fields.message.requiredError"),
    }),
    siteUrl: z.string(),
    imageUrl: z.string(),
  }), [translate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
      message: "",
      siteUrl: "",
    },
  });

  const createFeedback = React.useCallback(async (formValues: z.infer<typeof formSchema>) => {
    const response = await fetch('/api/feedback', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (!response.ok) {
      throw new Error(`Error creating feedback: ${response.statusText}`);
    }
  }, []);

  async function onSubmit(formValues: z.infer<typeof formSchema>) {
    setIsSending(true);

    try {
      await createFeedback(formValues);

      toast.success(translate("form.fields.successToast.title"), {
        description: translate("form.fields.successToast.description"),
      });

      form.reset();
      handleToggleDialog(false);
    } catch {
      toast.error(translate("form.fields.errorToast.title"), {
        description: translate("form.fields.errorToast.description"),
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div>
      <Sheet open={open} onOpenChange={handleToggleDialog}>
        <SheetTrigger asChild>
          <Button className="rounded ml-[3.5rem] !text-neutral-50 !bg-indigo-500">{translate("cta")}</Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{translate("form.title")}</SheetTitle>
            <SheetDescription>
              {translate("form.body")}
            </SheetDescription>
          </SheetHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 mt-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {translate("form.fields.name.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={translate(
                          "form.fields.name.placeholder"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="siteUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      {translate("form.fields.siteUrl.label")}
                      <OptionalIndicator />
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={translate(
                          "form.fields.siteUrl.placeholder"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      {translate("form.fields.avatarUrl.label")}
                      <OptionalIndicator />
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={translate(
                          "form.fields.avatarUrl.placeholder"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {translate("form.fields.message.label")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={translate(
                          "form.fields.message.placeholder"
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSending}>
                {isSending
                  ? translate("form.sending")
                  : translate("form.send")}
              </Button>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </div>
  );
}
