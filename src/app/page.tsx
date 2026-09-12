import ScreenRenderer from "@/components/ui/ScreenRenderer";
import { homeHtml } from "@/lib/templates/homeHtml";

export default function Page() {
  return <ScreenRenderer htmlContent={homeHtml} />;
}

