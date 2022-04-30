import { parseISO, format } from "date-fns";

export default function Date({
  dateString,
}: {
  dateString: string | undefined;
}) {
  if (!dateString) return <time>Unknown</time>;
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
