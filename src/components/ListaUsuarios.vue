<template lang="pug">
  div.container-fluid#app
    .row
      .col-sm-12
        h1 Vue.js + Axios
        form(
          @submit.prevent='leerAPI'
        )
          .form-group
            label.control-label Cantidad de resultados
            .input-group
              input.form-control(
                v-model='cantidadResultados'
              )
              span.input-group-btn
                button.btn.btn-primary(
                  type='submit'
                ) Mostrar
        table.table.table-hover.table-striped
          thead
            tr
              th ID
              th Nombre
              th Apellidos
              th Imagen
          tbody
            tr(
              v-for='usuario of usuarios'
            )
              td {{ usuario.id }}
              td {{ usuario.first_name }}
              td {{ usuario.last_name }}
              td
                img(
                  :src='usuario.avatar'
                )
</template>

<script>
const axios = require('axios');
export default {
  name: "Lista",
  data(){
		return {
			usuarios: [],
			cantidadResultados: 5
			//el maximo de resultados que devuelve este API es de 12 por pagina
		}
  },
  methods: {
		leerAPI(){
			axios.get('https://reqres.in/api/users', {
				params: {
					'per_page': this.cantidadResultados
				}
			}).then(response => {
				this.usuarios = response.data.data
			}).catch(e => {
				console.log(e)
			})
		}
	},
	created(){
		this.leerAPI()
	}
}
</script>
