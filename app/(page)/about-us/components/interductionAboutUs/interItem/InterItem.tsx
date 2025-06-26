import React, { Fragment } from "react";

export default function InterItem({ data }: any) {
  const { titel, content, id } = data;
  return (
    <div className="flex w-full gap-2 justify-center items-start">
      <Fragment>
        {id === 0 ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <g>
              <rect x="22" y="12" width="20" height="2" />
              <rect x="24" y="14" width="16" height="8" />
              <path d="M24 22h16v3a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-3z" />
              <path d="M24 30h16v4H24z" />
              <path d="M24 34h16v3a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-3z" />
              <circle cx="16" cy="44" r="8" />
              <polyline points="12 44 15 47 20 40" />
              <path d="M12 52l1 8 3-2 3 2 1-8" />
            </g>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <g>
              <circle cx="32" cy="26" r="6" />
              <path d="M20 44c0-6.627 5.373-12 12-12s12 5.373 12 12v2H20v-2z" />
              <path d="M32 8l1.5 3 3.5 0.5-2.5 2.5 0.5 3.5L32 15l-3 2 0.5-3.5-2.5-2.5 3.5-0.5L32 8z" />
              <path d="M16 10l1.5 3 3.5 0.5-2.5 2.5 0.5 3.5L16 17l-3 2 0.5-3.5-2.5-2.5 3.5-0.5L16 10z" />
              <path d="M48 10l1.5 3 3.5 0.5-2.5 2.5 0.5 3.5L48 17l-3 2 0.5-3.5-2.5-2.5 3.5-0.5L48 10z" />
              <circle cx="48" cy="48" r="8" />
              <polyline points="45 48 47 50 51 46" />
            </g>
          </svg>
        )}
      </Fragment>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-bold text-[16px]">{titel}</h3>
        <p className=" w-full text-gray-700 md:max-w-52 font-semibold ">{content}</p>
      </div>
    </div>
  );
}
