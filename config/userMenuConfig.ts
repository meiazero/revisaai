import { DropDownItems, NavItem } from "@/types";
import { BadgeDollarSign, Info, Pen } from "lucide-react";

export const userDropdownItems: Array<DropDownItems> = [
	{
		title: "Menu",
		items: [
			{
				title: "Sobre",
				href: "/about",
				icon: Info,
				isActive: true,
			},
			{
				title: "Preços",
				href: "/prices",
				icon: BadgeDollarSign,
				isActive: true,
			},
			{
				title: "App",
				href: "/app",
				icon: Pen,
				isActive: true,
			},
		],
	},
];

export const userListItems: Array<NavItem> = [
	{
		title: "Sobre",
		href: "/about",
		icon: Info,
		isActive: true,
	},
	{
		title: "Preços",
		href: "/prices",
		icon: BadgeDollarSign,
		isActive: true,
	},
];
