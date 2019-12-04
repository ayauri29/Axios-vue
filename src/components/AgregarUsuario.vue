<template lang="pug">
div.container
  form(@submit.prevent='leerAPI')
    .form-group
      label.control-label Nombre
      .input-group
        input.form-control(
          v-model='nombre'
        )
      label.control-label Job
      .input-group
        input.form-control(
          v-model='job'
        )
        span.input-group-btn
          button.btn.btn-primary(
            type='submit'
          ) Agregar
  div Usuario creado:
    table.table.table-hover.table-striped
          thead
            tr
              th ID
              th Nombre
              th Trabajo
              th Fecha de creacion
          tbody
            tr
              td {{ usuario.id }}
              td {{ usuario.name }}
              td {{ usuario.job }}
              td {{ usuario.createdAt }}
              td
                img(
                  :src='usuario.avatar'
                )
</template>

<script>
const axios = require("axios");
export default {
  name: "Agregar",
  data() {
    return {
      usuario: [],
      nombre: "",
      job: ""
      //el maximo de resultados que devuelve este API es de 12 por pagina
    };
  },
  methods: {
    leerAPI() {
      axios
        .post("https://reqres.in/api/users", {
            name: this.nombre,
            job: this.job,
        })
        .then(response => {
          console.log(response.data);
          this.usuario = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    // this.leerAPI();
  }
};
</script>
