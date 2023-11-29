import { useState } from "react"
import { Map } from "./Map/Map"
import { ContextProvider } from "./Context/Context";

export const App = () => {

    const [location, setLocation] = useState(null);
    const [myLocation, setMyLocation] = useState(null);

    return (<div className="app">
        <ContextProvider>
            <Map  />
        </ContextProvider>
    </div>)
}