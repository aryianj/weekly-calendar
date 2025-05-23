import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [timeZone, setTimeZone] = useState("PST");
  const [showHelp, setShowHelp] = useState(false);
  const [showColors, setShowColors] = useState(true);
  const [dates, setDates] = useState([]);
  const [month, setMonth] = useState('');
  let nodeURL = import.meta.env.NODE_URI;

  useEffect(() => {
    const today = new Date();

    const sunday = today.getDate() - today.getDay(); 
    const weeksDates = [];

    setMonth(today.toLocaleString('default', { month: 'long' }));

    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(sunday + i);
      weeksDates.push(day.getDate());
    }
    setDates(weeksDates);

    async function trying() {
      const response = await fetch(`${nodeURL}/api/events/`);
      console.log(await response.json());

    }
    trying();
  }, []);

  return (
    <>
      <div className='flex sm:mt-0 md:mt-20 lg:mt-0 mt-10 sm:h-screen sm:w-screen sm:bg-gradient-to-b sm:from-cyan-200 sm:to-sky-50 items-center justify-center'>
        <div className='flex flex-col justify-center bg-white sm:h-180 sm:w-360 max-w-full rounded-3xl sm:border-1 lg:border-cyan-600'>
          <div className="flex flex-row justify-end mx-15">
            <button className='ml-0 m:self-auto self-center border-1 rounded-3xl px-3 sm:mb-0 mx-4 mb-4 py-1 h-fit w-fit' onClick={() => setTimeZone(timeZone === "PST" ? "EST" : "PST")}>{timeZone}</button>
            <button className='ml-0 m:self-auto self-center border-1 rounded-3xl px-3 sm:mb-0 mb-4 py-1 h-fit w-fit' onClick={() => setShowColors(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" /></svg></button>
            <button className='ml-0 m:self-auto self-center rounded-3xl px-3 sm:mb-0 mb-4 py-1 h-fit w-fit' onClick={() => setShowHelp(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" className="size-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg></button>
          </div>
          <h1 id="header" className='sm:ml-40 sm:text-left text-center sm:text-7xl text-4xl'>Weekly Aryian <span id="month" className='text-lg'>{month}</span></h1>
          <div className='flex flex-col justify-center items-center sm:mt-0 mt-4 sm:mx-0 mx-4'>
            <div className="grid sm:grid-cols-7 grid-cols-1 gap-4 sm:w-auto w-full border-1 rounded-3xl p-3">
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>SUNDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
                  <p></p>
                  {/*<ul className='list-disc pl-1'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-green-700 rounded-full"></span>
                      Hanging Out
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "6PM-2AM" : "9PM-5AM"}</p>
                  </ul> 
                  <div className="flex-grow sm:h-23"></div> */}
                  <p className='text-sm'>{dates[0]}</p>
                </div>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>MONDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
                  <ul className='list-disc pl-1'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-red-400 rounded-full"></span>
                      Work
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "10AM-6PM" : "1PM-9PM"}</p>
                  </ul>
                  <p className='text-sm'>{dates[1]}</p>
                </div>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>TUESDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
                  <ul className='list-disc pl-1'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-green-700 rounded-full"></span>
                      Hanging Out
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "All Day" : "All Day"}</p>
                    {/*<li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-sky-200 rounded-full"></span>
                      Thunderbolts
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "3PM-5:30PM" : "6PM-8:30PM"}</p>*/}
                  </ul>
                  <p className='text-sm'>{dates[2]}</p>
                </div>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>WEDNESDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
                  <ul className='list-disc pl-1'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-red-400 rounded-full"></span>
                      Work
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "11AM-7PM" : "2PM-10PM"}</p>
                  </ul>
                  <p className='text-sm'>{dates[3]}</p>
                </div>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>THURSDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
                <p></p>
                  {/*<ul className='list-disc pl-1'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-sky-200 rounded-full"></span>
                      Sinners IMAX
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "?-?" : "?-?"}</p>
                  </ul>*/}
                  <p className='text-sm'>{dates[4]}</p>
                </div>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>FRIDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
                  <p></p>
                  {/*<ul className='list-disc pl-1'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-green-100 rounded-full"></span>
                      Showcase
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "12PM-3PM" : "3PM-6PM"}</p>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-violet-200 rounded-full"></span>
                      Dinner*
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "3PM-5PM" : "6PM-8AM"}</p>
                  </ul>*/}
                <p className='text-sm'>{dates[5]}</p>
                </div>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>SATURDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
                  <ul className='list-disc pl-1'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-red-400 rounded-full"></span>
                      Work
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "8AM-4PM" : "11AM-7PM"}</p>
                  </ul>
                  <p className='text-sm'>{dates[6]}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:gap-2 gap-4 border-1 rounded-3xl p-3 sm:w-335 w-full mt-6">
              <div className="border-1 p-3 sm:h-auto h-90 rounded-3xl">
                <h1 className='text-xl'>Notes</h1>
                  <p className='underline text-sm'>Sorry for the latest update. Nothing going on in my life recently
                    besides being out of school. Have a great week!
                </p>
              </div>
            </div>
            {showHelp && (
              <div className="absolute border-1 p-3 sm:h-45 sm:w-sm h-90 justify-center bg-white rounded-3xl">
                <div className="flex justify-between">
                  <h1 className='text-xl'>Help</h1>
                  <button className='items-center' onClick={() => setShowHelp(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  </button>
                </div>
                <p className='underline text-sm'>
                  If there is an asterisk, please text me to figure out if I am available. Click the PST button
                  to see the time in EST and vice-versa. I will update this on a weekly basis or sooner if some-
                  thing arises. I made this with React, Tailwind, and Vercel. I designed this in Figma.
                </p>
              </div>
            )}
            {showColors && (
              <div className="absolute border-1 p-3 sm:h-45 sm:w-sm h-90 justify-center bg-white rounded-3xl">
                <div className="flex justify-between">
                  <h1 className='text-xl'>Your Categories</h1>
                  <button className='items-center' onClick={() => setShowColors(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    </button>
                </div>
                 <ul className='list-disc pl-1'>
                   {/*<li className="flex items-center gap-2">
                     <span className="w-3 h-3 border-1 border-black bg-sky-200 rounded-full"></span>
                     Intro to Film Studies
                   </li>
                   <li className="flex items-center gap-2">
                     <span className="w-3 h-3 border-1 border-black bg-green-100 rounded-full"></span>
                     Senior Team Project
                   </li>
                   <li className="flex items-center gap-2">
                     <span className="w-3 h-3 border-1 border-black bg-cyan-700 rounded-full"></span>
                     Meeting with Sponsors & Project Partners
                   </li>
                   <li className="flex items-center gap-2">
                     <span className="w-3 h-3 border-1 border-black bg-teal-600 rounded-full"></span>
                     Meeting with Project Partners
                   </li>*/}
                   <li className="flex items-center gap-2">
                     <span className="min-w-3 min-h-3 border-1 border-black bg-violet-200 rounded-full"></span>
                     Fun Life Events
                   </li>
                   <li className="flex items-center gap-2">
                     <span className="min-w-3 min-h-3 border-1 border-black bg-green-700 rounded-full"></span>
                     Eshaan Related
                   </li>
                   <li className="flex items-center gap-2">
                     <span className="min-w-3 min-h-3 border-1 border-black bg-red-400 rounded-full"></span>
                     Work
                   </li>
                 </ul>
             </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
