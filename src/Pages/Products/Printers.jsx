import PageContent from "../../Components/PageContent";

import ContentPrinters from "../../Content/Products/Printers/ContentPrinters";

export default function Printers() {
  return (
    <PageContent
      heroTitle={"Impresoras"}
      backgroundImage={"/images/hero/hero_printers.png"}
    >
      <ContentPrinters />
    </PageContent>
  );
}
