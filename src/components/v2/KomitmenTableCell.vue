<template>
	<tr
		class="border-0 border-slate-200 cursor-pointer"
		@click="showDetail = !showDetail"
	>
		<!--<td class="text-right">1</td>-->
		<td class="font-medium text-slate-500">{{ data.nama_wp }}</td>
		<td class="font-light">{{ data.masa_pajak }}</td>
		<td class="font-semibold">{{ dateDisplay(data.tanggal_komitmen.toDate()) }}</td>
		<td class="hidden md:table-cell">
			<span
				class="bg-blue-100 inline-block text-cent p-2 font-medium text-blue-500 text-sm rounded-full"
			>{{ data.jenis_sp2 }}</span>
		</td>
		<td class="hidden md:table-cell">{{ data.jenis_wp }}</td>
	</tr>
	<!-- Detail on Click -->
	<tr
		v-show="showDetail"
		class="bg-indigo-100 border-0 border-slate-300 shadow-inner shadow-indigo-800/10"
	>
		<td colspan="2">
			<span
				class="md:hidden inline-block mb-1 bg-blue-600 py-1 px-2 font-medium text-white rounded-full"
			>{{ data.jenis_sp2 }}</span>
			<p class="text-indigo-500 mb-1">{{ data.no_sp2 }}</p>
			<p class="text-indigo-700 font-light">
				Tanggal SP2:
				<span
					class="font-semibold"
				>{{ dateDisplay(data.tanggal_sp2.toDate()) }}</span>
			</p>
		</td>
		<td>
			<p class="text-indigo-700 font-light">
				<span class="font-semibold">{{ data.progress }}%</span> progress
			</p>
		</td>
		<td class="hidden md:table-cell" colspan="2"></td>
	</tr>
</template>

<script>
import { ref } from "vue"

import extractDate from "../../composable/useExtractDate"

export default {
	props: {
		data: {
			type: Object,
			default: () => { }
		}
	},
	setup() {
		const showDetail = ref(false)

		// Date Formatting
		function dateDisplay(tanggal) {
			const { date, month, year } = extractDate(tanggal)
			return `${month} ${date}, ${year}`
		}

		return {
			showDetail,
			dateDisplay
		}
	}
}
</script>

<style scoped>
th,
td {
	@apply text-left md:tracking-tight;
	font-size: clamp(0.75rem, 0.625rem + 0.625vw, 1.125rem);
	@apply px-[clamp(0.5rem,0.16666666666666669rem+1.6666666666666667vw,1.5rem)];
	@apply py-[clamp(0.75rem,0.5833333333333334rem+0.8333333333333334vw,1.25rem)];
}

th {
	@apply text-slate-500 font-medium;
}

td {
	@apply text-slate-600;
}
</style>