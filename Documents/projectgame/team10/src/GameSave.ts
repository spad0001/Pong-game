export default class GameSave {
    private points: number;

    public constructor() {
        this.points = 0;
    }

    public savePoints(amount: number) {
        this.points = amount;
    }

    public loadPoints(): number {
        return this.points;
    }
}