import { useState } from "react"
import { Map } from "./Map/Map"

export const App = () => {

    const [location, setLocation] = useState(null);

    return (<div className="app">
        <Map location={location} setLocation={setLocation} />
    </div>)
}