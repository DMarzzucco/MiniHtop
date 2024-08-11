import React from "react";
import Date from "../date/dt";
import { input_props } from "@/ts";

const In = new Date()
export default class Comms {

    comp_tarea: React.FC = () => {
        return (
            <textarea placeholder="Message" className=" p-2 m-1 border border-slate-400 rounded-lg" />
        )
    }
    comp_input: React.FC<input_props> = ({ type, placeholder, name }) => {
        return (
            <input
                className=" p-2 m-1 border border-slate-400 rounded-lg"
                type={type}
                placeholder={placeholder}
                name={name}
            />
        )
    }

    templateResolutions: React.FC = () => {
        return (
            <div className="flex flex-col justify-center items-center p-2 w-full h-300 bg-slate-400 text-slate-900 m-2 rounded-lg ">
                <h1 className="text-xl font-bold ">LOGO</h1>
                <p className="text-ligth text-xs text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

        )
    }
    list_comps: React.FC = () => {
        return (
            <div className="p-2 list-disc flex flex-col items-start ">
                {In.list_problem.map((pre, index) => (
                    <div key={index} className="flex flex-col justify-center items-start m-1 text-14">
                        <h3 className="font-bold text-blue-500 mx-1 ml-1">{pre.title}</h3>
                        <div className="p-2">
                            <p>{pre.cont}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    detail_comps: React.FC = () => {
        return (
            <details className="w-full bg-slate-300 text-slate-800 p-1 rounded-lg
            hover:border hover:border-blue-500 cursor-pointer my-2">
                <summary className="text-2xl list-none font-bold p-2">
                    Problemas habituales que quizas tengas.
                </summary>
                <div>
                    <this.list_comps />
                </div>
            </details>
        )
    }
}