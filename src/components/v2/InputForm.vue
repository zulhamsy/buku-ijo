<template>
	<input
		class="px-3 py-2 bg-white rounded border border-slate-300 shadow shadow-slate-800/10 caret-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 font-semibold focus:font-normal text-slate-600"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
export default {
	props: {
		// eslint-disable-next-line vue/require-default-prop
		modelValue: String
	},
	emits: ['update:modelValue']
}
</script>