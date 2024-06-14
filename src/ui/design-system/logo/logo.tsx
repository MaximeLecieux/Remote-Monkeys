interface Props {
    size?: "very-small"
        | "small"
        | "medium"
        | "large"
}

export const Logo = ({
    size = "medium"
} : Props) => {

    let sizeLogo: number

    switch (size) {
        case "very-small":
            sizeLogo = 34
            break;
        case "small":
            sizeLogo = 61
            break;
        case "medium": // Default
            sizeLogo = 88
            break;
        case "large":
            sizeLogo = 140
            break;
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width={sizeLogo}><linearGradient id="cX29ZNhDlWZrvi4huKePza" x1="32" x2="32" y1="8.375" y2="54.627" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#cX29ZNhDlWZrvi4huKePza)" d="M52,8H12c-1.654,0-3,1.346-3,3v31c0,1.654,1.346,3,3,3h14v2h-9 c-0.297,0-0.578,0.132-0.769,0.36l-5,6c-0.248,0.298-0.302,0.713-0.137,1.064C11.259,54.775,11.612,55,12,55h40 c0.388,0,0.741-0.225,0.905-0.576c0.165-0.352,0.111-0.767-0.137-1.064l-5-6C47.578,47.132,47.297,47,47,47h-9v-2h14 c1.654,0,3-1.346,3-3V11C55,9.346,53.654,8,52,8z M46.531,49l3.334,4h-35.73l3.334-4H26v2h12v-2H46.531z M36,49h-8v-4h8V49z M53,42 c0,0.551-0.448,1-1,1H38H26H12c-0.552,0-1-0.449-1-1V11c0-0.551,0.448-1,1-1h40c0.552,0,1,0.449,1,1V42z"/><linearGradient id="cX29ZNhDlWZrvi4huKePzb" x1="32" x2="32" y1="8.375" y2="54.627" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#cX29ZNhDlWZrvi4huKePzb)" d="M13,41h38V12H13V41z M15,14h34v25H15V14z"/><linearGradient id="cX29ZNhDlWZrvi4huKePzc" x1="22.678" x2="22.678" y1="17.314" y2="35.685" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#cX29ZNhDlWZrvi4huKePzc)" d="M26.271 17.314L17.627 26.5 26.271 35.686 27.729 34.314 20.373 26.5 27.729 18.686z"/><linearGradient id="cX29ZNhDlWZrvi4huKePzd" x1="41.322" x2="41.322" y1="17.314" y2="35.685" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#cX29ZNhDlWZrvi4huKePzd)" d="M36.271 18.686L43.627 26.5 36.271 34.314 37.729 35.686 46.373 26.5 37.729 17.314z"/></svg>
        </div>
    )
}