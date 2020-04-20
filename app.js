new Vue({
    el: '#app',
    data() {
        return {
            running: false,
            playerLife: 100,
            monsterLife: 100
        }
    },
    watch: {

    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {

    },
});