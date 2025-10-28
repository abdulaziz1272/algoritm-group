<template>
  <section class="certificate">
    <div class="text">
      <h1>
        Algoritm Ta’limdan olgan Sertifikatingizni tez va oson tekshiring!
      </h1>
      <p>
        Sertifikat raqamingizni kiriting va natijani bir necha soniya ichida
        oling.
      </p>
    </div>
    <div class="check">
      <div class="inputs">
        <input type="text" placeholder="ID-AT021" />
        <button>Tekshirish</button>
        <!-- <i class="fa-solid fa-id-card"></i> -->
      </div>
      <div class="install">
        <p>Sertifikatni yuklab olish</p>
        <i class="fa-solid fa-download"></i>
      </div>
    </div>
  </section>
  <div class="container">
    <img :src="certificate" alt="certificate image" />
  </div>
</template>

<script>
import certificate from "../../assets/images/certificate.png";
export default {
  data() {
    return {
      certificate,
    };
  },
};
</script>

<style scoped>
.certificate {
  background: #0d0d0d;
  margin: 20px 200px;
  border-radius: 10px;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.certificate .text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.certificate h1 {
  max-width: 1020px;
  font-weight: 700;
  font-size: 60px;
  line-height: 65px;
  text-transform: uppercase;
  color: #ffffff;
}
.certificate p {
  font-weight: 400;
  font-size: 23px;
  line-height: 100%;
  color: #ffffffb2;
}
.certificate .check {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.certificate button,
input {
  height: 50px;
  border-radius: 10px;
  padding: 8px 14px;
  border: none;
  outline: none;
}
.certificate .inputs {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
.certificate input {
  color: #ffffffb2;
  font-weight: 400;
  font-size: 20px;

  background: #242424e4;
}
.certificate input:focus,
.certificate input:active {
  border: 1px solid #f8da0a;
}
.certificate button {
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  box-shadow: 2px 3px 4px 0px #f8d80040;
  background: #f8da0a;
  padding: 6px 20px;
  cursor: pointer;
}
.install {
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
}
i {
  color: white;
  font-size: 24px;
}
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 10px;
}
.container img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}
</style>
