<template>
	<nav
		ref="navbar"
		class="z-10 bg-slate-700 shadow-lg shadow-slate-700/20 min-w-max fixed top-0 right-0 left-0"
	>
		<div class="container mx-auto pr-4 pl-8 flex justify-between">
			<!-- Profile Name -->
			<h1 class="font-semibold text-slate-200 py-5">
				<span class="font-thin text-slate-200">Hi,</span>
				{{ username }}
			</h1>
			<!-- Menu Links -->
			<div class="flex items-center gap-4">
				<router-link
					class="text-slate-300 font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-emerald-500 hidden md:block"
					:to="{ name: 'dashboard' }"
					exact-active-class="text-slate-50 bg-slate-500"
				>Dashboard</router-link>
				<router-link
					class="text-slate-300 font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-emerald-500 hidden md:block"
					:to="{ name: 'suratgue' }"
					exact-active-class="text-slate-50 bg-slate-500"
				>Surat Gue</router-link>
				<router-link
					class="text-slate-300 font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-red-500 hidden md:block"
					:to="{ name: 'komitmen' }"
					exact-active-class="text-slate-50 bg-slate-500"
				>Komitmen SP2</router-link>
				<!-- Other Buttons -->
				<div class="ml-8 flex self-stretch">
					<!-- Logout Button -->
					<button
						class="px-5 rounded-lg group hover:bg-slate-600 hidden md:block"
						@click="logout"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 stroke-slate-400 group-hover:stroke-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
					</button>
					<!-- Three-Dot Buttons -->
					<button
						class="px-5 rounded-lg group hover:bg-slate-600 md:hidden"
						@click="mobileMenuToggle = !mobileMenuToggle"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 stroke-slate-400 group-hover:stroke-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</nav>
	<!-- Overlay Menu Mobile -->
	<header-menu-mobile v-if="mobileMenuToggle" />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { auth } from '../../firebase'
import { useRouter } from 'vue-router'

import HeaderMenuMobile from './HeaderMenuMobile.vue';
import { fetchName } from '../../composable/useFetchName'


const mobileMenuToggle = ref(false)
const navbar = ref(null)

onMounted(() => {
	fetchName(store)

	navbar.value.addEventListener('click', function (e) {
		e.stopPropagation()
	})

	document.addEventListener('click', function () {
		mobileMenuToggle.value = false
	})
})

const store = useStore()
const username = computed(() => store.state.username)

// Routing Field
const router = useRouter()

function logout() {
	auth.signOut()
	router.push({ name: 'login' })
}
</script>
