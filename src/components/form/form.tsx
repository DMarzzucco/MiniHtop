import React from "react"
import Comms from "../common/common"

export default function Form() {
    const In = new Comms()
    return (
        <section className="flex h-screen justify-center items-center">
            <form action="" className="flex flex-col justify-center items-center p-3 border border-slate-400 rounded-lg ">
                <In.comp_input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                />
                <In.comp_input
                    type="text"
                    placeholder="Email"
                    name="mail"
                />
                <In.comp_input
                    type="text"
                    placeholder="Context"
                    name="context"
                />
                <In.comp_tarea/>
                <button type="submit">SEND</button>
            </form>
        </section>
    )
}

