<script setup>
import { ref } from 'vue';

const step = ref(1);
const pass = 'rPVWn3zrLPat';
const valuePass = ref('');
const valueID = ref('');
const error = ref(false)
const error2 = ref(false)
const suc = ref(false)

const sendPasss = (e) => {
  e.preventDefault();
  if (valuePass.value === pass) {
    error.value = false;
    step.value = 2;
  } else {
    error.value = true;
  }
}

const myHeaders = new Headers();
myHeaders.append("ordersauthorization", "Bearer f6ad3694393419c1434c1f1f8a72a31e9bfc65ea5de43b1ceab092857bfd9fb7130c5720720bf47ad624125e3fb3e14aee7e201c3cbf42db7a22055cc0cadd744d2e35b203dde36198aeaef0280bea5e52ff1d43a6517b09744afb88b7948fb95e57817483c663ddc4e6a6d6459fae82e1081668e461f775c758d96e1c423cd0");
myHeaders.append("authorization", "rPVWn3zrLPat");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const sendData = (e) => {
  e.preventDefault();
  fetch("https://berezka64.ru/orders-success/"+valueID.value, requestOptions)
  .then(response => response.text())
  .then(result => {
    suc.value = true
    error2.value = false;
    console.log(result)
  })
  .catch(error => {
    suc.value = false
    error2.value = true;
    console.log('error', error.value)
  });
}

</script>

<template>
  <div>
    <form v-if="step === 1">
      <p style="margin: 0; color: red;" v-if="error">Проверьте пароль</p>
      <input v-model="valuePass" type="text" placeholder="Введите пароль">
      <button @click="sendPasss($event)">Отправить</button>
    </form>
    <form v-if="step === 2">
      <p style="margin: 0; color: blue;" v-if="suc">Успешно</p>
      <p style="margin: 0; color: red;" v-if="error2">Проверьте ID</p>
      <input v-model="valueID" type="text" placeholder="Введите ID заказа">
      <button @click="sendData($event)" type="submit">Отправить</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  div {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;

      input {
        padding: 10px;
        border-radius: 10px;
        font-size: 16px;
      }

      button {
        padding: 5px;
        font-size: 17px;
        background-color: rgb(78, 78, 126);
        color: antiquewhite;
        border-radius: 10px;
      }
    }
  }
</style>