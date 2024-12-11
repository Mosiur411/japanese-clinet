export const RouteMenu = [
    {
        id: 1,
        text: "Dashboard",
        path: "/",
        icon: 'LuLayoutGrid',
        submenu: false,
        access: "admin",
        status: true,
    },
    {
        id: 2,
        text: "Department",
        path: "#",
        icon: 'LuCircuitBoard',
        submenu: true,
        access: "admin user",
        status: true,
      
    },
    {
        id: 3,
        text: "Product",
        path: "#",
        icon: 'LuBox',
        access: "admin wholeseller retailer",
        submenu: true,
        status: true,
      
    },
    {
        id: 4,
        text: "User",
        path: "#",
        icon: 'LuUser2',
        submenu: true,
        status: true,
        access: "admin",
       
    },
    {
        id: 5,
        text: "Connect",
        path: "#",
        icon: 'TbPlugConnected',
        submenu: true,
        access: "admin wholeseller retailer",
        status: true,
       
    },
    {
        id: 6,
        text: "Order",
        path: "#",
        icon: 'GoChecklist',
        submenu: true,
        access: "admin wholeseller retailer",
        status: true,
        
    },
    {
        id: 7,
        text: "Report",
        path: "#",
        icon: 'MdOutlineReport',
        submenu: true,
        status: true,
        access: "admin wholeseller retailer",
      
    },
    {
        id: 8,
        text: "Stock",
        path: "#",
        icon: 'RiBarChartBoxLine',
        submenu: true,
        status: true,
        access: "admin wholeseller",
      
    },
    {
        id: 9,
        text: "Account",
        path: "#",
        icon: 'RiShieldUserLine',
        submenu: true,
        access: "admin wholeseller retailer",
        status: true,
      
    },
    {
        id: 10,
        text: "Setting",
        path: "#",
        icon: 'MdOutlineSettingsSuggest',
        submenu: true,
        status: true,
        access: "admin wholeseller retailer",
        
    },
   
    {
        id: 12,
        text: "Role",
        path: "#",
        icon: 'RiUserStarLine',
        submenu: true,
        status: true,
        access: "admin  wholeseller retailer",
      
    },
];