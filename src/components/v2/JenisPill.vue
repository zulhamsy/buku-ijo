<template>
	<span
		class="inline-block text-cent p-2 font-medium text-sm rounded-full"
		:class="[
			{ 'pemsus': pemsusClass },
			{ 'rutinlb': lbClass },
			{ 'rutinlainnya': lainnyaClass }
		]"
	>{{ jenis }}</span>
</template>

<script>
import { computed } from "vue"
export default {
	props: {
		jenis: {
			type: String,
			default: ''
		}
	},
	setup(props) {
		const pemsusClass = computed(() => {
			return props.jenis == 'Pemsus'
		})

		const lbClass = computed(() => {
			return props.jenis == 'Rutin - LB' || props.jenis == 'Rutin - PPN'
		})

		const lainnyaClass = computed(() => {
			return props.jenis == 'Rutin Lainnya'
		})

		return {
			pemsusClass,
			lbClass,
			lainnyaClass
		}
	}
}
</script>

<style scoped>
.pemsus {
	@apply bg-blue-100 text-blue-600;
}

.rutinlb {
	@apply bg-rose-100 text-rose-600;
}

.rutinlainnya {
	@apply bg-emerald-100 text-emerald-600;
}
</style>