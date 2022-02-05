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
			<jenis-pill :jenis="data.jenis_sp2" />
		</td>
		<td class="hidden lg:table-cell font-light">{{ data.jenis_wp }}</td>
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
			<p class="text-indigo-700 font-light flex items-center gap-2">
				<!-- Tanggal SP2: -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 stroke-indigo-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
				<span class="font-semibold">{{ dateDisplay(data.tanggal_sp2.toDate()) }}</span>
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
import JenisPill from "./JenisPill.vue"

export default {
	components: { JenisPill },
	props: {
		data: {
			type: Object,
			default: () => { }
		}
	},
	setup() {
		const showDetail = ref(false);
		// Date Formatting
		function dateDisplay(tanggal) {
			const { date, month, year } = extractDate(tanggal);
			return `${month} ${date}, ${year}`;
		}
		return {
			showDetail,
			dateDisplay
		};
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