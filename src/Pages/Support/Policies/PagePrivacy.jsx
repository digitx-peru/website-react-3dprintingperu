import PageContent from "../../../Components/PageContent";
import ContentPrivacy from "../../../Content/Support/Policies/ContentPrivacy";

export default function PagePrivacy() {
  return (
    <>
      <PageContent
        heroTitle={"Política de privacidad"}
        heroMessage={""}
        floatButton={false}
      >
        <ContentPrivacy />
      </PageContent>
    </>
  );
}
