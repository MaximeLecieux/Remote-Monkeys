import { useState } from "react"

interface Props {
    initial?: boolean
}

export const useToogle = ({initial = false}: Props = {}) => {

    const [value, setValue] = useState<boolean>(initial)

    const toogle = () => {
        setValue(!value)
    }
    
    return {
        value,
        setValue,
        toogle
    }
}