<template>
	<div class="lg:flex lg:gap-8 w-full">
		<!-- Rekam Form -->
		<div
			class="flex-1 space-y-5 bg-slate-50 shadow-md shadow-slate-600/10 rounded-xl -mx-6 p-6 md:mx-0 md:max-w-lg"
		>
			<!-- Select Jenis -->
			<div>
				<label for="jenis">Pilih Jenis Surat</label>
				<select
					id="jenis"
					v-model="mode_surat"
					name="jenis"
					class="px-3 py-2 w-full rounded bg-white border border-slate-300 shadow-sm shadow-slate-800/10 caret-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 font-semibold focus:font-normal text-slate-600"
				>
					<option value="ND">Nota Dinas</option>
					<option value="S">Surat</option>
				</select>
			</div>
			<!-- Tujuan Surat -->
			<div>
				<label for="tujuan">Tujuan Surat</label>
				<input-form id="tujuan" v-model="tujuan" type="text" class="w-full" />
			</div>
			<!-- Perihal -->
			<div>
				<label for="perihal">Perihal</label>
				<input-form id="perihal" v-model="perihal" type="text" class="w-full" />
			</div>
			<!-- Date -->
			<div>
				<label for="tanggal">Tanggal Surat</label>
				<input-form id="tanggal" v-model="tanggal_surat" type="date" class="w-full bg-white" />
			</div>
			<!-- CTA -->
			<the-button class="w-full md:w-fit !mt-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 stroke-indigo-200"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
				<span>Rekam Surat</span>
			</the-button>
		</div>
		<!-- Latest Info -->
		<div v-if="Object.keys(suratTerakhir).length" class="hidden lg:block lg:space-y-6">
			<div>
				<p class="text-xl font-light text-slate-600">Nomor Surat Terakhir</p>
				<p
					class="text-3xl text-slate-700 font-semibold"
				>{{ mode_surat }}-{{ suratTerakhir.nomor[mode_surat] }}</p>
			</div>
			<div>
				<p class="text-xl font-light text-slate-600">Tanggal Surat Terakhir</p>
				<p class="text-3xl text-slate-700 font-semibold">{{ tanggalSuratTerakhir }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import InputForm from './InputForm.vue';
import TheButton from './TheButton.vue';

import { fetchSuratTerakhirInfo } from '../../composable/useFetchSurat'
import extractDate from '../../composable/useExtractDate'
import { computed, onActivated, ref } from 'vue'
import { useStore } from 'vuex'

export default {
	components: {
		InputForm,
		TheButton
	},
	setup() {
		const store = useStore()

		// Form Data Related
		const mode_surat = ref('ND')
		const tujuan = ref('')
		const perihal = ref('')
		const tanggal_surat = ref('')

		// Fetching Surat Terakhir Info
		const suratTerakhir = computed(() => {
			return store.state.suratTerakhir
		})

		const tanggalSuratTerakhir = computed(() => {
			const tanggal = suratTerakhir.value.tanggal[mode_surat.value]
			const { month, date, year } = extractDate(tanggal)
			return `${month} ${date}, ${year}`
		})

		async function fetchSuratInfo() {
			const document = await fetchSuratTerakhirInfo()
			store.commit('updateSuratTerakhir', document)
		}

		onActivated(function () {
			fetchSuratInfo()
		})

		return {
			mode_surat,
			tujuan,
			perihal,
			tanggal_surat,
			tanggalSuratTerakhir,
			suratTerakhir
		}
	}
}
</script>

<style scoped>
label {
	@apply font-medium text-slate-600/90 block mb-2;
}
</style>