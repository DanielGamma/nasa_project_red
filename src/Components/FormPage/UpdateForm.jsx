
export default function UpdateForm (){


    
    return (
        <>
            <div className=" flex flex-col items-center bg-baghome pt-20 pb-10 ">
                <form  className="flex flex-col" >
                    <label className="text-center pb-2 text-white"  name ="etiquetas">Name:</label>
                    <input type="text"  name="meteoro"  className="rounded-xl bg-baghome border border-rosado" required placeholder="Aachen"/>
                    <label className="text-center pb-2 text-white" >Id:</label>
                    <input type="text" name="meteoro"  className=" rounded-xl bg-baghome border border-rosado" required placeholder="1"/>
                    <label className="text-center pb-2 text-white" >Class:</label>
                    <input type="text" name="meteoro"  className="rounded-xl bg-baghome border border-rosado" required placeholder="L5"/>
                    <label className="text-center pb-2 text-white">Mass:</label>
                    <input type="text" name="meteoro" className="rounded-xl bg-baghome border border-rosado" required placeholder="21"/>
                    <label className="text-center pb-2 text-white">Date:</label>
                    <input type="text" name="meteoro"  className="rounded-xl bg-baghome border border-rosado" required placeholder="01/01/1880"/>
                    <label className="text-center pb-2 text-white">Latitude:</label>
                    <input type="text" name="meteoro" className="rounded-xl bg-baghome border border-rosado " required placeholder="50.775000"/>
                    <label className="text-center pb-2 text-white">Longitude:</label>
                    <input type="text" name="meteoro" className="rounded-xl bg-baghome border border-rosado " required placeholder="6.083330"/>
                    <input type="submit" value="Edit" className="text-white rounded-xl border border-rosado mt-4 w-20 items-center" />
                </form>

            </div>
            </>

    )
}