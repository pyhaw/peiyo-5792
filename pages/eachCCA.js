import Head from "next/head"
import Format from "../layout/format"

const cca = 
  {
    name: "Danshers",
    member: 40,
  }

export default function CCApage() {
  return (
    <>
      <Head>
        <title>Danshers</title>
      </Head>
      <Format>
      <main>
        <h1 class="text-center text-3xl bg-orange-300 p-5 uppercase font-bold text-orange-900" >{cca.name}</h1>
        <div className="grid md:grid-cols-12 gap-4 mx-20 px-10 mt-9 mb-4">
          <div className="col-span-3">
            <button class="bg-orange-900 hover:bg-orange-700 text-white font-bold py-2 px-16 border border-orange-700 rounded mb-6">
              Sign up
            </button>
            <p> Member : {cca.member} </p>
          </div>
          <div className="col-span-9">
          <section>
            <h2 class="text-xl font-semibold">About Us</h2>
            <p className="pt-2 text-lg">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
          </section>
          <section>
            <h2 class="text-xl font-semibold mt-6">Our Events</h2>
            <p className="pt-2 text-lg">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
          </section>
          </div>
        </div>
      </main>
      </Format>
    </>
  )
}