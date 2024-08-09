<script lang="ts">
	import { writable } from 'svelte/store';
	import {
		SvelteFlow,
		Controls,
		Background,
		BackgroundVariant,
		MiniMap,
		type NodeTypes,
	} from '@xyflow/svelte';

	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '@xyflow/svelte/dist/style.css';
	import '../app.css';
	import ValueNode from '$lib/components/ValueNode.svelte';
	import ProductNode from '$lib/components/ProductNode.svelte';

	// TODO: Plug Publicodes logic and profit
	const nodeTypes: NodeTypes = {
		valueNode: ValueNode,
		productNode: ProductNode,
	};

	const nodes = writable([
		{
			id: '1',
			type: 'valueNode',
			data: { label: "Prix d'un repas" },
			position: { x: 0, y: 0 },
		},
		{
			id: '2',
			type: 'valueNode',
			data: { label: 'Nombre de repas' },
			position: { x: 0, y: 100 },
		},
		{
			id: '3',
			type: 'productNode',
			data: { label: 'Prix total' },
			position: { x: 300, y: 0 },
		},
	]);

	// same for edges
	const edges = writable([]);

	const snapGrid: [number, number] = [25, 25];
</script>

<div style:height="100vh">
	<SvelteFlow {nodes} {nodeTypes} {edges} {snapGrid} fitView>
		<Controls />
		<Background variant={BackgroundVariant.Dots} />
		<MiniMap />
	</SvelteFlow>
</div>
