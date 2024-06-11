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
    icon?: any
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
            variantStyle = ""
            break
    }

    switch (size) {
        case "small": 
            sizeStyle = "text-caption3 font-medium py-[12px] px-[14px]"
            break
        case "medium": // Default
            sizeStyle = "text-caption2 font-medium py-[15px] px-[18px]"
            break
        case "large":
            sizeStyle = "text-caption1 font-medium py-[18px] px-[22px]"
            break
    }

    return (
        <>
            <button
                type = "button"
                className={clsx(
                    variantStyle,
                    sizeStyle,
                    iconSize,
                    ""
                )}
                onClick={() => console.log('click')}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}