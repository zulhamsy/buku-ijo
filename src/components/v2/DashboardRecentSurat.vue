<template>
	<div class="max-w-max">
		<div class="flex items-center justify-between mb-6">
			<h1 class="text-xl font-semibold text-slate-500">Recent Surat</h1>
			<button
				class="p-2 text-sm text-slate-400 rounded-full font-medium hover:text-white hover:bg-emerald-600"
				@click="fetchSuratOnComponent"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
		<!-- Table -->
		<table
			class="max-w-max overflow-hidden rounded bg-slate-50 shadow-lg shadow-slate-800/5 border-collapse"
		>
			<thead>
				<tr class="bg-slate-200">
					<th>Tanggal</th>
					<th>Nomor Berkas</th>
					<th>Perihal</th>
					<th>Perekam</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-slate-200">
				<tr v-for="surat of recentSurat" :key="surat.nomor_surat" class="border-0 border-slate-200">
					<td class="font-medium text-slate-500">{{ dateDisplay(surat.tanggal_surat.toDate()) }}</td>
					<td class="font-light">{{ surat.jenis_surat }}-{{ surat.nomor_surat }}</td>
					<td class="font-semibold">{{ surat.perihal }}</td>
					<td class="font-light">{{ surat.perekam }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onActivated } from 'vue'
import { fetchSurat } from '../../composable/useFetchSurat'
import extractDate from '../../composable/useExtractDate'
export default {
	name: 'DashboardRecentSurat',
	setup() {
		const store = useStore()

		// Fetching Surat
		const recentSurat = computed(() => store.state.recentSurat)
		async function fetchSuratOnComponent() {
			const result = await fetchSurat()
			store.commit('removeAllRecentSurat')
			result.forEach((doc) => {
				store.commit('addRecentSurat', doc.data())
			})
		}
		onActivated(function () {
			if (!recentSurat.value.length) {
				fetchSuratOnComponent()
			}
		})

		// Date Formatting
		function dateDisplay(tanggal) {
			const { date, month, year } = extractDate(tanggal)
			return `${month} ${date}, ${year}`
		}

		return {
			fetchSuratOnComponent,
			dateDisplay,
			recentSurat
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