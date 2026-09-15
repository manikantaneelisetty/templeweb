import ScreenRenderer from "@/components/ui/ScreenRenderer";
import { servicesHtml } from "@/lib/templates/servicesHtml";

export default function Page() {
  return <ScreenRenderer htmlContent={servicesHtml} />;
}


// force reload
