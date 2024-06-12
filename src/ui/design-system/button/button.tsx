import { IconProps } from "@/types/iconProps"
import clsx from "clsx"

interface Props {
    size?: "small"
        | "medium"
        | "large"
    variant?: "accent"
        | "secondary"
        | "outline"
        | "disabled"
        | "icon"
    icon?: IconProps
    iconTheme?: "accent"
        | "secondary"
        | "gray"
    iconPosition?: "left" | "right"
    disabled?: boolean
    isLoading?: boolean
    children?: React.ReactNode
}

export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children
}: Props) => {

    let variantStyle: string = "", sizeStyle: string = "", iconSize: number = 0

    switch (variant) {
        case "accent": // Default
            variantStyle = "bg-primary hover:bg-primary-400 text-white rounded"
            break
        case "secondary":
            variantStyle = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded"
            break
        case "outline":
            variantStyle = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded"
            break
        case "disabled":
            variantStyle = "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed"
            break
        case "icon":
            if(iconTheme === "accent") { // Default
                variantStyle = "bg-primary hover:bg-primary-400 text-white rounded-full"
            } else if (iconTheme === "secondary"){
                variantStyle = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full"
            } else if (iconTheme === "gray"){
                variantStyle = "bg-gray-700 hover:bg-gray-600 text-white rounded-full"
            }
            break
    }

    switch (size) {
        case "small": 
            sizeStyle = `text-caption3 font-medium ${
                variant === "icon" ? "flex items-center justify-center w-[40px] h-[40px]" : "py-[12px] px-[14px]"
            }`
            iconSize = 18
            break
        case "medium": // Default
            sizeStyle = `text-caption2 font-medium ${
                variant === "icon" ? "flex items-center justify-center w-[50px] h-[50px]" : "py-[15px] px-[18px]"
            }`
            iconSize = 20
            break
        case "large":
            sizeStyle = `text-caption1 font-medium ${
                variant === "icon" ? "flex items-center justify-center w-[60px] h-[60px]" : "py-[18px] px-[22px]"
            }`
            iconSize = 24
            break
    }

    return (
        <>
            <button
                type = "button"
                className={clsx(
                    variantStyle,
                    sizeStyle,
                    iconSize
                )}
                onClick={() => console.log('click')}
                disabled={disabled}
            >
                {icon && variant === "icon" ? (
                    <icon.icon size={iconSize}/> // Récupère l'objet icone passé en paramètre
                ) : (
                     <> 
                        <div className={clsx(icon && "flex items-center gap-1")}>
                        {/* {Ici on place le children en fonction de la position indiqué en paramètre} */}

                        {icon && iconPosition === "left" && ( // Le deuxième && remplace ? "" : ""
                            <icon.icon size={iconSize}/>
                        )}

                        {children}

                        {icon && iconPosition === "right" && (
                            <icon.icon size={iconSize}/>
                        )}
                        </div>
                    </>
                )}

            </button>
        </>
    )
}