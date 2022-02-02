<template>
	<div class="mx-auto w-fit">
		<div class="flex items-center justify-between mb-6">
			<h1 class="text-xl font-semibold text-slate-500">Surat Gue</h1>
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
					<th>Tujuan</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-slate-200">
				<tr v-for="item in surat" :key="item.id" class="border-0 border-slate-200">
					<td class="font-medium text-slate-500">{{ dateDisplay(item.tanggal_surat.toDate()) }}</td>
					<td class="font-light">{{ item.jenis_surat }}-{{ item.nomor_surat }}</td>
					<td class="font-semibold">{{ item.perihal }}</td>
					<td class="font-light">{{ item.tujuan_surat }}</td>
				</tr>
			</tbody>
		</table>
		<p
			class="mt-9 text-xs md:text-base max-w-[65ch] text-slate-400 md:text-slate-500 font-light italic"
		>
			Mohon maap atas ketidaknyamanannya ya cuy, saat ini menu Surat Gue hanya bisa menampilkan 10 surat terakhir,
			<span
				class="font-semibold"
			>fitur pagination</span> sedang dikerjakan
		</p>
	</div>
</template>

<script>
import { fetchSurat } from '../composable/useFetchSurat'
import extractDate from '../composable/useExtractDate'
import { useStore } from 'vuex'
import { computed, watch, ref, onMounted } from 'vue'
export default {
	setup() {
		const store = useStore()

		// fetch surat
		const surat = ref([])
		const name = computed(() => store.state.username)
		async function fetchSuratOnComponent() {
			const result = await fetchSurat({
				batas: 10,
				filter: ['perekam', '==', name.value]
			})

			result.forEach((data) => {
				surat.value.push(data.data())
			})
		}

		watch(name, fetchSuratOnComponent)

		onMounted(function () {
			if (name.value) {
				fetchSuratOnComponent()
			}
		})

		// Date Formatting
		function dateDisplay(tanggal) {
			const { date, month, year } = extractDate(tanggal)
			return `${month} ${date}, ${year}`
		}

		return {
			dateDisplay,
			surat
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