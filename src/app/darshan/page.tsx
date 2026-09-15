import ScreenRenderer from "@/components/ui/ScreenRenderer";
import { darshanHtml } from "@/lib/templates/darshanHtml";

export default function Page() {
  return <ScreenRenderer htmlContent={darshanHtml} />;
}


// force reload
