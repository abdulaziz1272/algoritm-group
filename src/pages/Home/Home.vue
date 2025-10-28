<template>
  <section class="home">
    <div class="text">
      <h1>Ustozidan o‘zib ketgan shogird</h1>
      <p>
        Men Bekzod, 13 yoshdaman. Dasturlashga qiziqaman va hozirda Node.js
        (Express), PostgreSQL, va React PWA bilan ishlayman. Asosan
        authentication va authorization (JWT, access token, refresh token) kabi
        xavfsizlik tizimlari ustida ishlayman.
      </p>
      <p>
        Doim yangi texnologiyalarni o‘rganishga intilaman va loyihalarimni
        takomillashtirishga harakat qilaman.
      </p>
    </div>
    <div class="image">
      <img :src="image" alt="Bekzot's image" />
    </div>
  </section>
</template>
<script>
import image from "../../assets/images/image.png";
export default {
  data() {
    return {
      image,
    };
  },
};
</script>
<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0d0d0d;
  padding-left: 50px;
  margin: 20px 200px;
  border-radius: 10px;
}
.text {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 580px;
}
.text h1 {
  font-weight: 700;
  font-style: Bold;
  font-size: 56px;
  line-height: 58px;
  text-transform: uppercase;
  color: #ffffff;
}
.text p {
  font-weight: 300;
  font-style: Light;
  font-size: 17px;
  line-height: 120%;
  color: #ffffffb2;
}
</style>
