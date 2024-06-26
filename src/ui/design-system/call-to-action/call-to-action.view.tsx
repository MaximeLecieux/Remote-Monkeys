import { Container } from "@/ui/components/container/container"
import { Typography } from "../typography/typography"
import { Button } from "../button/button"
import { LinkTypes } from "@/lib/link-type"
import Image from "next/image"

export const CallToActionView = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            <Container
                className="py-20"
            >
                <div className="relative z-10 max-w-3xl space-y-5">
                    <Typography
                        variant="h2"
                        theme="white"
                        component="h2"
                    >
                        N'attend pas pour développer tes compétences...
                    </Typography>
                    <div>
                        <Button
                            baseUrl="/#"
                            linkType={LinkTypes.EXTERNAL}
                            variant="success"
                        >
                            Formation React.js gratuite
                        </Button>
                    </div>
                </div>
                <div>
                    <Image 
                        width={1210}
                        height={1210}
                        src="/assets/svg/bomba.svg"
                        alt="Une illustration d'une bombe"
                        className="absolute -bottom-[470px] right-0"
                    />
                </div>
            </Container>
        </div>
    )
}