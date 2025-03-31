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
      const day = new Date(today);
      day.setDate(sunday + i);
      weeksDates.push(day.getDate());
    }
    setDates(weeksDates);
  }, []);

  return (
    <>
      <div className='flex mt-10 sm:mt-0 sm:h-screen sm:w-screen sm:bg-gradient-to-b  sm:from-cyan-200 sm:to-sky-50 items-center justify-center'>
        <div className='flex flex-col justify-center bg-white sm:h-180 sm:w-360 max-w-full rounded-3xl sm:border-1 sm:border-cyan-600'>
          <button className='sm:ml-300 ml-0 m:self-auto self-center border-1 rounded-3xl px-3 sm:mb-0 mb-4 py-1 h-fit w-fit' onClick={() => setTimeZone(timeZone === "PST" ? "EST" : "PST")}>{timeZone}</button>
          <h1 id="header" className='sm:ml-40 sm:text-left text-center sm:text-7xl text-4xl'>Weekly Aryian <span id="month" className='text-lg'>{month}</span></h1>
          <div className='flex flex-col justify-center items-center sm:mt-0 mt-4 sm:mx-0 mx-4'>
            <div className="grid sm:grid-cols-7 grid-cols-1 gap-4 sm:w-auto w-full border-1 rounded-3xl p-3">
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>SUNDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
                  <div className="flex-grow sm:h-23"></div>  
                  <p className='text-sm'>{dates[0]}</p>
                </div>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>MONDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
                  <ul className='list-disc pl-1'>
                    {/*<li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-red-400 rounded-full"></span>
                      Work
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "10AM-6PM" : "1PM-9PM"}</p>
                    */}
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-green-700 rounded-full"></span>
                      Hanging Out
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "1PM" : "4PM"}</p>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-violet-200 rounded-full"></span>
                      j-hope Concert
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "8PM" : "11PM"}</p>
                  </ul>
                  <p className='text-sm'>{dates[1]}</p>
                </div>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>TUESDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
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
                  <ul className='list-disc pl-1'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-cyan-700 rounded-full"></span>
                      Meetings *
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "4:30PM-5:30PM" : "7:30PM-8:30PM"}</p>
                  </ul>
                  <p className='text-sm'>{dates[4]}</p>
                </div>
              </div>
              <div className="border-1 p-3 rounded-3xl">
                <h1 className='text-center text-xl'>FRIDAY</h1>
                <div className="flex flex-col sm:h-40 h-30 justify-between">
                  <ul className='list-disc pl-1'>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-green-100 rounded-full"></span>
                      Midterm *
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "8AM-12:30PM" : "11AM-3:30PM"}</p>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 border-1 border-black bg-teal-600 rounded-full"></span>
                      Meeting *
                    </li>
                    <p className='text-sm'>{timeZone === "PST" ? "9:30AM-10AM" : "12:30PM-1PM"}</p>
                  </ul>
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
            {/**               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-1 rounded-3xl p-3 mt-6">
              <div className="border-1 p-3 h-90 rounded-3xl">
                  <h1 className="text-xl">Notes</h1>
                  <p className="underline text-sm">Midterm went well! Our professor kept us for an extra 20 minutes
                     after it was over to tell us to start using AI and we found out he was grading our weekly meetings
                     by sending the recording to Gemini... WTF. Also, last Tuesday, my professor was did not show up to
                     class for 20 minutes. So I left. 5 minutes after I left, he sent a Canvas update saying he was coming
                     in 10 minutes. I did not go back. Not excited to open Saturday AND Sunday this weekend. Ugh...
                  </p>
                </div>
                <div className="border-1 p-3 h-90 rounded-3xl">
                  <h1 className="text-xl">Color Clarifications</h1>
                  <ul className="list-disc pl-1"> */}

            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-2 gap-4 border-1 rounded-3xl p-3 mt-6">
            <div className="border-1 p-3 sm:h-auto h-90 rounded-3xl">
                <h1 className='text-xl'>Help</h1>
                <p className='underline text-sm'>
                If there is an asterisk, please text me to figure out if I am available. Click the PST button
                to see the time in EST and vice-versa. I will update this on a weekly basis or sooner if some-
                thing arises. I made this with React, Tailwind, and Vercel. I designed this in Figma.</p>
              </div>
              <div className="border-1 p-3 sm:h-auto h-90 rounded-3xl">
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
                      <span className="min-w-3 min-h-3 border-1 border-black  bg-violet-200 rounded-full"></span>
                      Fun Life Events
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="min-w-3 min-h-3 border-1 border-black bg-green-700 rounded-full"></span>
                      Eshaan Related
                    </li>
                  </ul>
              </div>
              <div className="border-1 p-3 sm:h-auto h-90 rounded-3xl">
                <h1 className='text-xl'>Notes</h1>
                  <p className='underline text-sm'>Midterm went well! Our professor kept us for an extra 20 minutes
                     after it was over to tell us to start using AI and we found out he was grading our weekly meetings
                     by sending the recording to Gemini... WTF. Also, last Tuesday, my professor was did not show up to
                     class for 20 minutes. So I left. 5 minutes after I left, he sent a Canvas update saying he was coming
                     in 10 minutes. I did not go back. Not excited to open Saturday AND Sunday this weekend. Ugh...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
