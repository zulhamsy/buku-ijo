<template>
	<div
		class="py-4 px-5 max-w-max rounded-lg flex items-center gap-5 border-l-4 border"
		:class="[
			{ 'border-emerald-600 bg-emerald-100': successClass },
			{ 'border-orange-600 bg-orange-100': errorClass },
			{ 'border-red-600 bg-red-100': komitmenClass }
		]"
	>
		<!--Illustration-->
		<div>
			<!-- Success -->
			<svg
				v-if="tipe == 'success'"
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 fill-emerald-500 animate-pulse"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<!-- Error -->
			<svg
				v-if="tipe == 'error'"
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 fill-orange-500 animate-pulse"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
					clip-rule="evenodd"
				/>
			</svg>
			<!-- Komitmen -->
			<svg
				v-if="tipe == 'komitmen'"
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 fill-red-500 animate-ping"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<!--Text Content-->
		<div
			class="flex-1 selection:text-white"
			:class="[
				{ 'selection:bg-emerald-700': successClass },
				{ 'selection:bg-orange-700': errorClass },
				{ 'selection:bg-red-700': komitmenClass }
			]"
		>
			<p
				class="text-emerald-500 font-medium text-xs uppercase tracking-wider mb-2"
				:class="[
					{ 'text-emerald-500': successClass },
					{ 'text-orange-500': errorClass },
					{ 'text-red-500': komitmenClass }
				]"
			>{{ titleText }}</p>
			<p
				class="text-emerald-800 max-w-[50ch]"
				:class="[
					{ 'text-emerald-800': successClass },
					{ 'text-orange-800': errorClass },
					{ 'text-red-800': komitmenClass }
				]"
			>
				<slot></slot>
				<!-- Nomor surat loe adalah
				<span class="font-semibold">S-20</span> tertanggal
				<span class="font-semibold">24 Januari 2022</span>-->
			</p>
		</div>
		<!--Close Icon-->
		<div class="self-stretch cursor-pointer">
			<svg
				v-if="!komitmenClass"
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 fill-emerald-300"
				:class="[
					{ 'fill-emerald-300': successClass },
					{ 'fill-orange-300': errorClass },
					{ 'fill-red-300': komitmenClass }
				]"
				viewBox="0 0 20 20"
				fill="currentColor"
				@click="closeNotif"
			>
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	</div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"

export default {
	props: {
		tipe: {
			type: String,
			default: 'success'
		}
	},
	setup(props) {
		const store = useStore()
		const titleText = computed(() => {
			switch (props.tipe) {
				case 'success':
					return 'berhasil'
				case 'error':
					return 'waduu...'
				case 'komitmen':
					return 'komitmen sp2'
				default:
					return 'berhasil'
			}
		})

		const successClass = computed(() => {
			return props.tipe == 'success'
		})

		const errorClass = computed(() => {
			return props.tipe == 'error'
		})

		const komitmenClass = computed(() => {
			return props.tipe == 'komitmen'
		})

		// Closing Notification
		function closeNotif() {
			store.commit('closeNotifSurat')
		}

		return {
			titleText,
			successClass,
			errorClass,
			komitmenClass,
			closeNotif
		}
	}
}
</script>