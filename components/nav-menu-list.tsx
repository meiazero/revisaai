import { NavItem } from "@/types";
import Link from "next/link";

export interface Listitems extends NavItem {}

interface NavMenuListProps {
	listItems: Array<Listitems>;
}

export function NavMenuList({ listItems }: NavMenuListProps) {
	return (
		<div className="hidden md:block">
			<ul className="flex flex-row gap-4  ">
				{listItems.map(({ href, title, isActive }: NavItem) => (
					<li key={title}>
						<Link
							href={href}
							className="font-semibold lowercase hover:underline"
						>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
