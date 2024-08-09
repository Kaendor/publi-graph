<script lang="ts">
	import { Handle, Position, useSvelteFlow, type NodeProps } from '@xyflow/svelte';
	import NodeWrapper from './NodeWrapper.svelte';

	type $$Props = NodeProps;

	export let data: $$Props['data'];
	export let id: $$Props['id'];
	const { updateNodeData } = useSvelteFlow();
</script>

<NodeWrapper label={data.label} {id}>
	<div>
		<input
			value={data.value}
			on:input={(e) => updateNodeData(id, { value: e.currentTarget.value })}
		/>
	</div>
	<Handle
		type="source"
		position={Position.Right}
		id="a"
		isConnectable={true}
		style="top: 10px; background: #555;"
	/>
</NodeWrapper>
