import type { RefObject } from "react";

export default function HumbrgrMenu({ svgRef, openSideMenu }: { svgRef: RefObject<SVGSVGElement | null>; openSideMenu: boolean }) {
  return (
    <svg ref={svgRef} style={{ WebkitTapHighlightColor: "transparent" }} className={`ham ham1 absolute cursor-pointer select-none transition-transform duration-400 ${openSideMenu ? "rotate-45" : ""}`} viewBox="0 0 100 100" width={50}>
      <path
        className="fill-none transition-[stroke-dasharray,stroke-dashoffset] duration-400 stroke-[#FFB936] stroke-[6] top"
        style={{
          strokeDasharray: "40 139",
          strokeDashoffset: openSideMenu ? "-98px" : "0px"
        }}
        strokeLinecap={openSideMenu ? "round" : "round"}
        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
      />
      <path className="fill-none transition-[stroke-dasharray,stroke-dashoffset] duration-400 stroke-[#FFB936] stroke-[6] middle" d="m 30,50 h 40" strokeLinecap="round" />
      <path
        className="fill-none transition-[stroke-dasharray,stroke-dashoffset] duration-400 stroke-[#FFB936] stroke-[6] bottom"
        style={{
          strokeDasharray: "40 180",
          strokeDashoffset: openSideMenu ? "-138px" : "0px"
        }}
        strokeLinecap={openSideMenu ? "round" : "round"}
        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
      />
    </svg>
  );
}
