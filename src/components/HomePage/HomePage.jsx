import { useEffect, useState } from "react";

export default function HomePage() {
    const [nasa, setnasa] = useState("")

    useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(data => setnasa(data))
    }, []);

    return (<>
          <h4></h4>
          <img src="" alt="" />
          <p></p>
    </>
    )

}
