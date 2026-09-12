import ScreenRenderer from "@/components/ui/ScreenRenderer";
import { eventsHtml } from "@/lib/templates/eventsHtml";

export default function Page() {
  return <ScreenRenderer htmlContent={eventsHtml} />;
}

