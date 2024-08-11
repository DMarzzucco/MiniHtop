import Comms from "@/components/common/common";
import Form from "@/components/form/form";

export default function Home() {
  const In = new Comms()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col justify-center items-center h-screen w-full">
        <h1 className="text-6xl font-bold text-yellow-600">
          Transforma tu Negocio con Estrategias de Marketing Digital Efectivas
        </h1>
        <h2 className="font-light text-slate-300 text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
      </section>

      <section className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center h-300 w-500 border border-slate-500 bg-slate-300 ">
          <h1>Video</h1>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full">
        <div className="bg-black text-slate-200 font-light flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold ">
            ¿Todos estos problemas te suenan familiares?</h1>
            {/* <In.list_comps/> */}
            <In.detail_comps/>
        </div>
        <div className=" w-full flex flex-col justify-center items-center ">
          <In.templateResolutions />
          <In.templateResolutions />
          <In.templateResolutions />
          <In.templateResolutions />
        </div>
      </section>
      <Form/>
    </main>
  );
}
