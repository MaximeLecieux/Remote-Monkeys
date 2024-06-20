import { Seo } from '@/ui/components/seo/Seo'
import { Layout } from '@/ui/components/layout/layout';
import { LandingPageContainer } from '@/ui/modules/landing-page/landing-page.container';

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description"/>

      <Layout isDisplayBreadcrumbs={false}>
        <LandingPageContainer/>
      </Layout>
    </>
  )
}
