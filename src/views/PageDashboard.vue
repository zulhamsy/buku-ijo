<template>
	<div class="space-y-5 md:flex md:space-y-0">
		<the-sidebar
			header-title="Dashboard"
			:menu-item="sidebarMenuList"
			:current-menu="currentMenu"
			@onClickMenu="changeMenu($event)"
		/>
		<div class="md:flex-1 space-y-7">
			<!-- Notification Placeholder -->
			<div>
				<!-- Alert Komitmen -->
				<the-alert v-if="Object.keys(notifKomitmen).length" tipe="komitmen" class="mb-3">
					<span v-html="notifKomitmen.content"></span>
				</the-alert>
				<!-- Alert Surat-->
				<the-alert v-if="Object.keys(notifSurat).length" :tipe="notifSurat.tipe">
					<span v-html="notifSurat.content"></span>
				</the-alert>
			</div>
			<!-- Body Content -->
			<div>
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
import { useStore } from "vuex";

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

		// Notifikasi System
		const store = useStore()
		const notifKomitmen = computed(() => {
			return store.state.notifKomitmen
		})
		const notifSurat = computed(() => {
			return store.state.notifSurat
		})

		return {
			sidebarMenuList,
			currentMenu,
			currentTabComponent,
			changeMenu,
			notifKomitmen,
			notifSurat
		}
	}
}
</script>