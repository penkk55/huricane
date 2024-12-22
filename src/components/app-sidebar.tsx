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
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
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
} from '@/components/ui/sidebar';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'กรองรถกระบะ , รถตู้',
    url: '/truck',
    icon: Truck,
  },
  {
    title: 'กรองรถเก๋งทั่วไป',
    url: '#',
    icon: Car,
  },
  {
    title: 'กรองแต่งเปลือย',
    url: '#',
    icon: Shell,
  },
  {
    title: 'กรองแอร์ (ในห้องโดยสาร)',
    url: '#',
    icon: AirVent,
  },
  {
    title: 'กรองรถจักรยานยนต์',
    url: '#',
    icon: Bike,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
