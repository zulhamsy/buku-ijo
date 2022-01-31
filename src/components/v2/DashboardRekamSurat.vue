<template>
	<div
		class="space-y-5 bg-slate-50 shadow-md shadow-slate-600/10 rounded-xl -mx-6 p-6 md:mx-0 md:max-w-lg"
	>
		<!-- Select Jenis -->
		<div>
			<label for="jenis">Pilih Jenis Surat</label>
			<select
				id="jenis"
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
			<input-form id="tujuan" type="text" class="w-full" />
		</div>
		<!-- Perihal -->
		<div>
			<label for="perihal">Perihal</label>
			<input-form id="perihal" type="text" class="w-full" />
		</div>
		<!-- Perihal -->
		<div>
			<label for="tanggal">Tanggal Surat</label>
			<input-form id="tanggal" type="date" class="w-full bg-white" />
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
</template>

<script setup>
import InputForm from './InputForm.vue';
import TheButton from './TheButton.vue';
</script>

<style scoped>
label {
	@apply font-medium text-slate-600/90 block mb-2;
}
</style>