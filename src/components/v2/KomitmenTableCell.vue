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
				class="bg-blue-100 p-2 font-medium text-blue-500 text-sm rounded-full"
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
			>Pemsus</span>
			<p class="text-indigo-500 mb-1">PRIN-00183/WPJ.08/KP.05/RIK.SIS/2021</p>
			<p class="text-indigo-700 font-light">
				Tanggal SP2:
				<span class="font-semibold">Nov 30, 2021</span>
			</p>
		</td>
		<td>
			<p class="text-indigo-700 font-light">
				<span class="font-semibold">30%</span> progress
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
	@apply px-2 py-3 md:py-5 md:px-6 lg:px-7 text-left text-xs md:text-base md:tracking-tight;
}

th {
	@apply text-slate-500 font-medium;
}

td {
	@apply text-slate-600;
}
</style>