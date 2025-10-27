<!-- src/components/Header.vue -->
<template>
  <header class="site-header">
    <nav>
      <ul>
        <li class="logo">
          <img src="/logo.svg" alt="logo image" />
          <strong>ALGORITM</strong>
        </li>

        <li>
          <router-link
            to="/"
            class="nav-link"
            active-class="activ"
            exact-active-class="activ"
            exact
          >
            Bosh sahifa
          </router-link>
        </li>
        <li>
          <router-link to="/courses" class="nav-link" active-class="activ"
            >Kurslar</router-link
          >
        </li>
        <li>
          <router-link to="/events" class="nav-link" active-class="activ"
            >Eventlar</router-link
          >
        </li>
        <li>
          <router-link to="/about" class="nav-link" active-class="activ"
            >Biz haqimizda</router-link
          >
        </li>
        <li>
          <router-link to="/nowadays" class="nav-link" active-class="activ"
            >Yangiliklar</router-link
          >
        </li>
        <li>
          <router-link to="/sertificate" class="nav-link" active-class="activ"
            >Sertifikatlar</router-link
          >
        </li>
        <li>
          <router-link to="/call" class="nav-link" active-class="activ"
            >Aloqa markazi</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap");

.site-header {
  padding: 20px 200px;
  font-family: "Manrope", sans-serif;
}

.site-header ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 0;
}

.site-header li.logo img {
  height: 48px;
  display: block;
}

.site-header .logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.site-header .logo strong {
  color: #ffffff;
  font-size: 24px;
}

.site-header .nav-link {
  color: #ffffffb2;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  display: inline-block;
  padding: 10px 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

/* hover */
.site-header .nav-link:hover {
  color: #ffffff;
  background-color: #111;
}

.site-header .nav-link.activ,
.site-header .nav-link.router-link-exact-active {
  background-color: #111;
  color: #ffffff;
}
</style>
