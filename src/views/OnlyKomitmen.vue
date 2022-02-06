<template>
	<div class="mx-auto w-fit">
		<div class="flex items-center justify-between mb-6">
			<h1 class="text-xl font-semibold text-slate-500">Komitmen SP2</h1>
		</div>
		<!-- Table -->
		<table
			class="max-w-max overflow-hidden rounded bg-slate-50 shadow-lg shadow-slate-800/5 border-collapse"
		>
			<thead>
				<tr class="bg-slate-200">
					<th>Nama Wajib Pajak</th>
					<th>Masa/Tahun Pajak</th>
					<th>Tanggal Komitmen</th>
					<th class="hidden md:table-cell">Jenis SP2</th>
					<th class="hidden lg:table-cell">Jenis Wajib Pajak</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-slate-200">
				<komitmen-table-cell v-for="sp2 in sp2Cache" :key="sp2.id" :data="sp2" />
			</tbody>
		</table>
		<p
			class="mt-9 text-xs md:text-base max-w-[65ch] text-slate-400 md:text-slate-500 font-light italic"
		>
			Untuk melihat detail SP2 lebih lanjut silahkan
			<span
				class="font-semibold"
			>klik</span> pada
			<span class="font-semibold">setiap baris data</span>
		</p>
	</div>
</template>

<script>
import { computed, onMounted } from "vue";
import KomitmenTableCell from "../components/v2/KomitmenTableCell.vue";

import { auth } from "../firebase";
import { fetchSP2 } from "../composable/useFetchSP2";
import { fetchSPJT } from "../composable/useNotifSP2";
import { useStore } from "vuex";

export default {
	components: {
		KomitmenTableCell
	},
	setup() {
		const store = useStore()

		// Fetch SP2
		const sp2Cache = computed(() => store.state.sp2)
		async function fetchSP2OnComponent() {
			const result = await fetchSP2({
				filter: ['pj', '==', auth.currentUser.uid]
			})

			result.forEach((data) => {
				store.commit('addSP2', data.data())
			})
		}
		onMounted(async () => {
			if (!sp2Cache.value.length) {
				fetchSP2OnComponent()
			}
			console.log(await fetchSPJT(auth.currentUser.uid))
		})

		return {
			sp2Cache
		}
	}
}
</script>

<style scoped>
th,
td {
	@apply md:tracking-tight;
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