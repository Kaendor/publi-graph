import type { Rule } from "publicodes";

// place files you want to import through the `$lib` alias in this folder.
export function dataToRule(data: NodeData): Rule {

	return {
		[data.label]: data.value
	};
}

export type NodeData = {
	value: string;
	label: string;
}
