
export default function Footer() {

    return (
        <div className="flex  pt-5 pb-5 bg-purple-900 justify-center gap-5">
            <div className="  ">
                <h3 className=" text-lg text-rose-500">Contact</h3>
                <p>nasa.api@nasa-api.com</p>
                <p>Work with us</p>
            </div>

            <div className="h-25 w-px bg-rose-500"></div>

            <div className="">
                <h3 className=" text-lg text-rose-500">About</h3>
                <p>lorem ipsum dolor</p>
                <p>lorem ipsum dolor</p>
                <p>lorem ipsum dolor</p>
            </div>

            <div className="h-25 w-px bg-rose-500"></div>

            <div className=" ">
                <h3 className=" text-lg text-rose-500 ">Documentation</h3>
                <p>API documentation.</p>
            </div>
        </div>

    )
}