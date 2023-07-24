import Head from "next/head";
import Format from "../layout/format";
import OptionWithEdit from "../components/editslot.js";

const pos = {cca: "SMB",
             comm: 'Logistics',
             lev: 'maincomm'};

//all available timeslots
const allslots = [ { date: 'Tuesday 3rd September',
              avail: true,
              slots : [{ bookedBy: 'Amanda',
               time: '18.00 - 18.15'}, 
              { bookedBy: null,
               time: '18.15 - 18.30'},
               { bookedBy: null,
               time: '18.30 - 18.45'}, 
              { bookedBy: 'David',
               time: '18.45 - 19.00'},
               { bookedBy: 'Eric',
               time: '19.00 - 19.15'}, 
              { bookedBy: 'Fiona',
               time: '19.15 - 19.30'},
               { bookedBy: null,
               time: '19.30 - 19.45'}, 
              { bookedBy: null,
               time: '19.45 - 20.00'}]}
               , { date: 'Wednesday 4th September',
              avail: true,
              slots : [{ bookedBy: 'Amanda',
               time: '18.00 - 18.15'}, 
              { bookedBy: 'Bobby',
               time: '18.15 - 18.30'},
               { bookedBy: 'Caryn',
               time: '18.30 - 18.45'}, 
              { bookedBy: 'David',
               time: '18.45 - 19.00'},
               { bookedBy: null,
               time: '19.00 - 19.15'}, 
              { bookedBy: 'Fiona',
               time: '19.15 - 19.30'},
               { bookedBy: null,
               time: '19.30 - 19.45'}, 
              { bookedBy: 'Irfan',
               time: '19.45 - 20.00'}]}
               , { date: 'Thursday 4th September',
               avail: true,
               slots : [{ bookedBy: null,
                time: '18.00 - 18.15'}, 
               { bookedBy: 'Bobby',
                time: '18.15 - 18.30'},
                { bookedBy: 'Caryn',
                time: '18.30 - 18.45'}, 
               { bookedBy: null,
                time: '18.45 - 19.00'},
                { bookedBy: 'Eric',
                time: '19.00 - 19.15'}, 
               { bookedBy: 'Fiona',
                time: '19.15 - 19.30'},
                { bookedBy: null,
                time: '19.30 - 19.45'}, 
               { bookedBy: 'Irfan',
                time: '19.45 - 20.00'}]
               }
               , { date: 'Friday 5th September',
               avail: false,
               slots : [{ bookedBy: 'Amanda',
                time: '18.00 - 18.15'}, 
               { bookedBy: 'Bobby',
                time: '18.15 - 18.30'},
                { bookedBy: 'Caryn',
                time: '18.30 - 18.45'}, 
               { bookedBy: 'David',
                time: '18.45 - 19.00'},
                { bookedBy: 'Eric',
                time: '19.00 - 19.15'}, 
               { bookedBy: 'Fiona',
                time: '19.15 - 19.30'},
                { bookedBy: 'Harry',
                time: '19.30 - 19.45'}, 
               { bookedBy: 'Irfan',
                time: '19.45 - 20.00'}]
               }
]

export default function manageSlot() {
  return (
    <>
      <Head>
        <title>Interview slots</title>
      </Head>
      <Format>
  <h1 className="text-center mt-12 font-semibold text-3xl">Manage your interview slots</h1>
  <h1 className="text-center mt-2 font-semibold text-3xl">for {pos.cca} {pos.comm} {pos.lev}</h1>
  <div className="container mx-auto my-12 sm:flex-row items-center justify-center gap-4 max-w-4xl">
    {allslots.filter(x => x.avail).map((x, index) => (
      <div className="mx-6 mb-10" key={index}>
        <p className="mt-10 text-2xl font-semibold tracking-tight text-white text-center">{x.date}</p>
        <div className="container mx-auto sm:flex-row items-center justify-center gap-4 max-w-4xl">
          {x.slots.filter(slot => slot.bookedBy !== null).map((y, idx) => (
            <OptionWithEdit {...y} key={idx} />
          ))}
        </div>
      </div>
    ))}
  </div>
</Format>
    </>
  );
}