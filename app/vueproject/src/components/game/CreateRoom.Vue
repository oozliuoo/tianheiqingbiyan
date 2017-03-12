<template>
	<div class="create-room-main">
	</div>
</template>

<script>
import { labels } from  "../../common/labels";
import language from "../../common/lang_code";

export default {
	name: 'create-room',
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
