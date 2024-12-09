//ChangePA = change Page Anime
import { createContext, useState} from "react"

export const contextChange = createContext(null)

export default function ChangePageAnime({children}){
    const [changePA,setChangePA] = useState(true)

    return(
        <contextChange.Provider value={{changePA,setChangePA}}>
            {children}
        </contextChange.Provider>
        
    )

}