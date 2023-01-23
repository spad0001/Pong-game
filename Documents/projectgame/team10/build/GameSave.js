export default class GameSave {
    points;
    constructor() {
        this.points = 0;
    }
    savePoints(amount) {
        this.points = amount;
    }
    loadPoints() {
        return this.points;
    }
}
//# sourceMappingURL=GameSave.js.map