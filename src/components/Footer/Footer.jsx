
export default function Footer() {

    return (
        <footer className="flex  pt-5 pb-5 bg-navColor justify-center gap-5 text-white">
            <div className="  ">
                <h3 className=" text-lg text-rosado">Contact</h3>
                <p>nasa.api@nasa-api.com</p>
                <p>Work with us</p>
            </div>

            <div className="h-25 w-px bg-rosado"></div>

            <div className="">
                <h3 className=" text-lg text-rosado">About</h3>
                <p>lorem ipsum dolor</p>
                <p>lorem ipsum dolor</p>
                <p>lorem ipsum dolor</p>
            </div>

            <div className="h-25 w-px bg-rosado"></div>

            <div className=" ">
                <h3 className=" text-lg text-rosado">Documentation</h3>
                <p>API documentation.</p>
            </div>
        </footer>

    )
}