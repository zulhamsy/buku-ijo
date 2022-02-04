<template>
	<the-header />
	<div class="container mx-auto mt-16 py-5 px-6 md:pr-4 md:pl-8">
		<only-komitmen />
	</div>
</template>

<script>
import TheHeader from '../components/v2/TheHeader.vue';
import OnlyKomitmen from './OnlyKomitmen.vue'

export default {
	components: {
		TheHeader,
		OnlyKomitmen
	}
}
</script>