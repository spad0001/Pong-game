import Drawable from './Drawable.js';
export default class ScoreItem extends Drawable {
    score;
    speed;
    dialogArray = [];
    update(elapsed) {
    }
    getDialog() {
        return this.dialogArray;
    }
    getScore() {
        return this.score;
    }
}
//# sourceMappingURL=ScoreItem.js.map