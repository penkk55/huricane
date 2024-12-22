'use client';
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarHeader,
// } from '@/components/ui/sidebar';

// export function AppSidebar() {
//   return (
//     <Sidebar>
//       <SidebarHeader />
//       <SidebarContent>
//         <SidebarGroup />
//         <SidebarGroup />
//       </SidebarContent>
//       <SidebarFooter />
//     </Sidebar>
//   );
// }

// import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import {
  // Calendar,
  Home,
  // Inbox,
  // Search,
  // Settings,
  Truck,
  Car,
  Shell,
  AirVent,
  Bike,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from '@/components/ui/sidebar';
// import Link from 'next/link';
import React from 'react';
// import { usePathname } from 'next/navigation';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'กรองรถกระบะ , รถตู้',
    url: '/trucks',
    icon: Truck,
  },
  {
    title: 'กรองรถเก๋งทั่วไป',
    url: '/cars',
    icon: Car,
  },
  {
    title: 'กรองแต่งเปลือย',
    url: 'naked',
    icon: Shell,
  },
  {
    title: 'กรองแอร์ (ในห้องโดยสาร)',
    url: 'air-vent',
    icon: AirVent,
  },
  {
    title: 'กรองรถจักรยานยนต์',
    url: 'motorcycle',
    icon: Bike,
  },
];

export function AppSidebar() {
  // const { setOpenMobile } = useSidebar();
  // const pathname = usePathname();

  // React.useEffect(() => {
  //   setOpenMobile(false);
  // }, [pathname, setOpenMobile]);
  return (
    <Sidebar className="z-[100]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* <Link href={item.url} onClick={() => setOpenMobile(false)}> */}
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                    {/* </Link> */}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
