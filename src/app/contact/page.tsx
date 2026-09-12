import ScreenRenderer from "@/components/ui/ScreenRenderer";
import { contactHtml } from "@/lib/templates/contactHtml";

export default function Page() {
  return <ScreenRenderer htmlContent={contactHtml} />;
}

