<template>
	<div class="home-main">
    	<img class="logo" src="../assets/logo.png" />
		<section class="button-section">
			<button v-for="button in buttons" v-on:touchstart="button.onClick" v-on:click="button.onClick"c class="ui teal button">
				{{ button.label }}
			</button>
		</section>
	</div>
</template>

<script>
import { labels } from  "../common/labels";
import language from "../common/lang_code";
import router from '../router'

export default {
	name: 'home',
	data() {
		return {
			// current language used in app
			currentLang: language.getLanguageCode(),
		};
	},
	computed: {
		// Metadata for buttons on this page
		buttons: function() {
			return [
				{ 
					label: labels[this.currentLang].CREATE_ROOM,
					onClick: function(){
						router.push({ path: 'create-room' });
					},
				},
				{ 
					label: labels[this.currentLang].JOIN_ROOM,
					onClick: function(){
						router.push({ path: 'join-room' });
					},
				},
				{ 
					label: labels[this.currentLang].PERSONAL_SETTINGS,
					onClick: function(){
						router.push({ path: 'settings' });
					},
				}, 
			];
		},
	},
	methods: {
		createRoomOnClick: function(event) {

		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.logo {
	max-width: 100%;
	padding: 5% 15%;
	margin-top: 120px;
}

.button-section {
	display: flex;
	flex-direction: column;
	margin: 0 15%;
	margin-top: 100px;

	button {
		margin: 10px 0;
		font-size: 1.125rem;
	}
}
</style>
