"use client";

import { Key } from "lucide-react";
import { useState } from "react";
import { ApiKeyCard } from "./api-key-card";
import { Button } from "./ui/button";

export function ApikeyButton() {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>("");

	const handleToggle = () => {
		setIsVisible(!isVisible);
	};

	return (
		<>
			{!isVisible ? (
				<div className="relative">
					<Button
						onClick={handleToggle}
						className="fixed bottom-5 left-5  md:bottom-10 md:left-10"
					>
						<Key className="size-6" />
					</Button>
				</div>
			) : (
				<div className="relative">
					<ApiKeyCard
						className="fixed bottom-5 left-2 md:bottom-10 md:left-10"
						onClick={handleToggle}
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
					/>
				</div>
			)}
		</>
	);
}
