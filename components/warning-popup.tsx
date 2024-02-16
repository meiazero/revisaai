import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangleIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function WarningPopup() {
	const [alertPopup, setAlertPopup] = useState<boolean>(false);

	useEffect(() => {
		setAlertPopup(!alertPopup);
	}, []);

	return (
		<AlertDialog open={alertPopup}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="flex flex-row items-center">
						<AlertTriangleIcon className="mr-2 size-6" />
						<p> Aviso!</p>
					</AlertDialogTitle>
					<AlertDialogDescription>
						Esse site é apenas para estudo de algumas tecnologia e não está
						funcional, o código está disponivel em{" "}
						<a
							href="https://github.com/meiazero/revisaai"
							target="_blank"
							className="hover:underline"
						>
							@meiazero/revisaai
						</a>
						.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction onClick={() => setAlertPopup(!open)}>
						Estou ciente
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
