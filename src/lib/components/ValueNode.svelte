<script lang="ts">
	import {
		Handle,
		Position,
		useHandleConnections,
		useSvelteFlow,
		type NodeProps,
	} from '@xyflow/svelte';
	import NodeWrapper from './NodeWrapper.svelte';

	type $$Props = NodeProps;

	export let data: $$Props['data'];
	export let id: $$Props['id'];
	const { updateNodeData } = useSvelteFlow();
	const connections = useHandleConnections({
		nodeId: id,
		type: 'source',
	});

	function updateNode(e) {
		console.log('updateNode', id, e.currentTarget.value);
		console.log('connections', connections);
		updateNodeData(id, { value: e.currentTarget.value });
	}

	// {
	//   'année création': null,
	//   'année courante': null,
	//   'CA annuel HT N-2': null,
	//   'CA annuel HT N-1': null,
	//   'Seuil CA': '5000€',
	//   'Crée cette année': 'année création = année courante',
	//   'Exonéré CFE': {
	//     'une de ces conditions': [
	//       'Crée cette année',
	//       {
	//         'toutes ces conditions': [
	//           { 'est défini': 'CA annuel HT N-2' },
	//           'CA annuel HT N-2 < Seuil CA'
	//         ]
	//       },
	//       {
	//         'toutes ces conditions': [
	//           { 'est défini': 'CA annuel HT N-1' },
	//           'CA annuel HT N-1 < Seuil CA'
	//         ]
	//       }
	//     ]
	//   }
	// }
</script>

<NodeWrapper label={data.label} {id}>
	<div>
		<input value={data.value} on:input={updateNode} />
	</div>
	<Handle
		type="source"
		position={Position.Right}
		id="a"
		isConnectable={true}
		style="top: 10px; background: #555;"
	/>
</NodeWrapper>
