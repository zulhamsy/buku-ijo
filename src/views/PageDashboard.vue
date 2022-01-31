<template>
	<div class="space-y-5 md:flex md:space-y-0">
		<the-sidebar />
		<div class="md:flex-1">
			<div class="mb-7">
				<!-- Alert Komitmen -->
				<the-alert tipe="komitmen" class="mb-3">
					<span class="font-semibold">CV. Sinar Jaya</span> dan
					<span class="font-semibold underline">2 lainnya</span> akan jatuh tempo dalam waktu dekat. Semangat ye kerjanya!
				</the-alert>
				<!-- Alert Surat-->
				<the-alert tipe="success" class="hidden">
					Nomor surat loe adalah
					<span class="font-semibold">S-20</span> tertanggal
					<span class="font-semibold">24 Januari 2022</span>
				</the-alert>
			</div>
			<!-- Body Content -->
			<div class="flex gap-8">
				<dashboard-rekam-surat class="flex-1" />
				<div class="hidden lg:block lg:space-y-6">
					<div>
						<p class="text-xl font-light text-slate-600">Nomor Surat Terakhir</p>
						<p class="text-3xl text-slate-700 font-semibold">ND-20</p>
					</div>
					<div>
						<p class="text-xl font-light text-slate-600">Tanggal Surat Terakhir</p>
						<p class="text-3xl text-slate-700 font-semibold">Jan 22, 2022</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import TheSidebar from "./TheSidebar.vue";
import TheAlert from "./TheAlert.vue";
import DashboardRekamSurat from "./DashboardRekamSurat.vue";
</script>