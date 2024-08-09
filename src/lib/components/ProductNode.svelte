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

	console.log(connections);

	$: nodesData = useNodesData($connections.map((c) => c.source));
	console.log(nodesData);
	$: total = $nodesData?.reduce((acc, nodeData) => acc * Number(nodeData.data.value), 1);
</script>

<NodeWrapper label={data.label} {id}>
	<div>
		{#if !$nodesData || $nodesData?.length === 0}
			<div>0</div>
		{:else}
			<div>{total}</div>
		{/if}
	</div>
	<Handle
		type="target"
		position={Position.Left}
		isConnectable={true}
		style="top: 10px; background: #555;"
	/>
</NodeWrapper>
