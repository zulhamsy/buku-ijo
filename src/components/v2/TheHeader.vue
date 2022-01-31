<template>
	<nav
		ref="navbar"
		class="z-10 bg-slate-700 shadow-lg shadow-slate-700/20 min-w-max fixed top-0 right-0 left-0"
	>
		<div class="container mx-auto pr-4 pl-8 flex justify-between">
			<!-- Profile Name -->
			<h1 class="font-semibold text-slate-200 py-5">
				<span class="font-thin text-slate-200">Hi,</span> Zulham Syafrawi
			</h1>
			<!-- Menu Links -->
			<div class="flex items-center gap-4">
				<button
					class="text-slate-300 font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-emerald-500 hidden md:block"
				>Dashboard</button>
				<button
					class="text-slate-300 font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-emerald-500 hidden md:block"
				>Surat Gue</button>
				<button
					class="text-slate-300 font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-red-500 hidden md:block"
				>Komitmen SP2</button>
				<!-- Other Buttons -->
				<div class="ml-8 flex self-stretch">
					<!-- Logout Button -->
					<button class="px-5 rounded-lg group hover:bg-slate-600 hidden md:block">
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
import { ref, onMounted } from 'vue';
import HeaderMenuMobile from './HeaderMenuMobile.vue';

const mobileMenuToggle = ref(false)
const navbar = ref(null)

onMounted(() => {
	navbar.value.addEventListener('click', function (e) {
		e.stopPropagation()
	})

	document.addEventListener('click', function () {
		mobileMenuToggle.value = false
	})
})
</script>