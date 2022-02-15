new Vue({
  el: '#app',
  data: {
    comecar_jogo: false,
    ganhou: false,
    perdeu: false,
    vida_inicial_jogador: 100,
    width_jogador: 100,
    life_jogador: 'green',
    width_monstro: 100,
    life_monstro: 'green',
    vida_inicial_monstro: 100,
    panel_log: false,
    panel_result: false,
    log: [],
    corJogador: true,
    corMonstro: true,
    gameOver: false
  },
  computed: {},
  methods: {
    atacar() {
      this.panel_log = true
      let ataque_jogador = Math.random() * 5
      ataque_jogador = Math.round(ataque_jogador)

      let ataque_monstro = Math.random() * 10
      ataque_monstro = Math.round(ataque_monstro)

      this.vida_inicial_jogador -= ataque_monstro

      this.width_jogador = `${this.vida_inicial_jogador}%`

      if (this.vida_inicial_jogador <= 25) {
        this.life_jogador = 'red'
      }

      // console.log(this.width_jogador)

      this.vida_inicial_monstro -= ataque_jogador

      this.width_monstro = `${this.vida_inicial_monstro}%`

      if (this.vida_inicial_monstro <= 25) {
        this.life_monstro = 'red'
      }

      this.log.unshift({
        ataque_jogador,
        ataque_monstro
      })

      console.log(this.log)

      if (this.vida_inicial_jogador <= 0) {
        this.vida_inicial_jogador = 0
        this.width_jogador = `0%`
        this.perdeu = true
        this.gameOver = true
        this.panel_result = true
      } else if (this.vida_inicial_monstro <= 0) {
        this.vida_inicial_monstro = 0
        this.width_monstro = `0%`
        this.ganhou = true
        this.gameOver = true
        this.panel_result = true
      }
    },

    especial() {
      this.panel_log = true

      let ataque_jogador = Math.random() * 20
      ataque_jogador = Math.round(ataque_jogador)

      let ataque_monstro = Math.random() * 10
      ataque_monstro = Math.round(ataque_monstro)

      this.vida_inicial_jogador -= ataque_monstro

      this.width_jogador = `${this.vida_inicial_jogador}%`

      if (this.vida_inicial_jogador <= 25) {
        this.life_jogador = 'red'
      }

      this.vida_inicial_monstro -= ataque_jogador

      this.width_monstro = `${this.vida_inicial_monstro}%`

      if (this.vida_inicial_monstro <= 25) {
        this.life_monstro = 'red'
      }

      this.log.unshift({
        ataque_jogador,
        ataque_monstro
      })

      // console.log(this.log)

      if (this.vida_inicial_jogador <= 0) {
        this.vida_inicial_jogador = 0
        this.width_jogador = `0%`
        this.panel_result = true
        this.perdeu = true
        this.gameOver = true
      } else if (this.vida_inicial_monstro <= 0) {
        this.vida_inicial_monstro = 0
        this.width_monstro = `0%`
        this.panel_result = true
        this.ganhou = true
        this.gameOver = true
      }
    },

    curar() {
      if (this.vida_inicial_jogador < 100) {
        let curar_jogador = Math.random() * 8
        curar_jogador = Math.round(curar_jogador)

        this.vida_inicial_jogador += curar_jogador

        if (this.vida_inicial_jogador > 100) {
          this.vida_inicial_jogador = 100
        }

        if (this.vida_inicial_jogador <= 25) {
          this.life_jogador = 'red'
        }

        let ataque_monstro = Math.random() * 10
        ataque_monstro = Math.round(ataque_monstro)

        this.vida_inicial_jogador -= ataque_monstro

        this.log.unshift({
          curar_jogador,
          ataque_jogador: null,
          ataque_monstro
        })
      }

      // console.log(this.log)

      if (this.vida_inicial_jogador <= 0) {
        this.vida_inicial_jogador = 0
        this.width_jogador = `0%`
        this.perdeu = true
        this.panel_result = true
      } else if (this.vida_inicial_monstro <= 0) {
        this.vida_inicial_monstro = 0
        this.width_monstro = `0%`
        this.ganhou = true
        this.panel_result = true
      }
    },

    desistir() {
      this.vida_inicial_jogador = 100
      this.vida_inicial_monstro = 100
      this.perdeu = false
      this.ganhou = false
      this.comecar_jogo = false
      this.log = []
      this.gameOver = false
      this.panel_result = false
      this.panel_log = false
      this.width_jogador = `100%`
      this.width_monstro = `100%`
      this.life_jogador = 'green'
      this.life_monstro = 'green'
    }
  },
  watch: {}
})
