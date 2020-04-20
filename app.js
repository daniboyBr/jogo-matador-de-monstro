new Vue({
    el: '#app',
    data() {
        return {
            running: false,
            playerLife: 100,
            monsterLife: 100,
            logs: []
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false;
        }
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {
        startGame() {
            this.running = true;
            this.logs = [];
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        attack(especial) {
            this.hurt('monsterLife', 5, 10, especial, 'Monstro', 'Jogador', 'monster');

            if (this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Jogador', 'Monstro', 'player');
            }
        },
        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - hurt, 0);
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls);
        },
        healAndHurt() {
            this.heal(10, 15);
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
        },
        heal(min, max) {
            const heal = this.getRandom(min, max);
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player');
            this.playerLife = Math.min(this.playerLife + heal, 100);
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
        registerLog(text, cls) {
            this.logs.unshift({
                text,
                cls
            });
        }
    },
});