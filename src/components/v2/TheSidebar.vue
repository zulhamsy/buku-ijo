<template>
	<details class="w-full md:w-48 group">
		<summary
			class="flex items-center gap-2 -ml-3 text-slate-400 mb-3 cursor-pointer list-none select-none"
		>
			<span class="group-open:rotate-180 transition-transform">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
			<span>Dashboard</span>
		</summary>
		<button
			class="px-3 py-3 w-full text-left border-l-4 border-slate-700 text-slate-700 font-semibold"
		>Rekam Nomor</button>
		<button class="px-3 w-full text-left py-3 border-l-4 text-slate-400 font-semibold">Recent Surat</button>
	</details>
</template>