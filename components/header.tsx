import { BadgeDollarSign, Clock2, Info } from "lucide-react";
import Link from "next/link";
import { Icons } from "./icons";
import { DropDownItems, NavMenuDropDown } from "./nav-menu";
import { WaitingListPopup } from "./waiting-list-popup";

export const normalUserItems: Array<DropDownItems> = [
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

export function Header() {
	return (
		<header className="h-16 w-full border-b border-zinc-200 bg-white">
			<div className="flex h-full flex-row items-center justify-between px-4 md:container">
				<Link href="/" title="Página inicial">
					<Icons.logo className="h-8 w-auto" />
				</Link>

				<div className="flex flex-row items-center gap-4 md:gap-8">
					{/* Button cta */}
					<WaitingListPopup className="hidden md:flex" />
					<NavMenuDropDown dropDownItems={normalUserItems} />
				</div>
			</div>
		</header>
	);
}
