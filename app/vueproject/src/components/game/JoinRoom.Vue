<template>
	<div class="join-room-main ui sixteen column centered padded grid">
		<header class="teal ui sixteen wide column row">
			<div class="ui four wide column aligned header-back-btn" v-on:click="backButtonOnClick">
				<i class="angle left icon"></i>
			</div>
			<div class="ui eight wide column aligned header-text">
				{{ localizedLabel.JOIN_ROOM }}
			</div>
			<div class="ui four wide column aligned header-placehold">
			</div>
		</header>
		<section class="room-id-input ui sixteen wide column row">
			<div class="ui sixteen wide column aligned room-id-prompt">
				{{ localizedLabel.ENTER_ROOM_ID }}
			</div>
			<div class="ui eight wide column aligned">
				<div class="digit-wrapper">
					<div class="digit-container">
						<div class="field">
							{{ roomIdDigits.length > 0 ? roomIdDigits[0] : "" }}
						</div>
					</div>
					<div class="digit-container">
						<div class="field">
							{{ roomIdDigits.length > 1 ? roomIdDigits[1] : "" }}
						</div>
					</div>
					<div class="digit-container">
						<div class="field">
							{{ roomIdDigits.length > 2 ? roomIdDigits[2] : "" }}
						</div>
					</div>
					<div class="digit-container">
						<div class="field">
							{{ roomIdDigits.length > 3 ? roomIdDigits[3] : "" }}
						</div>
					</div>
				</div>
			</div>
		</section>
		<form class="hidden">
			<input class="hidden" v-model.number="input" type="number" pattern="[0-9]*"/>
		</form>
	</div>
</template>

<script>
import { labels } from  "../../common/labels";
import language from "../../common/lang_code";
import { keycodes } from "../../common/keycodes";
import { constants } from "../../common/constants";
import router from '../../router'
import keyboard from 'vue-keyboard';

export default {
	name: 'join-room',
	data() {
		return {
			// current language used in app
			currentLang: language.getLanguageCode(),
			isHost: this.$route.query.isHost,
			roomIdDigits: [],
			constants: constants,
			input: '',
		};
	},
	components: { keyboard },
	created: function() {
		$(window).on('keydown', this.onRoomIdInput);
		this.roomIdDigits = [];
	},
	mounted: function() {
		$("input.hidden").on('focusout', function() {
			$(".join-room-main").css({ "padding-top": "0" });
		});
		$("input.hidden").focus();
		$(".join-room-main").css({ "padding-top": "1.75rem" });
	},
	computed: {
		/**
		 * Localized labels that are dependent on langu code  
		 */
        localizedLabel: function() {
			return labels[this.currentLang];
		},
		/**
		 * Computed room id based on user inputs
		 */
		roomId: function() {
			if (this.$route.query.roomId) {
				return this.$route.query.roomId;
			} else if (this.roomIdDigits.length == 4){
				return this.roomIdDigits[0] * 1000 + this.roomIdDigits[1] * 100 + this.roomIdDigits[2] * 10 + this.roomIdDigits[3];
			} else {
				return null;
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
		 * Input event handler for room id inputs
		 * @param event - the event object
		 */
		onRoomIdInput: function(event) {
			if (event.keyCode == keycodes.BACK_SPACE || event.keyCode == keycodes.DELETE) {
				this.roomIdDigits.pop();
			} else if (event.keyCode >= keycodes.ZERO && event.keyCode <= keycodes.NINE) {
				if (this.roomIdDigits.length <= 4) {
					this.roomIdDigits.push(event.keyCode - keycodes.ZERO);
				}
			}

			if (this.roomIdDigits.length == 4) {
				this.joinRoom({ roomId: this.roomId, uuid: window.device.uuid ? window.device.uuid : "" });
			}
		},
		/**
		 * Join a room by providing room Id and device's uuid 
		 * @param data - data passed to the api
		 */
		joinRoom: function(data) {
			this.$http.post(
				constants.SERVER_ROOT + constants.SERVER_JOIN_ROOM_PATH,
				data,
			).then(
			(response) => {
				if (response.status == 200) {
					// get number of seats in order to display seat ui
					router.push({ path: 'main', query: { roomId: this.roomId, isHost: false, totalPlayer: response.body.num_of_seats } });
				}
			},
			(response) => {
				// TODO: need error modal dialog
				console.log(response);
			});
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.hidden {
	height: 0;
	width: 0;
	opacity: 0;
	z-index: -20;
	padding: 0;
}
.row {
	padding-bottom: 0rem !important;
	padding-top: 0.5rem !important;
	line-height: 3.4285rem !important;
}

header.row {
	font-size: 1.25rem;
	padding-top: 1.75rem !important;
	padding-bottom: 0rem !important;

	i {
		font-size: 2rem;
	}

	.header-back-btn {
		text-align: left !important;
	}
}

.room-id-input {
	margin-top: 60px;

	.digit-wrapper {
		height: 50px;
		width: 200px;
		margin: 10px auto;
	}

	.digit-container {
		float: left;
		height: 50px;
		width: 50px;
		border: #dfdfdf 1px solid;

		.field {
			height: 100%;
			width: 100%;
			line-height: 50px;
			font-size: 1.5rem;
		}
	}
}
</style>
