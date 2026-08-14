import PageContent from "../../../Components/PageContent";
import ContentPrivacy from "../../../Content/Support/Policies/ContentPrivacy";

export default function PagePrivacy() {
  return (
    <>
      <PageContent
        heroEnabled={false}
        floatButtonEnabled={false}
        contactFormEnabled={false}
      >
        <ContentPrivacy />
      </PageContent>
    </>
  );
}
