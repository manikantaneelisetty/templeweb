import ScreenRenderer from "@/components/ui/ScreenRenderer";
import { donateHtml } from "@/lib/templates/donateHtml";

export default function Page() {
  return <ScreenRenderer htmlContent={donateHtml} />;
}

