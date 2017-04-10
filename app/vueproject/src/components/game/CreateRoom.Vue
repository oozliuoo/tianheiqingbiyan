<template>
	<div class="create-room-main ui sixteen column centered padded grid">
		<header class="teal ui sixteen wide column row">
			<div class="ui four wide column aligned header-back-btn" v-on:click="backButtonOnClick">
				<i class="angle left icon"></i>
			</div>
			<div class="ui eight wide column aligned header-text">
				{{ localizedLabel.PLAYER_CONFIG }}
			</div>
			<div class="ui four wide column create-button" v-on:click="createRoom">
				<i class="checkmark icon"></i>
			</div>
		</header>
		<div class="ui fifteen wide column row">
			<div class="ui horizontal divider">
				{{ localizedLabel.DIVINES }}
			</div>
		</div>
		<div class="ui fifteen wide column row">
			<!-- witch -->
			<div class="ui five wide column" v-on:click.stop="utils.onTouchStart">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.WITCH_VALUE" :value="constants.WITCH_VALUE" v-model="divines":id="constants.WITCH_VALUE">
					<label :for="constants.WITCH_VALUE">{{localizedLabel.WITCH}}</label>
				</div>
			</div>
			<!-- both potion -->
			<div class="ui five wide column" v-on:click.stop="utils.onTouchStart">
				<div class="ui slider checkbox">
					<input type="checkbox" :name="constants.CAN_USE_BOTH_POTION_VALUE" :value="constants.CAN_USE_BOTH_POTION_VALUE" :disabled="disableWitchOption" v-model="witchBothPotion" :id="constants.CAN_USE_BOTH_POTION_VALUE">
					<label :for="constants.CAN_USE_BOTH_POTION_VALUE">{{ localizedLabel.CAN_USE_BOTH_POTION }}</label>
				</div>
			</div>
			<!-- self rescue -->
			<div class="ui five wide column" v-on:click.stop="utils.onTouchStart">
				<div class="ui slider checkbox">
					<input type="checkbox" :name="constants.CAN_SELF_RESCUE_VALUE" :value="constants.CAN_SELF_RESCUE_VALUE" :disabled="disableWitchOption" v-model="witchSelfRescue" :id="constants.CAN_SELF_RESCUE_VALUE">
					<label :for="constants.CAN_SELF_RESCUE_VALUE">{{ localizedLabel.CAN_SELF_RESCUE }}</label>
				</div>
			</div>
		</div>
		<div class="ui fifteen wide column row">
			<!-- fortune teller -->
			<div class="ui five wide column" v-on:click.stop="utils.onTouchStart">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.FORTUNE_TELLER_VALUE" :value="constants.FORTUNE_TELLER_VALUE" v-model="divines" :id="constants.FORTUNE_TELLER_VALUE">
					<label :for="constants.FORTUNE_TELLER_VALUE">{{localizedLabel.FORTUNE_TELLER}}</label>
				</div>
			</div>
			<!-- hunter -->
			<div class="ui five wide column" v-on:click.stop="utils.onTouchStart">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.HUNTER_VALUE" :value="constants.HUNTER_VALUE" v-model="divines" :id="constants.HUNTER_VALUE">
					<label :for="constants.HUNTER_VALUE">{{localizedLabel.HUNTER}}</label>
				</div>
			</div>
			<!-- village idiot -->
			<div class="ui five wide column" v-on:click.stop="utils.onTouchStart">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.VILLAGE_IDIOT_VALUE" :value="constants.VILLAGE_IDIOT_VALUE" v-model="divines" :id="constants.VILLAGE_IDIOT_VALUE">
					<label :for="constants.VILLAGE_IDIOT_VALUE">{{localizedLabel.VILLAGE_IDIOT}}</label>
				</div>
			</div>
		</div>
		<div class="ui fifteen wide column row">
			<!-- Savior -->
			<div class="ui five wide column" v-on:click.stop="utils.onTouchStart">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.SAVIOR_VALUE" :value="constants.SAVIOR_VALUE" v-model="divines" :id="constants.SAVIOR_VALUE">
					<label :for="constants.SAVIOR_VALUE">{{localizedLabel.SAVIOR}}</label>
				</div>
			</div>
			<!-- Silencer -->
			<div class="ui five wide column" v-on:click.stop="utils.onTouchStart">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.SILENCER_VALUE" :value="constants.SILENCER_VALUE" v-model="divines" :id="constants.SILENCER_VALUE">
					<label :for="constants.SILENCER_VALUE">{{localizedLabel.SILENCER}}</label>
				</div>
			</div>
			<!-- Cupid -->
			<div class="ui five wide column" v-on:click.stop="utils.onTouchStart">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.CUPID_VALUE" :value="constants.CUPID_VALUE" v-model="divines" :id="constants.CUPID_VALUE">
					<label :for="constants.CUPID_VALUE">{{localizedLabel.CUPID}}</label>
				</div>
			</div>
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
				<button class="ui teal basic button common-char-button" v-on:click="decrementTownFolkNum">
					<i class=" minus icon"></i>
				</button>
				<div class="ui three wide column common-char-num">
					<label class="ui">{{ numOfTownFolks }}</label>
				</div>
				<button class="ui teal basic button common-char-button" v-on:click="incrementTownFolkNum">
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
				<button class="ui teal basic button common-char-button" v-on:click="decrementWolfNum">
					<i class=" minus icon"></i>
				</button>
				<div class="ui three wide column common-char-num">
					<label class="ui">{{ numOfWolves }}</label>
				</div>
				<button class="ui teal basic button common-char-button" v-on:click="incrementWolfNum">
					<i class="plus icon"></i>
				</button>
			</div>
		</div>
		<div class="ui fifteen wide column row">
			<!-- Wolf King -->
			<div class="ui five wide column wolf-character" v-on:click.stop="utils.onTouchStart">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.WOLF_KING_VALUE" :value="constants.WOLF_KING_VALUE" v-model="wolves" :id="constants.WOLF_KING_VALUE" :disabled="disableWolfKing">
					<label :for="constants.WOLF_KING_VALUE">{{localizedLabel.WOLF_KING}}</label>
				</div>
			</div>
			<!-- Wolf Beauty -->
			<div class="ui five wide column wolf-character" v-on:click.stop="utils.onTouchStart">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.WOLF_BEAUTY_VALUE" :value="constants.WOLF_BEAUTY_VALUE" v-model="wolves" :id="constants.WOLF_BEAUTY_VALUE" :disabled="disableWolfBeauty">
					<label :for="constants.WOLF_BEAUTY_VALUE">{{localizedLabel.WOLF_BEAUTY}}</label>
				</div>
			</div>
			<!-- Daemon -->
			<div class="ui five wide column wolf-character" v-on:click.stop="utils.onTouchStart">
				<div class="ui checkbox">
					<input type="checkbox" :name="constants.DAEMON_VALUE" :value="constants.DAEMON_VALUE" v-model="wolves" :id="constants.DAEMON_VALUE" :disabled="disableDaemon">
					<label :for="constants.DAEMON_VALUE">{{localizedLabel.DAEMON}}</label>
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
			<div class="ui five wide column thief" v-on:click.stop="utils.onTouchStart">
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
import router from '../../router';

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
		/**
		 * Localized labels that are dependent on langu code  
		 */
        localizedLabel: function() {
			return labels[this.currentLang];
		},
		/**
		 * Determines whether witch options should be disabled or not  
		 */
		disableWitchOption: function() {
			return !utils.arrayContains(this.divines, this.constants.WITCH_VALUE);
		},
		/**
		 * Determines whether wolf king should be disabled or not  
		 */
		disableWolfKing: function() {
			return this.numOfWolves <= this.wolves.length && this.numOfWolves < this.constants.NUM_OF_WOLF_CHAR && !utils.arrayContains(this.wolves, this.constants.WOLF_KING_VALUE);
		},
		/**
		 * Determines whether wolf beauty should be disabled or not  
		 */
		disableWolfBeauty: function() {
			return this.numOfWolves <= this.wolves.length && this.numOfWolves < this.constants.NUM_OF_WOLF_CHAR && !utils.arrayContains(this.wolves, this.constants.WOLF_BEAUTY_VALUE);
		},
		/**
		 * Determines whether daemon should be disabled or not  
		 */
		disableDaemon: function() {
			return this.numOfWolves <= this.wolves.length && this.numOfWolves < this.constants.NUM_OF_WOLF_CHAR && !utils.arrayContains(this.wolves, this.constants.DAEMON_VALUE);
		},
		/**
		 * Constructed game metadata whenever input fields are changed.
		 * Will be used to send web request
		 */
		gameMetadata: function() {
			return {
				human: this.numOfTownFolks,
				wolf: this.numOfWolves,
				white_wolf: this.utils.arrayContains(this.wolves, this.constants.WOLF_KING_VALUE) ? 1 : 0,
				beauty_wolf: this.utils.arrayContains(this.wolves, this.constants.WOLF_BEAUTY_VALUE) ? 1 : 0,
				daemon: this.utils.arrayContains(this.wolves, this.constants.DAEMON_VALUE) ? 1 : 0,
				prophet: this.utils.arrayContains(this.divines, this.constants.FORTUNE_TELLER_VALUE) ? 1 : 0,
				witch: this.utils.arrayContains(this.divines, this.constants.WITCH_VALUE) ? 1 : 0,
				selfRescue: this.witchSelfRescue ? 1 : 0,
				doubleActions: this.witchBothPotion ? 1 : 0,
				hunter: this.utils.arrayContains(this.divines, this.constants.HUNTER_VALUE) ? 1 : 0,
				idiot: this.utils.arrayContains(this.divines, this.constants.VILLAGE_IDIOT_VALUE) ? 1 : 0,
				guardian: this.utils.arrayContains(this.divines, this.constants.SAVIOR_VALUE) ? 1 : 0,
				elder_of_silence: this.utils.arrayContains(this.divines, this.constants.SILENCER_VALUE) ? 1 : 0,
				cupid: this.utils.arrayContains(this.divines, this.constants.CUPID_VALUE) ? 1 : 0,
				thief: this.utils.arrayContains(this.others, this.constants.THIEF_VALUE) ? 1 : 0,
				numOfCharacters: this.totalPlayer,
			};
		},
		totalPlayer: function() {
			const hasThief = this.utils.arrayContains(this.others, this.constants.THIEF_VALUE)
			const plainCount = this.numOfTownFolks + this.numOfWolves + this.wolves.length + this.divines.length + this.others.length;

			if (hasThief) {
				return plainCount - 2;
			} else {
				return plainCount;
			}
		},
	},
	methods: {
		/**
		 * Click event handler for back button
		 */
		backButtonOnClick: function() {
			window.history.back();
		},
		/**
		 * Click event handler for incrementing wolf num button
		 */
		incrementWolfNum: function() {
			this.numOfWolves ++;
		},
		/**
		 * Click event handler for decrementing wolf num button
		 */
		decrementWolfNum: function() {
			if (this.numOfWolves > 0) {
				this.numOfWolves --;

				if (this.numOfWolves === 0) {
					this.wolves = [];
				}
				else if (this.numOfWolves < this.constants.NUM_OF_WOLF_CHAR) {
					while (this.wolves.length > this.numOfWolves) {
						this.wolves.pop();
					}
				}
			}
		},
		/**
		 * Click event handler for incrementing town folk num button
		 */
		incrementTownFolkNum: function() {
			this.numOfTownFolks ++;
		},
		/**
		 * Click event handler for decrementing town folk num button
		 */
		decrementTownFolkNum: function() {
			if (this.numOfTownFolks > 0) {
				this.numOfTownFolks --;
			}
		},
		/**
		 * Creates room by posting game metadata to server
		 */
		createRoom: function() {
			this.$http.post(
				constants.SERVER_ROOT + constants.SERVER_CREATE_GAME_PATH,
				this.gameMetadata,
			).then(
			(response) => {
				if (response.status == 200) {
					router.push({ path: 'main', query: { roomId: response.body, isHost: true, totalPlayer: this.totalPlayer } });
				}
			},
			(response) => {
				// TODO: need error modal dialog and remove the fake navigate
				console.log(response);
				// fake navigation
				router.push({ path: 'main', query: { roomId: 1001, isHost: true, totalPlayer: this.totalPlayer } });
			});
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.create-room-main {
	margin-top: 40px !important;

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
		padding-bottom: 0rem !important;
		padding-top: 0.5rem !important;
		line-height: 3.4285rem !important;
	}

	.header-back-btn {
		text-align: left !important;
	}

	.create-button {
		text-align: right !important;
	}

	header.row {
		font-size: 1.25rem;
		padding-top: 1.75rem !important;
		padding-bottom: 0rem !important;

		i {
			font-size: 2rem;
		}
	}

	.fourteen.wide.column {
		padding-bottom: .5rem !important;
	}
}

</style>
