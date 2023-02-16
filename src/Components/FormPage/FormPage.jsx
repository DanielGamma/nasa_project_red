import { useState } from "react"
import CreateForm from "./CreateForm"


export default function FormPage() {

    const [form , setForm] = useState ([])

    return ( 
         
        < CreateForm setForm = {setForm} form = {form}/>
        
        )
}