/**
 * Defines all models used in this project
 */
class Seat {
    constructor(nickname) {
        this.occupied = false;
        this.nickname = nickname;
        this.alive = true;
        this.selected = false;
    }

    /**
     * Setter and getters
     */
    set occupied(value) {
        this.occupied = value;
    }
    get occupied() {
        return this.occupied;
    }

    set nickname(value) {
        this.nickname = value;
    }
    get nickname() {
        return this.nickname;
    }

    set alive(value) {
        this.alive = value;
    }
    get alive() {
        return this.alive;
    }

    set selected(value) {
        this.selected = value;
    }
    get selected() {
        return this.selected;
    }
}

export {
    Seat,
}