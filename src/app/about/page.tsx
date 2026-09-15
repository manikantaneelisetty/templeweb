import ScreenRenderer from "@/components/ui/ScreenRenderer";
import { aboutHtml } from "@/lib/templates/aboutHtml";

export default function Page() {
  return <ScreenRenderer htmlContent={aboutHtml} />;
}


// force reload
