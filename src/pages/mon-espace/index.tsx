import { Seo } from '@/ui/components/seo/Seo'
import { Layout } from '@/ui/components/layout/layout';
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container"


export default function MonEspace() {
  return (
    <>
      <Seo title="Mon espace" description="Mon espace personnel"/>

      <Layout withSidebar>
        <UserAccountContainer/>
      </Layout>
    </>
  )
}