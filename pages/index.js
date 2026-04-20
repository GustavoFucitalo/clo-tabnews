import { useState } from "react";

export default function Home() {
    const [favBand, setFavBand] = useState("")

    const handlerClear = () => {
        setFavBand('');
        
    }

    return (
        <div>
            <input 
                type="text"
                value={favBand}
                placeholder="Type yout favorite band"
                onChange={(e) => setFavBand(e.target.value)}
            />
            <h1>Your favorite band is {favBand}</h1>
        <button onClick={handlerClear}>
            Clear
        </button>
        </div>
    );
}
