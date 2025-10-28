<template>
  <div class="contact-wrapper">
    <section class="header">
      <h1>Har doim siz bilan aloqadamiz<span>*</span></h1>
      <h5>
        Biz bilan bog‘laning, kurslarimiz haqida batafsil ma’lumot olish yoki
        o‘quv jarayoni bo‘yicha savollaringizga javob topish uchun.
        <br />
        Har doim sizga yordam berishga va to‘g‘ri yo‘nalish tanlashda
        ko‘maklashishga tayyormiz!
      </h5>
    </section>

    <section class="map-section">
      <h2>📍 Bizning manzillar</h2>
      <div class="map-form">
        <!-- MAP -->
        <div id="map" class="map"></div>

        <!-- FORM -->
        <form @submit.prevent="submitForm" class="form">
          <h3>Kelajagingiz sari birinchi qadam — bepul konsultatsiya</h3>
          <p>
            Qaysi yo‘l siz uchun to‘g‘ri? O‘quv safaringizni qanday
            boshlaysiz? Telefon raqamingizni qoldiring — biz sizga qo‘ng‘iroq
            qilib, to‘g‘ri tanlov qilishingizga yordam beramiz.
          </p>

          <div class="form-inputs">
            <input v-model="form.name" type="text" placeholder="Ismingiz" required />
            <select v-model="form.profession" required>
              <option disabled value="">Kasb tanlang</option>
              <option>Web Dasturlash</option>
              <option>SMM</option>
              <option>Kiber havfsizlik</option>
            </select>
          </div>

          <div class="phone-row">
            <input
              v-model="form.phone"
              type="tel"
              placeholder="+998 90 123 45 67"
              required
              class="phone"
            />
            <button type="submit">Yuborish</button>
          </div>

          <label class="consent">
            <input type="checkbox" v-model="form.agree" required />
            Shaxsiy ma’lumotlar qayta ishlanishiga roziman
          </label>
        </form>
      </div>
    </section>

    <footer>
      <p>Namangan shahar, Davlat xizmatlari agentligi binosi, 2-qavat</p>
      <p><strong>Ish vaqti:</strong> 08:00 dan 18:00 gacha</p>
      <p><strong>Aloqa uchun:</strong> +99893-277-18-80</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import L from "leaflet";

const form = reactive({
  name: "",
  profession: "",
  phone: "",
  agree: false,
});

onMounted(() => {
  const map = L.map("map").setView([41.0, 71.67], 11);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
  L.marker([41.0, 71.67]).addTo(map).bindPopup("Namangan shahar");
});

function submitForm() {
  alert(`Rahmat, ${form.name}! Tez orada siz bilan bog‘lanamiz.`);
}
</script>

<style>
.contact-wrapper {
  padding: 20px 90px;
  background-color: #000;
  color: #fff;
}

/* Header */
.header {
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  align-items: center;
}
.header h5 {
  font-family: Manrope;
  font-weight: 400;
  font-style: Regular;
  font-size: 21px;
  line-height: 100%;
  letter-spacing: 0%;
}

.header h1 {
  font-size: 69px;
  font-weight: 700;
}

.header span {
  color: yellow;
}

.header p {
  font-weight: 400;
  font-size: 21px;
  line-height: 130%;
  letter-spacing: 0%;
  max-width: 900px;
}

/* Map section */
.map-section {
  padding: 40px 60px;
}

.map-section h2 {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
}

/* 📍 Eng muhim joy — layout tuzatildi */
.map-form {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
}

/* Xarita chapda */
.map {
  flex-basis: 65%;
  min-height: 420px;
  border-radius: 10px;
  overflow: hidden;
}

/* Forma o‘ngda */
.form {
  flex-basis: 35%;
  background: #111;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 0 20px rgba(255, 255, 0, 0.1);
}

.form h3 {
  color: #ff0;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
}

.form p {
  color: #bbb;
  font-size: 15px;
  line-height: 1.5;
}

/* Inputs */
.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 450px;
}

.form-inputs input,
.form-inputs select {
  background-color: #000;
  color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 15px;
}

.form-inputs select option {
  color: #000;
}

/* Telefon satri */
.phone-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.phone-row input[type="tel"] {
  flex: 1;
  background-color: #000;
  color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 15px;
  width: 340px;
}

.phone-row button {
  background: #ff0;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.phone-row button:hover {
  background: #ffe600;
}

/* Checkbox */
.consent {
  display: flex;
  gap: 8px;
  font-size: 14px;
  color: #ccc;
}

.consent input {
  accent-color: #ff0;
}

/* Footer */
footer {
  padding: 25px 60px;
  background: #111;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

footer p {
  font-weight: 600;
  font-size: 18px;
  margin: 5px 0;
}



</style>
