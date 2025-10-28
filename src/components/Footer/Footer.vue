<template>
  <footer class="footer">
    <div class="links">
      <div class="footer-logo">
        <a href="#">
          <img
            src="../../../public/logo2.svg"
            alt="logo"
            width="30"
            height="30"
          />
        </a>
        <strong>ALGORITM</strong>
      </div>
      <div class="footer-nav">
        <ul>
          <li><a href="#">Bosh sahifa</a></li>
          <li><a href="#">Biz haqimizda</a></li>
        </ul>
        <ul>
          <li><a href="#">Kurslar</a></li>
          <li><a href="#">Yangiliklar</a></li>
        </ul>
        <ul>
          <li><a href="#">Eventlar</a></li>
          <li><a href="#">Sertifikatlar</a></li>
        </ul>
        <ul>
          <li><a href="#">Aloqa markazi</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <p>©Algoritm 2024 | Privacy Policy | Certified Policy | Legal</p>
    </div>

    <div class="social-icons">
      <span class="icon-box">
        <i class="fa-brands fa-telegram icon"></i>
      </span>
      <span class="icon-box">
        <i class="fa-brands fa-youtube icon"></i>
      </span>
      <span class="icon-box">
        <i class="fa-brands fa-facebook icon"></i>
      </span>
      <span class="icon-box">
        <i class="fa-brands fa-instagram icon"></i>
      </span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  height: 300px;
  background: #0d0d0d;
  color: #fff;
  padding: 40px 200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-left: -40px;
}
.footer-logo strong {
  margin-left: -40px;
}
.links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.links p {
  font-weight: 400;
  font-size: 13px;
  color: #ffffff66;
}
.links img {
  width: 130px;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.footer-nav a {
  font-weight: 500;
  font-size: 20px;
  color: #ffffff80;
  text-decoration: none;
  transition: 0.3s;
}

.footer-nav a:hover {
  color: #ffffff;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 10px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);

  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 80px;
}

.icon-box:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-3px);
  color: #fff;
}

.icon {
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
}
</style>
