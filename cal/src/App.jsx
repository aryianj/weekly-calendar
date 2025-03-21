import { useEffect, useState } from 'react'
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import './App.css'

function App() {
  const [timeZone, setTimeZone] = useState("PST");
  const [dates, setDates] = useState([]);
  const [month, setMonth] = useState('');

  useEffect(() => {
    const today = new Date();

    const sunday = today.getDate() - today.getDay(); 
    const weeksDates = [];

    setMonth(today.toLocaleString('default', { month: 'long' }));

    for (let i = 0; i < 7; i++) {
      const day = new Date(today.setDate(sunday + i));
      weeksDates.push(day.getDate());
    }

    setDates(weeksDates);
  }, []);

  return (
    <>
      {(isDesktop || isTablet) && (
      <div className='flex h-screen w-screen bg-gradient-to-b from-cyan-200 to-sky-50 items-center justify-center'>
        <div className='flex flex-col justify-center bg-white h-180 w-360 rounded-3xl border-1 border-cyan-600'>
          <button className='ml-300 border-1 rounded-3xl px-3 py-1 h-fit w-fit' onClick={() => setTimeZone(timeZone === "PST" ? "EST" : "PST")}>{timeZone}</button>
          <h1 id="header" className='ml-40 text-7xl'>Weekly Aryian <span id="month" className='text-lg'>{month}</span></h1>
          <div className='flex flex-col justify-center items-center'>
            <div className="grid grid-cols-7 gap-4 border-1 rounded-3xl p-3">
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>SUNDAY</h1>
                <p className='text-sm pt-24'>{dates[0]}</p>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>MONDAY</h1>
                <ul className='list-disc pl-1'>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border-1 border-black bg-red-400 rounded-full"></span>
                    Work
                  </li>
                  <p className='text-sm'>{timeZone === "PST" ? "10AM-6PM" : "1PM-9PM"}</p>
                </ul>
                <p className='text-sm pt-13'>{dates[1]}</p>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>TUESDAY</h1>
                <ul className='list-disc pl-1'>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border-1 border-black bg-cyan-700 rounded-full"></span>
                    Meetings *
                  </li>
                  <p className='text-sm'>{timeZone === "PST" ? "4:30PM-5:30PM" : "7:30PM-8:30PM"}</p>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border-1 border-black bg-sky-200 rounded-full"></span>
                    Class *
                  </li>
                  <p className='text-sm'>{timeZone === "PST" ? "6PM-10PM" : "9PM-1AM"}</p>
                </ul>
                <p className='text-sm pt-2'>{dates[2]}</p>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>WEDNESDAY</h1>
                <ul className='list-disc pl-1'>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border-1 border-black bg-red-400 rounded-full"></span>
                    Work
                  </li>
                  <p className='text-sm'>{timeZone === "PST" ? "11AM-7PM" : "2PM-10PM"}</p>
                </ul>
                <p className='text-sm pt-13'>{dates[3]}</p>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>THURSDAY</h1>
                <ul className='list-disc pl-1'>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border-1 border-black bg-cyan-700 rounded-full"></span>
                    Meetings *
                  </li>
                  <p className='text-sm'>{timeZone === "PST" ? "4:30PM-5:30PM" : "7:30PM-8:30PM"}</p>
                </ul>
                <p className='text-sm pt-13'>{dates[4]}</p>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>FRIDAY</h1>
                <ul className='list-disc pl-1'>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border-1 border-black bg-green-100 rounded-full"></span>
                    Class *
                  </li>
                  <p className='text-sm'>{timeZone === "PST" ? "9AM-9:30AM" : "12PM-12:30PM"}</p>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border-1 border-black bg-teal-600 rounded-full"></span>
                    Meeting *
                  </li>
                  <p className='text-sm'>{timeZone === "PST" ? "9:30AM-10AM" : "12:30PM-1PM"}</p>
                </ul>
                <p className='text-sm pt-2'>{dates[5]}</p>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>SATURDAY</h1>
                <ul className='list-disc pl-1'>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border-1 border-black bg-red-400 rounded-full"></span>
                    Work
                  </li>
                  <p className='text-sm'>{timeZone === "PST" ? "8AM-4PM" : "11AM-7PM"}</p>
                </ul>
                <p className='text-sm pt-13'>{dates[6]}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-1 rounded-3xl p-3 mt-6">
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-xl'>Color Clarifications</h1>
                  <ul className='list-disc pl-1'>
                    <li className="flex items-center gap-2">
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
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-gray-500 rounded-full"></span>
                      If there is an asterisk, that means that the time may run longer or shorter. 
                    </li>
                  </ul>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-xl'>Notes</h1>
                <p className='underline text-sm'>If there is an asterisk, please text me to figure out if I am available. Click the PST button <br />
                to see the time in EST and vice-versa. I will update this on a weekly basis or sooner if some- <br/>  
                thing arises. I made this with React, Tailwind, and Vercel. I designed this in Figma.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      {(isMobile) && (
        <div className="flex sm:h-screen sm:w-max items-center justify-center mt-10">
          <div className="flex flex-col justify-center bg-white max-w-full sm:max-w-[360px] w-full sm:h-[500px] h-full rounded-3xl border-1p-4">
            <button className="self-center sm:ml-32 ml-0 border-1 rounded-3xl px-3 py-1 mb-4 h-fit w-fit" onClick={() => setTimeZone(timeZone === "PST" ? "EST" : "PST")}>
              {timeZone}
            </button>
            <h1 id="header" className="text-center sm:text-7xl text-4xl">
              Weekly Aryian <span id="month" className="text-lg">{month}</span>
            </h1>
            <div className="flex flex-col justify-center items-center mt-4 mx-4">
              <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 sm:gap-6 w-full">
                <div className="border-1 p-3 rounded-3xl">
                  <h1 className="text-center text-xl">SUNDAY</h1>
                  <p className='text-sm pt-18'>{dates[0]}</p>
                </div>
                <div className="border-1 p-3 rounded-3xl">
                  <h1 className='text-center text-xl'>MONDAY</h1>
                  <ul className='list-disc pl-6'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-red-400 rounded-full"></span>
                      Work
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "10AM-6PM" : "1PM-9PM"}</p>
                  </ul>
                  <p className='text-sm pt-10'>{dates[1]}</p>
                </div>
                <div className="border-1 p-3 rounded-3xl">
                  <h1 className='text-center text-xl'>TUESDAY</h1>
                  <ul className='list-disc pl-6'>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border-1 border-black bg-cyan-700 rounded-full"></span>
                    Meetings *
                  </li>
                  <p className='text-sm'>{timeZone === "PST" ? "4:30PM-5:30PM" : "7:30PM-8:30PM"}</p>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 border-1 border-black bg-sky-200 rounded-full"></span>
                    Class *
                  </li>
                  <p className='text-sm'>{timeZone === "PST" ? "6PM-10PM" : "9PM-1AM"}</p>
                </ul>
                <p className='text-sm pt-2'>{dates[2]}</p>
                </div>
                <div className="border-1 p-3 rounded-3xl">
                  <h1 className='text-center text-xl'>WEDNESDAY</h1>
                  <ul className='list-disc pl-6'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-red-400 rounded-full"></span>
                      Work
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "11AM-7PM" : "2PM-10PM"}</p>
                  </ul>
                  <p className='text-sm pt-8'>{dates[3]}</p>
                </div>
                <div className="border-1 p-3 rounded-3xl">
                  <h1 className='text-center text-xl'>THURSDAY</h1>
                  <ul className='list-disc pl-6'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-cyan-700 rounded-full"></span>
                      Meetings *
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "4:30PM-5:30PM" : "7:30PM-8:30PM"}</p>
                  </ul>
                  <p className='text-sm pt-8'>{dates[4]}</p>
                </div>
                <div className="border-1 p-3 rounded-3xl">
                  <h1 className='text-center text-xl'>FRIDAY</h1>
                  <ul className='list-disc pl-6'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-green-100 rounded-full"></span>
                      Class *
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "9AM-9:30AM" : "12PM-12:30PM"}</p>
                  </ul>
                  <p className='text-sm pt-8'>{dates[5]}</p>
                </div>
                <div className="border-1 p-3 rounded-3xl">
                  <h1 className='text-center text-xl'>SATURDAY</h1>
                  <ul className='list-disc pl-6'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-red-400 rounded-full"></span>
                      Work
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "8AM-4PM" : "11AM-7PM"}</p>
                  </ul>
                  <p className='text-sm pt-8'>{datess}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-1 rounded-3xl p-3 mt-6">
                <div className="border-1 p-3 rounded-3xl">
                  <h1 className="text-xl">Color Clarifications</h1>
                  <ul className="list-disc pl-1">
                    <li className="flex items-center gap-2">
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
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-gray-500 rounded-full"></span>
                      If there is an asterisk, that means that the time may run longer or shorter.
                    </li>
                  </ul>
                </div>
                <div className="border-1 p-3 rounded-3xl">
                  <h1 className="text-xl">Notes</h1>
                  <p className="underline text-sm">
                    If there is an asterisk, please text me to figure out if I am available. Click the PST button <br />
                    to see the time in EST and vice-versa. I will update this on a weekly basis or sooner if something arises. <br />
                    I made this with React, Tailwind, and Vercel. I designed this in Figma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
