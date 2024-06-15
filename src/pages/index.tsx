import { Seo } from '@/ui/components/seo/Seo'
import { Button } from '@/ui/design-system/button/button'
import { Spinner } from '@/ui/design-system/spinner/spinner';
import { Typography } from '@/ui/design-system/typography/typography'
import { RiAccountCircleFill } from "react-icons/ri";
import { Logo } from '@/ui/design-system/logo/logo';
import { Avatar } from '@/ui/design-system/avatar/avatar';
import { Container } from '@/ui/components/container/container';
import { Navigation } from '@/ui/components/navigation/navigation';
import { Footer } from '@/ui/components/navigation/footer';

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description"/>

      <Navigation />
      <Footer/>
    </>
  )
}
