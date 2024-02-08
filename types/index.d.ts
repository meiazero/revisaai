export type NavItem = {
	title: string;
	href: string;
	icon?: React.ElementType;
	isActive?: boolean;
};

export interface DropDownItems {
	title: string;
	items: Array<NavItem>;
}
