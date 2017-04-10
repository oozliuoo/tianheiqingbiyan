<template>
	<div class="main-page-main ui sixteen column centered padded grid">
		<header class="teal ui sixteen wide column row">
			<div class="ui four wide column aligned header-back-btn" v-on:click="backButtonOnClick">
				<i class="angle left icon"></i>
			</div>
			<div class="ui eight wide column aligned header-text">
				{{ `${localizedLabel.ROOM_ID}: ${this.roomId}` }}
			</div>
			<div class="ui four wide column aligned header-menu">
			</div>
		</header>
        <section class="seats ui sixteen wide column row" v-if="seats.length > 0">
            <div class="seats-container">
                <div class="seat-wrapper" v-for="seat in seats">
                    <button class="seat ui basic teal button">
                    </button>
                    <label>{{ "Hello" }}</label>
                </div>
            </div>
        </section>
        <footer class="teal ui sixteen wide column row">

        </footer>
	</div>
</template>

<script>
import { labels } from  "../../common/labels";
import language from "../../common/lang_code";
import { keycodes } from "../../common/keycodes";
import { Seat } from "../../common/models";

export default {
	name: 'main',
	data() {
		return {
			// current language used in app
			currentLang: language.getLanguageCode(),
			isHost: this.$route.query.isHost,
            roomId: this.$route.query.roomId,
            totalPlayer: this.$route.query.totalPlayer,
            seats: [],
		};
	},
	created: function() {
        for (let i = 0; i < this.totalPlayer; i++) {
            this.seats.push({});
        }
	},
	computed: {
		/**
		 * Localized labels that are dependent on langu code  
		 */
        localizedLabel: function() {
			return labels[this.currentLang];
		},
	},
	methods: {
		/**
		 * Click event handler for back button
		 */
		backButtonOnClick: function() {
			window.history.back();
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-page-main {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    .row {
    }

    header.row {
        line-height: 3.4285rem !important;
        font-size: 1.25rem;
        padding-top: 1.75rem !important;
        padding-bottom: 0rem !important;
        height: 5.1785rem !important;

        i {
            font-size: 2rem;
        }

        .header-back-btn {
            text-align: left !important;
        }
    }

    section.seats {
        position: relative;
        height: calc(100% - 9.1785rem);
        max-height: calc(100% - 9.1785rem);
        overflow-y: auto;
        padding: 1rem !important;
        padding-bottom: 0 !important;


        .seats-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            height: 0;

            .seat-wrapper {
                display: flex;
                flex-direction: column;
                position: relative;
                width: 85px;
                height: 85px;
                padding: 0 12.5px;
                margin: 10px 0;

                .seat {
                    height: 60px;
                    width: 60px;
                    color: #000;
                    margin-bottom: 5px;
                }
            }
        }
    }

    footer.row {
        font-size: 1rem;
        height: 4rem !important;
    }
}
</style>
