import useBreakpoints from "../../../hooks/useBreakpoints";

import PageContent from "../../../Components/PageContent";

import ContentNotFound from "../../../Content/Support/NotFound/ContentNotFound";

export default function NotFound() {
  const { isMd, isLg } = useBreakpoints();

  return (
    <>
      <PageContent
        heroEnabled={false}
        floatButtonEnabled={false}
        contactFormEnabled={false}
      >
        <ContentNotFound />
      </PageContent>
    </>
  );
}
