export interface SizeFeatureProps {
	sizes: string[];
}

export interface SizeDropdownGroup {
	type: 'dropdown';
	ChildComponent: React.ComponentType;
	isEnabled: (params: { selection: any }) => boolean;
	items: Array<{
		Component: React.ComponentType;
		key: string;
		command: any;
		current: () => string | null;
	}>;
	key: string;
	order: number;
}
