import React from "react";

export default function BlogBoxItem({ data }: any) {
  const { titel, contens } = data;
  return (
    <div className="border py-[35px] px-3 border-gray-200 mb-[50px]">
      <h3 className="text-2xl font-bold my-5">{titel}</h3>
      <ul>
        {contens.map((item: any, index: number) => (
          <li key={index} className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
            <a href="">
              {item.type === "comment" ? (
                <>
                  {item.author} <span className="text-[var(--wc-orange)]">در</span> {item.post}
                </>
              ) : (
                <>{item.link}</>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
