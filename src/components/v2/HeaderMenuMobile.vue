<template>
	<div
		ref="mobile"
		class="fixed z-10 w-full p-4 bg-slate-800 shadow-lg shadow-slate-700/20 md:hidden"
	>
		<div class="container mx-auto space-y-2">
			<button
				class="flex items-center gap-3 p-3 w-full text-slate-300 font-semibold text-left rounded-lg group focus:bg-slate-700 focus:text-slate-200 hover:bg-slate-700 hover:text-slate-200"
				@click="dashboard"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 fill-slate-500 group-hover:fill-slate-400 group-focus:fill-slate-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
					/>
				</svg>
				<span>Dashboard</span>
			</button>
			<button
				class="flex items-center gap-3 p-3 w-full text-slate-300 font-semibold text-left rounded-lg group focus:bg-slate-700 focus:text-slate-200 hover:bg-slate-700 hover:text-slate-200"
				@click="suratGue"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 fill-slate-500 group-focus:fill-slate-400 group-hover:fill-slate-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
				</svg>
				<span>Surat Gue</span>
			</button>
			<button
				class="flex items-center gap-3 p-3 w-full text-slate-300 font-semibold text-left rounded-lg group focus:bg-slate-700 focus:text-slate-200 hover:bg-slate-700 hover:text-slate-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 fill-slate-500 group-focus:fill-slate-400 group-hover:fill-slate-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
					<path
						fill-rule="evenodd"
						d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>Komitmen SP2</span>
			</button>
			<button
				class="p-3 w-full text-slate-300 font-semibold rounded-lg group bg-slate-700 focus:bg-red-600 focus:text-slate-200 hover:bg-red-600 hover:text-slate-200"
				@click="logout"
			>Logout</button>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { auth } from '../../firebase'


const mobile = ref(null)
onMounted(() => {
	mobile.value.addEventListener('click', function (e) {
		e.stopPropagation()
	})
})

// Routing Field
const router = useRouter()

function logout() {
	auth.signOut()
	router.push({ name: 'login' })
}

function suratGue() {
	router.push({ name: 'suratgue' })
}

function dashboard() {
	router.push({ name: 'dashboard' })
}
</script>