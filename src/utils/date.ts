type FormatDateOptions = {
  date: Date;
  locale: string;
  dateStyle?: "short" | "long";
}

export const formatDate = (formatOptions: FormatDateOptions) => {
  const { date, locale, dateStyle = "short" } = formatOptions;

  return new Intl.DateTimeFormat(
    locale,
    dateStyle === "short"
      ? { day: "2-digit", month: "2-digit", year: "numeric" }
      : {
        month: "long",
        year: "numeric",
      }
  ).format(date);
};
