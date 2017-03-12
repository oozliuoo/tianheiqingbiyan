<template>
	<div class="setting-home-main">
	</div>
</template>

<script>
import { labels } from  "../../common/labels";
import language from "../../common/lang_code";

export default {
	name: 'setting-home',
	data() {
		return {
			// current language used in app
			currentLang: language.getLanguageCode(),
		};
	},
	computed: {
        
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
