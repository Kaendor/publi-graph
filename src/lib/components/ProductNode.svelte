<script lang="ts">
	import {
		Handle,
		Position,
		useHandleConnections,
		useNodesData,
		type NodeProps,
	} from '@xyflow/svelte';
	import NodeWrapper from './NodeWrapper.svelte';

	type $$Props = NodeProps;

	export let data: $$Props['data'];
	export let id: $$Props['id'];

	const connections = useHandleConnections({
		nodeId: id,
		type: 'target',
	});

	console.log({ connections });

	$: nodesData = useNodesData($connections.map((c) => c.source));
	console.log({ nodesData });
	$: total = $nodesData?.reduce((acc, nodeData) => acc * Number(nodeData.data.value), 1);

	// L'opération propre au produit est une multiplication
	// des noeuds entrants
	// Pour faire cette opération il faut donc obtenir tous les noeuds entrants, les transformer en règles, puis faire le produit de toutes les règles obtenues ainsi
</script>

<NodeWrapper label={data.label} {id}>
	<div>
		Produit:
		{#if !$nodesData || $nodesData?.length === 0}
			0
		{:else}
			{total}
		{/if}
	</div>
	<Handle
		type="target"
		position={Position.Left}
		isConnectable={true}
		style="top: 10px; background: #555;"
	/>
</NodeWrapper>
