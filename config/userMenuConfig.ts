import { DropDownItems, NavItem } from "@/types";
import { BadgeDollarSign, Clock2, Info } from "lucide-react";

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
				title: "Lista de espera",
				href: "/waiting-list",
				icon: Clock2,
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
