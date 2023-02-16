import { useEffect } from "react";


export default function CreateForm({ form,setForm }) {

 const handleOnSubmit = (meteorito) => {
        // meteorito.preventDefault();
        // setForm(prev =>[ ... prev, meteorito.target.meteoro.value] )
        //     localStorage.setItem("meteorite", JSON.stringify(setForm));
        

 }

    return (
        <>
            <div className=" flex flex-col items-center bg-baghome pt-20 pb-10 ">
                <form onSubmit={handleOnSubmit} className="flex flex-col" >
                    <label className="text-center pb-2 text-white"  name ="etiquetas">Name:</label>
                    <input type="text"  name="meteoro"  className="rounded-xl bg-baghome border border-rosado" required />
                    <label className="text-center pb-2 text-white" >Id:</label>
                    <input type="text" name="meteoro"  className=" rounded-xl bg-baghome border border-rosado" required />
                    <label className="text-center pb-2 text-white" >Class:</label>
                    <input type="text" name="meteoro"  className="rounded-xl bg-baghome border border-rosado" required />
                    <label className="text-center pb-2 text-white">Mass:</label>
                    <input type="text" name="meteoro" className="rounded-xl bg-baghome border border-rosado" required />
                    <label className="text-center pb-2 text-white">Date:</label>
                    <input type="text" name="meteoro"  className="rounded-xl bg-baghome border border-rosado" required />
                    <label className="text-center pb-2 text-white">Latitude:</label>
                    <input type="text" name="meteoro" className="rounded-xl bg-baghome border border-rosado " required />
                    <label className="text-center pb-2 text-white">Longitude:</label>
                    <input type="text" name="meteoro" className="rounded-xl bg-baghome border border-rosado " required />
                    <input type="submit" value="Create" className="m-14 text-white rounded-xl border border-rosado mt-4 w-20" />
                </form>

            </div>

        </>
    )
}