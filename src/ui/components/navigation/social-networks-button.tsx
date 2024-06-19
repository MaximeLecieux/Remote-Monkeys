import { Button } from "@/ui/design-system/button/button"
import { footerSocialNetworksLinks } from "./app-links"
import { v4 as uuidv4 } from "uuid"
import clsx from "clsx"
import { RiFacebookBoxFill } from "react-icons/ri"

interface Props {
    theme?: "gray"
        | "accent"
        | "secondary"
    className?: string
}

export const SocialNetworksButton = ({
    className,
    theme = "accent"
} : Props) => {

    const iconList = footerSocialNetworksLinks.map((socialNetwork) => (
        <Button 
            key={uuidv4()}
            variant="icon"
            iconTheme={theme}
            icon={{
                icon : socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill
            }}
            baseUrl={socialNetwork.baseUrl}
            linkType={socialNetwork.type}
        />
    ))

    return(
        <div className={clsx(className, "flex items-center gap-2.5")}>
            {iconList}
        </div>
    )
}