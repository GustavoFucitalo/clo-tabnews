import { useState } from "react";

export default function Home() {
    const [favBand, setFavBand] = useState("")

    return (
        <div>
            <input 
                type="text"
                placeholder="Type yout favorite band"
                onChange={(e) => setFavBand(e.target.value)}
            />
            <h1>Your favorite band is {favBand}</h1>
        </div>
    );
}
