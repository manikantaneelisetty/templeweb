import ScreenRenderer from "@/components/ui/ScreenRenderer";
import { galleryHtml } from "@/lib/templates/galleryHtml";

export default function Page() {
  return <ScreenRenderer htmlContent={galleryHtml} />;
}

// force reload
