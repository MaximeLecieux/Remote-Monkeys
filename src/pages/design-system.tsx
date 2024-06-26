//COMPONENT
import { Container } from '@/ui/components/container/container';
import { Seo } from '@/ui/components/seo/Seo'

//DESIGN SYSTEM
import { Button } from '@/ui/design-system/button/button'
import { Spinner } from '@/ui/design-system/spinner/spinner';
import { Typography } from '@/ui/design-system/typography/typography'
import { Logo } from '@/ui/design-system/logo/logo';
import { Avatar } from '@/ui/design-system/avatar/avatar';

//ICON
import { RiAccountCircleFill } from "react-icons/ri";
import { Layout } from '@/ui/components/layout/layout';

export default function DesignSystem() {
  return (
    <>
      <Seo title="Design system" description="Description"/>

      <Layout>
        <Container className="space-y-5">
            <div className="flex items-center gap-4 p-10">
                <Logo size="very-small" />
                <Logo size="small" />
                <Logo/>
                <Logo size="large" />
            </div>

            <div className="flex items-center gap-4 p-10">
                <div className="flex items-center gap-4 p-10">
                    <Avatar size="small" src="/assets/images/avatar.png" alt="Avatar de Daniel Lincoln" />
                    <Avatar src="/assets/images/avatar.png" alt="Avatar de Daniel Lincoln"/>
                    <Avatar size="large" src="/assets/images/avatar.png" alt="Avatar de Daniel Lincoln"/>
                </div>
                <div className="flex items-center gap-4 p-10">
                <Spinner size="small" />
                <Spinner/>
                <Spinner size="large" />
                </div>
            </div>

            <div className="flex items-center gap-4 p-10">
                <Button variant="accent">Accent</Button>
                <Button variant="secondary">Accent</Button>
                <Button variant="outline">Accent</Button>
                <Button variant="disabled">Accent</Button>
                <Button variant="icon" icon={{ icon: RiAccountCircleFill}}/>
            </div>

            <div className="flex items-center gap-4 p-10">
                <Button variant="accent" size="small" icon={{ icon: RiAccountCircleFill}}>Accent</Button>
                <Button variant="secondary" size="small" icon={{ icon: RiAccountCircleFill}} iconPosition="left">Accent</Button>
                <Button variant="outline" size="small" icon={{ icon: RiAccountCircleFill}}>Accent</Button>
                <Button variant="disabled" size="small" icon={{ icon: RiAccountCircleFill}}>Accent</Button>
                <Button variant="icon" size="small" icon={{ icon: RiAccountCircleFill}}/>
            </div>

            <div className="flex items-center gap-4 p-10">
                <Button variant="accent" isLoading>Accent</Button>
                <Button variant="secondary" isLoading>Accent</Button>
                <Button variant="outline" isLoading>Accent</Button>
                <Button variant="disabled" isLoading>Accent</Button>
                <Button variant="icon" icon={{ icon: RiAccountCircleFill}} isLoading/>
            </div>

            <div className="flex items-center gap-4 p-10">
                <Button variant="accent" size="small">Accent</Button>
                <Button variant="secondary" size="medium">Accent</Button>
                <Button variant="outline" size="large">Accent</Button>
            </div>

            <div className="flex items-center gap-4 p-10">
                <Button variant="icon" size="large" />
                <Button variant="icon" size="medium" icon={{ icon: RiAccountCircleFill}}/>
                <Button variant="icon" size="small" icon={{ icon: RiAccountCircleFill}}/>
            </div>

            <div className="flex items-center gap-4 p-10">
                <Button variant="icon" iconTheme="accent" size="large" icon={{ icon: RiAccountCircleFill}}/>
                <Button variant="icon" iconTheme="gray" size="medium" icon={{ icon: RiAccountCircleFill}}/>
                <Button variant="icon" iconTheme="secondary" size="small" icon={{ icon: RiAccountCircleFill}}/>
            </div>

            <div className="flex items-center gap-4 p-10">
                <Button variant="accent" size="small" icon={{ icon: RiAccountCircleFill}} iconPosition="left">Accent</Button>
                <Button variant="secondary" size="medium" icon={{ icon: RiAccountCircleFill}}>Accent</Button>
                <Button variant="secondary" size="large" icon={{ icon: RiAccountCircleFill}}>Accent</Button>
            </div>
            
            <div className="items-center gap-4 p-10">
                <Typography theme="primary" variant="h1" component="h2">
                Coders Monkey
                </Typography>
                <Typography theme="secondary" variant="h2" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="h3" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="h4" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="h5" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="lead" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="body-lg" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="body-base" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="body-sm" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="caption1" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="caption2" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="caption3" component="div">
                Coders Monkey
                </Typography>
                <Typography variant="caption4" component="div">
                Coders Monkey
                </Typography>
            </div>
        </Container>
      </Layout>
    </>
  )
}
