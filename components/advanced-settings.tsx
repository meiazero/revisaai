import { AdvancedSettingsForm } from "./advanced-settings-form";
import { AdvancedSettingsTrigger } from "./advanced-settings-trigger";

interface AdvancedSettingsProps {
	onClick: () => void;
	visibility: boolean;
}

export function AdvancedSettings({
	onClick,
	visibility,
}: AdvancedSettingsProps) {
	return (
		<>
			<AdvancedSettingsTrigger onClick={onClick} />
			{visibility && <AdvancedSettingsForm />}
		</>
	);
}
