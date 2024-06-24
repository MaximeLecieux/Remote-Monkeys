import { Seo } from '@/ui/components/seo/Seo'
import { Layout } from '@/ui/components/layout/layout';
import { ForgetPasswordContainer } from '@/ui/modules/authentification/forget-password/forget-password.container';


export default function ForgetPassword() {
  return (
    <>
      <Seo title="Mot de passe perdu" description="Page de mot de passe perdu"/>

      <Layout>
        <ForgetPasswordContainer/>
      </Layout>
    </>
  )
}