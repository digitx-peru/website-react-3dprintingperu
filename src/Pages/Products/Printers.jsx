import PageContent from "../../Components/PageContent";

import ContentPrinters from "../../Content/Products/Printers/ContentPrinters";

export default function Printers() {
  return (
    <PageContent
      heroTitle={"Impresoras"}
      backgroundImage={"/images/heroImasro_img_printings.png"}
    >
      <ContentPrinters />
    </PageContent>
  );
}
