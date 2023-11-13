import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player2);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      // Player 1 ataca Player 2
      const damageByPlayer1 = this.player1.attack(this.player1);
      this.player2.receiveDamage(damageByPlayer1);

      if (this.player2.lifePoints <= -1) {
        return 1; // Player 1 venceu
      }

      // Player 2 ataca Player 1
      const damageByPlayer2 = this.player2.attack();
      this.player1.receiveDamage(damageByPlayer2);

      if (this.player1.lifePoints <= -1) {
        return -1; // Player 2 venceu
      }
    }
  }
}

export default PVP;