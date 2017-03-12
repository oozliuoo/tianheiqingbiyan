<template>
	<div class="create-room-main ui sixteen column centered padded grid">
		<header class="teal ui sixteen wide column row">
			<div class="ui two wide column aligned header-back-btn">
				<i class="angle left icon"></i>
			</div>
			<div class="ui twelve wide column aligned header-text">
				{{ localizedLabel.PLAYER_CONFIG }}
			</div>
			<div class="ui two wide column"></div>
		</header>
		<div class="ui fifteen wide column row">
			<div class="ui horizontal divider">
				{{ localizedLabel.DIVINES }}
			</div>
		</div>
		<div class="ui fifteen wide column row">
			<!-- witch -->
			<div class="ui five wide column">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.WITCH_VALUE" :value="constants.WITCH_VALUE" v-model="divines":id="constants.WITCH_VALUE" v-on:touchstart="utils.onTouchStart">
					<label :for="constants.WITCH_VALUE">{{localizedLabel.WITCH}}</label>
				</div>
			</div>
			<!-- both potion -->
			<div class="ui five wide column">
				<div class="ui slider checkbox">
					<input type="checkbox" :name="constants.CAN_USE_BOTH_POTION_VALUE" :value="constants.CAN_USE_BOTH_POTION_VALUE" :disabled="disableWitchOption" v-model="witchBothPotion" :id="constants.CAN_USE_BOTH_POTION_VALUE">
					<label :for="constants.CAN_USE_BOTH_POTION_VALUE">{{ localizedLabel.CAN_USE_BOTH_POTION }}</label>
				</div>
			</div>
			<!-- self rescue -->
			<div class="ui five wide column">
				<div class="ui slider checkbox">
					<input type="checkbox" :name="constants.CAN_SELF_RESCUE_VALUE" :value="constants.CAN_SELF_RESCUE_VALUE" :disabled="disableWitchOption" v-model="witchSelfRescue" :id="constants.CAN_SELF_RESCUE_VALUE">
					<label :for="constants.CAN_SELF_RESCUE_VALUE">{{ localizedLabel.CAN_SELF_RESCUE }}</label>
				</div>
			</div>
		</div>
		<div class="ui fifteen wide column row">
			<!-- fortune teller -->
			<div class="ui five wide column">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.FORTUNE_TELLER_VALUE" :value="constants.FORTUNE_TELLER_VALUE" v-model="divines" :id="constants.FORTUNE_TELLER_VALUE">
					<label :for="constants.FORTUNE_TELLER_VALUE">{{localizedLabel.FORTUNE_TELLER}}</label>
				</div>
			</div>
			<!-- hunter -->
			<div class="ui five wide column">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.HUNTER_VALUE" :value="constants.HUNTER_VALUE" v-model="divines" :id="constants.HUNTER_VALUE">
					<label :for="constants.HUNTER_VALUE">{{localizedLabel.HUNTER}}</label>
				</div>
			</div>
			<!-- village idiot -->
			<div class="ui five wide column">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.VILLAGE_IDIOT_VALUE" :value="constants.VILLAGE_IDIOT_VALUE" v-model="divines" :id="constants.VILLAGE_IDIOT_VALUE">
					<label :for="constants.VILLAGE_IDIOT_VALUE">{{localizedLabel.VILLAGE_IDIOT}}</label>
				</div>
			</div>
		</div>
		<div class="ui fifteen wide column row">
			<!-- Savior -->
			<div class="ui five wide column">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.SAVIOR_VALUE" :value="constants.SAVIOR_VALUE" v-model="divines" :id="constants.SAVIOR_VALUE">
					<label :for="constants.SAVIOR_VALUE">{{localizedLabel.SAVIOR}}</label>
				</div>
			</div>
			<!-- Sneak -->
			<div class="ui five wide column">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.SNEAK_VALUE" :value="constants.SNEAK_VALUE" v-model="divines" :id="constants.SNEAK_VALUE">
					<label :for="constants.SNEAK_VALUE">{{localizedLabel.SNEAK}}</label>
				</div>
			</div>
			<!-- Silencer -->
			<div class="ui five wide column">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.SILENCER_VALUE" :value="constants.SILENCER_VALUE" v-model="divines" :id="constants.SILENCER_VALUE">
					<label :for="constants.SILENCER_VALUE">{{localizedLabel.SILENCER}}</label>
				</div>
			</div>
		</div>
		<div class="ui fifteen wide column row">
			<!-- Cupid -->
			<div class="ui five wide column">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.CUPID_VALUE" :value="constants.CUPID_VALUE" v-model="divines" :id="constants.CUPID_VALUE">
					<label :for="constants.CUPID_VALUE">{{localizedLabel.CUPID}}</label>
				</div>
			</div>
			<div class="ui five wide column"></div>
			<div class="ui five wide column"></div>
		</div>
		<!-- Town Folks -->
		<div class="ui fifteen wide column row">
			<div class="ui horizontal divider">
				{{ localizedLabel.TOWN_FOLKS }}
			</div>
		</div>
		<div class="ui fourteen wide column row">
			<div class="ui seven wide column common-char-label">
				<label>{{ localizedLabel.TOWN_FOLKS }}</label>
			</div>
			<div class="ui seven wide column">
				<button class="ui teal basic button common-char-button" v-on:touchstart="decrementTownFolkNum">
					<i class=" minus icon"></i>
				</button>
				<div class="ui three wide column common-char-num">
					<label class="ui">{{ numOfTownFolks }}</label>
				</div>
				<button class="ui teal basic button common-char-button" v-on:touchstart="incrementTownFolkNum">
					<i class="plus icon"></i>
				</button>
			</div>
		</div>
		<!-- Wolves -->
		<div class="ui fifteen wide column row">
			<div class="ui horizontal divider">
				{{ localizedLabel.WOLF }}
			</div>
		</div>
		<div class="ui fourteen wide column row">
			<div class="ui seven wide column common-char-label">
				<label>{{ localizedLabel.WOLF }}</label>
			</div>
			<div class="ui seven wide column">
				<button class="ui teal basic button common-char-button" v-on:touchstart="decrementWolfNum">
					<i class=" minus icon"></i>
				</button>
				<div class="ui three wide column common-char-num">
					<label class="ui">{{ numOfWolves }}</label>
				</div>
				<button class="ui teal basic button common-char-button" v-on:touchstart="incrementWolfNum">
					<i class="plus icon"></i>
				</button>
			</div>
		</div>
		<div class="ui fourteen wide column row">
			<!-- Wolf King -->
			<div class="ui seven wide column wolf-character">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.WOLF_KING_VALUE" :value="constants.WOLF_KING_VALUE" v-model="wolves" :id="constants.WOLF_KING_VALUE">
					<label :for="constants.WOLF_KING_VALUE">{{localizedLabel.WOLF_KING}}</label>
				</div>
			</div>
			<!-- Wolf Beauty -->
			<div class="ui seven wide column wolf-character">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.WOLF_BEAUTY_VALUE" :value="constants.WOLF_BEAUTY_VALUE" v-model="wolves" :id="constants.WOLF_BEAUTY_VALUE">
					<label :for="constants.CUPID_VALUE">{{localizedLabel.WOLF_BEAUTY}}</label>
				</div>
			</div>
		</div>
		<div class="ui fifteen wide column row">
			<div class="ui horizontal divider">
				{{ localizedLabel.OTHERS }}
			</div>
		</div>
		<div class="ui fifteen wide column row">
			<!-- Thief -->
			<div class="ui five wide column thief">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.THIEF_VALUE" :value="constants.THIEF_VALUE" v-model="others" :id="constants.THIEF_VALUE">
					<label :for="constants.THIEF_VALUE">{{localizedLabel.THIEF}}</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { labels } from  "../../common/labels";
import language from "../../common/lang_code";
import { constants } from "../../common/constants";
import * as utils from "../../common/utils";

export default {
	name: 'create-room',
	data() {
		return {
			// current language used in app
			currentLang: language.getLanguageCode(),
			constants: constants,
			utils: utils,
			witchSelfRescue: false,
			witchBothPotion: false,
			numOfWolves: 0,
			numOfTownFolks: 0,
			divines: [],
			wolves: [],
			others: [],
		};
	},
	computed: {
        localizedLabel: function() {
			return labels[this.currentLang];
		},
		disableWitchOption: function() {
			return !utils.arrayContains(this.divines, this.constants.WITCH_VALUE);
		},
	},
	methods: {
		backButtonOnClick: function() {
			window.history.back();
		},
		incrementWolfNum: function() {
			this.numOfWolves ++;
		},
		decrementWolfNum: function() {
			this.numOfWolves --;
		},
		incrementTownFolkNum: function() {
			this.numOfTownFolks ++;
		},
		decrementTownFolkNum: function() {
			this.numOfTownFolks --;
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.create-room-main {
	margin-top: 40px !important;
}

header {
	font-size: 1.25rem;
	padding-top: 3rem !important;

	i {
		font-size: 2rem;
	}
}

.divider::before, .divider::after {
	top: 0 !important;
	padding-bottom: 0;
}

.common-char-button {
	margin: 0 !important;
	float: left !important;
	width: 28.5714%;
	text-align: center;
	padding-left: 0 !important;
	padding-right: 0 !important;
	
	i {
		margin: 0 !important;		
	}
}

.common-char-num {
	width: 42.8571%;
	float: left !important;
}

.common-char-label, .common-char-num {
	line-height: 36px;
	vertical-align: middle;
	text-align: center !important;
}

.wolf-character, .thief {
	text-align: center !important;
}

.row {
	padding-bottom: 0.5rem !important;
}

</style>
