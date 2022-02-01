<template>
	<div class="space-y-5 md:flex md:space-y-0">
		<the-sidebar
			header-title="Dashboard"
			:menu-item="sidebarMenuList"
			:current-menu="currentMenu"
			@onClickMenu="changeMenu($event)"
		/>
		<div class="md:flex-1">
			<!-- Notification Placeholder -->
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
			<div>
				<!-- <dashboard-rekam-surat /> -->
				<!-- <dashboard-recent-surat /> -->
				<keep-alive>
					<component :is="currentTabComponent" />
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
import TheSidebar from "../components/v2/TheSidebar.vue";
import TheAlert from "../components/v2/TheAlert.vue";
import DashboardRekamSurat from "../components/v2/DashboardRekamSurat.vue";
import DashboardRecentSurat from "../components/v2/DashboardRecentSurat.vue";
import { computed, ref } from "vue";

export default {
	components: {
		TheSidebar,
		TheAlert
	},
	setup() {
		// Dynamic Component - Sidebar
		const sidebarMenuList = ['Rekam Surat', 'Recent Surat']
		const currentMenu = ref('Rekam Surat')
		const currentTabComponent = computed(() => {
			switch (currentMenu.value) {
				case 'Rekam Surat':
					return DashboardRekamSurat
				case 'Recent Surat':
					return DashboardRecentSurat
				default:
					return DashboardRekamSurat
			}
		})

		function changeMenu(text) {
			currentMenu.value = text
		}

		return {
			sidebarMenuList,
			currentMenu,
			currentTabComponent,
			changeMenu
		}
	}
}
</script>