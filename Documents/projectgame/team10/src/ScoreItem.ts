import Drawable from './Drawable.js';

export default abstract class ScoreItem extends Drawable {
  protected score: number;

  protected speed: number;

  protected dialogArray: string[] = [];

  /**
   *
   * @param elapsed time number.
   */
  public update(elapsed: number): void {
    
  }

  public getDialog(): string[] {
    return this.dialogArray;
  }

  public getScore(): number {
    return this.score;
  }
}
