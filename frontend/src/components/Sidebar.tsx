import { useState } from 'react';

function Sidebar() {
  const [isContainsVisible, setIsContainsVisible] = useState(false);
  const [isTimeDurationVisible, setIsTimeDurationVisible] = useState(false);
  const [isServingsVisible, setIsServingsVisible] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="w-8 h-8 relative -mt-14 ml-6 cursor-pointer z-30" onClick={() => setShowSidebar(!showSidebar)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="w-8 h-8 relative -mt-14 ml-6 cursor-pointer z-30" onClick={() => setShowSidebar(!showSidebar)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      )}
      <div className={`fixed top-0 left-0 h-full w-32 md:w-44 lg:w-48 bg-[#7f7f7f] text-white z-10 pt-10 ease-in-out duration-300 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="my-14">
          <h2 className="text-xl font-bold text-white px-2 md:px-4 lg:px-6 mb-4">Filters</h2>
          <div className="flex items-center justify-between">
            <h4 className="font-bold px-2 md:px-4 lg:px-6">Contains</h4>
            <button className="text-white p-1 mr-2 md:mr-4 lg:mr-6 bg-transparent" onClick={() => setIsContainsVisible(!isContainsVisible)}>
              {
                isContainsVisible ?
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg> :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
              }
            </button>
          </div>
          {isContainsVisible && (
            <ul className="mb-2 ml-4 md:ml-6 lg:ml-8">
              <li className="text-sm flex items-center">
                <input type="checkbox" className="mr-1" />
                <div style={{ overflowWrap: "break-word" }} className="w-20 md:w-30 lg:w-40">
                  Nuts
                </div>
              </li>
              <li className="text-sm flex items-center">
                <input type="checkbox" className="mr-1" />
                Dairy
              </li>
            </ul>
          )}
          <div className="flex items-center justify-between">
            <h4 className="font-bold px-2 md:px-4 lg:px-6">Time Duration</h4>
            <button className="text-white p-1 p-1 mr-2 md:mr-4 lg:mr-6 bg-transparent" onClick={() => setIsTimeDurationVisible(!isTimeDurationVisible)}>
              {
                isTimeDurationVisible ?
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg> :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
              }
            </button>
          </div>
          {isTimeDurationVisible && (
            <ul className="mb-2 ml-4 md:ml-6 lg:ml-8">
            </ul>
          )}
          <div className="flex items-center justify-between">
            <h4 className="font-bold px-2 md:px-4 lg:px-6">Servings</h4>
            <button className="text-white p-1 p-1 mr-2 md:mr-4 lg:mr-6 bg-transparent" onClick={() => setIsServingsVisible(!isServingsVisible)}>
              {
                isServingsVisible ?
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg> :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
              }
            </button>
          </div>
          {isServingsVisible && (
            <ul className="mb-2 ml-4 md:ml-6 lg:ml-8">
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;