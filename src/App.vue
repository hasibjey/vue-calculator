<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'history'}">History</router-link>
    <router-link :to="{ name: 'setting'}">setting</router-link>
  </nav>
  <router-view/>
</template>
