import { Container } from "@/ui/components/container/container"
import { v4 as uuidv4} from "uuid"
import Image from "next/image"
import { Typography } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"
import { RiArrowRightLine } from "react-icons/ri"
import { SocialNetworksButton } from "@/ui/components/navigation/social-networks-button"

interface FeaturesListIntercace { // Ici on n'exporte pas le typage car il n'est utilisé que dans ce composant
    imagePath: string
    imageAlt: string
    title: string
    description: string
}

const featuresData:FeaturesListIntercace[] = [
    {
        imagePath: "/assets/svg/floppy.svg",
        imageAlt: "Illustration",
        title: "Ressources",
        description: "Consulte et partage des ressources pour les devs"
    },
    {
        imagePath: "/assets/svg/gamepad.svg",
        imageAlt: "Illustration",
        title: "Entrainement",
        description: "Entraîne-toi à devenir meilleur et trouve de l’inspiration"
    },
    {
        imagePath: "/assets/svg/speaker.svg",
        imageAlt: "Illustration",
        title: "Visibilité",
        description: "Expose tes projets et crée toi des opportunités !"
    },
    {
        imagePath: "/assets/svg/compass.svg",
        imageAlt: "Illustration",
        title: "Relations",
        description: "Connecte-toi avec des devs web et booste ta carrière !"
    },
]

export const FeaturedView = () => {

    const featuredList = featuresData.map((feature) => (
        <div key={uuidv4()} className="bg-white rounded flex flex-col items-center justify-center p-7">
            <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
                <Image 
                    src={feature.imagePath}
                    alt={feature.imageAlt}
                    className="object-scale-down blur-2xl"
                    fill={true}
                />
                <Image 
                    src={feature.imagePath}
                    alt={feature.imageAlt}
                    className="object-scale-down"
                    fill={true}
                />
            </div>
            <Typography
                variant="lead"
                weight="medium"
                component="h3"
                className="text-center mb-2.5"
            >
                {feature.title}
            </Typography>
            <Typography
                variant="body-base"
                theme="gray"
                component="p"
                className="text-center"
            >
                {feature.description}
            </Typography>
        </div>
    ))

    return (
        <div className="bg-gray-300">
            <Container
                className="grid grid-cols-12 gap-24 py-24"
            >
                <div className="grid grid-cols-2 gap-7 col-span-7">
                    {featuredList}
                </div>
                <div className="flex flex-col justify-between col-span-5 gap-10">
                    <div className="">
                        <Typography
                            variant="h2"
                            component="h2"
                            className="mb-5"
                        >
                            L'endroit le plus cool pour devenir développeur
                        </Typography>
                        <Typography
                            variant="body-lg"
                            component="p"
                            theme="gray"
                            className="mb-8"
                        >
                            Du partage, des connexions et des formations notre app gère tout ça pour toi. 
                            Rejoins la communauté et grimpe en grade. Let's go !
                        </Typography>
                        <Button
                            variant="secondary"
                            baseUrl="/connexion/inscription"
                            icon={{icon: RiArrowRightLine}}
                            iconPosition="right"
                        >
                            Commencer
                        </Button>
                    </div>
                    <div className="">
                        <Typography
                            variant="caption3"
                            component="div"
                            theme="gray"
                            className="mb-4"
                        >
                            Nos réseaux sociaux
                        </Typography>
                        <SocialNetworksButton />
                    </div>
                </div>
            </Container>
        </div>
    )
}