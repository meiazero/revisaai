import { HelpCircle } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

interface AdvancedSettingsTriggerProps {
	onClick: () => void;
}

export function AdvancedSettingsTrigger({
	onClick,
}: AdvancedSettingsTriggerProps) {
	return (
		<div className="flex flex-row items-center gap-4">
			<Label>Configurações Avançadas</Label>
			<Switch onClick={onClick} />
			<HoverCard>
				<HoverCardTrigger>
					<HelpCircle className="size-4 text-muted-foreground" />
				</HoverCardTrigger>
				<HoverCardContent>
					<p className="text-sm ">
						Estas são as configurações avançadas que podem ser alteradas, como
						prompt de texto e outros.
					</p>
				</HoverCardContent>
			</HoverCard>
		</div>
	);
}
