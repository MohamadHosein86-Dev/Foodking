"use client";

import FavaritPage from "@/app/(page)/dashboard/favarit/page";
import MyLocationPage from "@/app/(page)/dashboard/mylocation/page";
import OrdersPage from "@/app/(page)/dashboard/order/page";
import Acount from "@/app/(page)/dashboard/page";
import { usePathname } from "next/navigation";

export default function PanleUserPage() {
  const pathname = usePathname();

  if (pathname === "/dashboard/order") return <OrdersPage />;
  if (pathname === "/dashboard/favarit") return <FavaritPage />;
  if (pathname === "/dashboard/mylocation") return <MyLocationPage />;
  if (pathname === "/dashboard") return <Acount />;
}
