import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
export default function HomePage() {
    const [nasa, setnasa] = useState("")

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=5gN4CscwfihAlYWkLDDKzjQ8zEY2zYFjKOTbJXXo")
            .then(res => res.json())
            .then(data => setnasa(data))
            .catch(e => console.log(e))
    }, []);

    return (
    <>
        <div className=" flex  flex-col items-center bg-baghome pt-20 pb-10">
            <h2 className=" text-lg text-slate-300  pb-5 ">{nasa.title}</h2>
            <img className=" w-2/4" src={nasa.url} alt="" />
            <p className=" text-white pt-5 w-2/4">{nasa.explanation}</p>
        </div>
        <Footer />
    </>
    )
}
