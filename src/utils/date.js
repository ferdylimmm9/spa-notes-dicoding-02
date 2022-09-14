import { format } from "date-fns";
import { id, enUS } from "date-fns/locale";

export function formatDate({ date, locale }) {
  return format(new Date(date), "dd MMMM yyyy", {
    locale: locale === "id" ? id : enUS,
  });
}
