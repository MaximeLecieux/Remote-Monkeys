import { Seo } from '@/ui/components/Seo'
import { Button } from '@/ui/design-system/button/button'
import { Typography } from '@/ui/design-system/typography/typography'

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description"/>
      <div className="flex items-center gap-4 p-10">
        <Button variant="accent">Accent</Button>
        <Button variant="secondary">Accent</Button>
        <Button variant="outline">Accent</Button>
        <Button variant="disabled" disabled>Accent</Button>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button variant="accent" size="small">Accent</Button>
        <Button variant="secondary" size="medium">Accent</Button>
        <Button variant="outline" size="large">Accent</Button>
      </div>
      

      {/* <Typography theme="primary" variant="h1" component="h2">
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
      </Typography> */}
    </>
  )
}
