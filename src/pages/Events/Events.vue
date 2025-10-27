<template>
  <section class="events">
    <div class="header">
      <h1>Hackathonda qatnashish uchun quyidagi ma’lumotlarni taqdim eting:</h1>
      <div>
        <span>📌</span>
      </div>
      <p>
        Ro‘yxatdan o‘tish muddati va qabul qilinadigan ishtirokchilar soni
        cheklangan. Arizani imkon qadar tezroq topshiring!
      </p>
    </div>
    <hr />
    <form class="form">
      <div class="inputs">
        <div class="left-input">
          <input type="text" placeholder="To‘liq ism" />
          <input type="text" placeholder="Telefon raqami" />
        </div>
        <div class="right-input">
          <input type="email" placeholder="Email manzil" />
          <input type="text" placeholder="Jamoa nomi" />
        </div>
      </div>

      <div class="team-member">
        <div class="team-box-head">
          <div>
            <h3>Jamoa a’zolari</h3>
            <p>Har bir a’zoning ismi bosh harfi</p>
          </div>
          <img :src="userAddIcon" alt="Add Member" />
        </div>

        <div class="team-members-list">
          <div
            class="team-member-item"
            v-for="(member, index) in members"
            :key="index"
          >
            {{ member.name.charAt(0).toUpperCase() }}
          </div>

          <div class="team-member-item add-member" @click="addMember"></div>
        </div>
      </div>
    </form>

    <div class="rules">
      <div class="roles-head">
        <h2>Hackathon qoidalari va shartlari</h2>
        <p>Ishtirokchilar quyidagi qoidalarga rioya qilishlari shart:</p>
      </div>
      <div class="items-box">
        <div class="item-left">
          <ul>
            <li class="head"><strong>Umumiy Qoidalar</strong></li>
            <li>
              Hackathon individual yoki jamoaviy shaklda o‘tkaziladi. Har bir
              jamoa faqat bitta loyiha taqdim etishi mumkin. Ro‘yxatdan o‘tgan
              ishtirokchilar faqat o‘z jamoalarida qatnashishi kerak.
            </li>
          </ul>

          <ul>
            <li class="head"><strong>Etika va Odob Qoidalari</strong></li>
            <li>
              Ishtirokchilar o‘zaro hurmat bilan muomala qilishlari kerak.
              Plagiat yoki boshqa ishtirokchilarning ishlarini nusxalash
              qat’iyan man etiladi. Kiberxavfsizlik qoidalariga rioya qilinishi
              shart.
            </li>
          </ul>
        </div>

        <div class="item-center">
          <ul>
            <li class="head"><strong>Loyiha Talablari</strong></li>
            <li>
              Loyiha hackathon davomida ishlab chiqilishi kerak. Oldindan
              tayyorlangan kodning cheklangan qismi ishlatilishi mumkin, lekin
              loyiha asosan hackathon davomida yaratilgan bo‘lishi lozim.
              Loyihalar ochiq manba yoki huquqiy cheklovlarsiz bo‘lishi kerak.
            </li>
          </ul>

          <ul>
            <li class="head"><strong>Shartlarga Rozilik</strong></li>
            <li>
              Ro‘yxatdan o‘tish orqali ishtirokchilar barcha qoidalarni qabul
              qilgan hisoblanadi. Hackathon tashkilotchilari istalgan vaqtda
              qoidalarni o‘zgartirish huquqiga ega.
            </li>
          </ul>
        </div>

        <div class="item-right">
          <ul>
            <li class="head"><strong>Baholash va Mukofotlar</strong></li>
            <li>
              G‘oliblar hakamlar hay’ati tomonidan baholash mezonlariga
              asoslanib aniqlanadi. Baholash kriteriyalari quyidagilar bo‘lishi
              mumkin: innovatsion yondashuv, texnik sifati, dizayni va taqdimot
              sifati. Taqdimot jarayonida loyiha to‘liq ishlashi talab etiladi.
            </li>
          </ul>

          <ul>
            <li class="head"><strong>Eslatma ‼️</strong></li>
            <li>
              Har qanday qoida buzilishi ishtirokchining diskvalifikatsiya
              qilinishiga sabab bo‘lishi mumkin.
            </li>
          </ul>
        </div>
      </div>
      <div class="rules-accept">
        <div class="rules-checkboxes">
          <label class="label">
            <input type="checkbox" />
            <span
              >Men yuqoridagi shartlarni o‘qidim va ularga to‘liq rozilik
              bildiraman.</span
            >
          </label>

          <label class="label">
            <input type="checkbox" />
            <span
              >Ro‘yxatdan o‘tishda taqdim etgan barcha ma’lumotlarim aniq va
              to‘g‘ri ekanligini tasdiqlayman.</span
            >
          </label>
        </div>

        <div class="btn">
          <button class="send-btn">Yuborish</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import userAddIcon from "../../assets/icons/user-add.svg";

export default {
  name: "Events",
  data() {
    return {
      members: [
        { name: "A" },
        { name: "D" },
        { name: "G" },
        { name: "U" },
        { name: "U" },
      ],
      userAddIcon,
    };
  },
  methods: {
    // addMember() {
    //   this.members.push({ name: "?" });
    // },
  },
};
</script>

<style scoped>
.events {
  background: #000000;
  height: 100vh;
  padding: 20px 150px;
}
.header {
  display: flex;
  align-items: start;
  gap: 80px;
}
.header div {
  display: flex;
  align-items: center;
}
.header h1 {
  width: 550px;
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  color: #ffffff;
}
.header span {
  font-size: 48px;
}
.header p {
  width: 390px;
  font-weight: 300;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
  margin-left: -70px;
}
hr {
  margin: 30px 0;
  border: 1px solid #ffffff1a;
}
.form {
  display: flex;
  align-items: center;
  gap: 25px;
}
.inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.left-input,
.right-input {
  display: flex;
  gap: 20px;
}
.inputs input {
  width: 390px;
  height: 54px;
  border-radius: 10px;
  background: #0d0d0d;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 20px;
  color: #ffffffb2;
  padding: 8px 12px;
}

.inputs input:focus {
  border: 0.5px solid #ffe000;
}
/* Team members */
.team-member {
  width: 339px;
  height: 130px;
  border-radius: 10px;
  background: #0d0d0d;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
}
.team-box-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.team-box-head img {
  cursor: pointer;
}
.team-members-list {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
.team-member h3 {
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
}
.team-member p {
  font-weight: 400;
  font-size: 15px;
  color: #ffffffb2;
  margin-top: 6px;
}
.team-member-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171717;
  color: #ffffff;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-weight: bold;
  font-size: 20px;
  cursor: default;
}
.team-member-item.add-member {
  background-color: #e0f7ff;
  cursor: pointer;
}
.team-member-item.add-member img {
  width: 20px;
  height: 20px;
}
/* Roles */
.roles-head {
  display: flex;
  align-items: start;
  margin-top: 25px;
  gap: 25px;
}
.roles-head h2 {
  width: 208px;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
}
.roles-head p {
  width: 345px;
  font-weight: 300;
  font-size: 22px;
  color: #ffffff80;
}
.items-box {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 25px;
  margin-top: 35px;
}
.items-box li {
  font-weight: 250;
  font-size: 14px;
  line-height: 18px;
  color: #ffffffcc;
}
.items-box li strong {
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
}
.items-box .head {
  margin-bottom: 10px;
}
.item-left,
.item-center,
.item-right {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.item-left li {
  width: 350px;
}
.item-center li {
  width: 320px;
}
.item-right li {
  width: 380px;
}
.rules-accept {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;
  flex-wrap: wrap;
  gap: 20px;
}
.rules-checkboxes {
  display: flex;
  gap: 60px;
  max-width: 800px;
}
.rules-accept .label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  color: #ffffffb2;
  cursor: pointer;
}
.rules-accept input[type="checkbox"] {
  width: 30px;
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
  accent-color: #dec400;
}
.send-btn {
  width: 187px;
  height: 60px;
  border-radius: 10px;
  background: linear-gradient(105.41deg, #ffe000 -123.73%, #dec400 100%);
  color: #0d0d0d;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  font-size: 29px;
}
.send-btn:hover {
  opacity: 0.85;
}
</style>
