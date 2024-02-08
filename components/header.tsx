import { userDropdownItems, userListItems } from "@/config/userMenuConfig";
import Link from "next/link";
import { Icons } from "./icons";
import { NavMenuDropDown } from "./nav-menu-dropdown";
import NavMenuList from "./nav-menu-list";
import { WaitingListPopup } from "./waiting-list-popup";

export function Header() {
	return (
		<header className="h-16 w-full border-b border-zinc-200 bg-white">
			<div className="flex h-full flex-row items-center justify-between px-4 md:container">
				<div className="flex flex-row items-center gap-24">
					<Link href="/" title="Página inicial">
						<Icons.logo className="h-8 w-auto" />
					</Link>
					<NavMenuList listItems={userListItems} />
				</div>

				<div className="flex flex-row items-center gap-4 md:gap-8">
					{/* Button cta */}
					<WaitingListPopup className="hidden md:flex" />
					<NavMenuDropDown dropDownItems={userDropdownItems} />
				</div>
			</div>
		</header>
	);
}
