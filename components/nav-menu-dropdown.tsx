import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropDownItems, NavItem } from "@/types";
import { Menu } from "lucide-react";
import Link from "next/link";

interface NavMenuDropDownProps {
	dropDownItems: Array<DropDownItems>;
}

export function NavMenuDropDown({ dropDownItems }: NavMenuDropDownProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="block md:hidden">
				<Menu className="size-8" />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="block md:hidden">
				{dropDownItems.map(item => (
					<div key={item.title}>
						<DropdownMenuLabel>{item.title}</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							{item.items.map(
								({ href, icon: Icon, title, isActive }: NavItem) => (
									<DropdownMenuItem
										asChild
										key={title}
										disabled={!isActive}
										className="py-2"
									>
										<Link href={href} className="flex flex-row items-center">
											{Icon && <Icon className="mr-2 size-5" />}
											{title}
										</Link>
									</DropdownMenuItem>
								),
							)}
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
					</div>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
