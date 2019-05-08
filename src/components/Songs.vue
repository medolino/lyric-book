<template>
  <div class="songList">
    <div v-if="songList" class="content">
      <b-list-group>
        <b-list-group-item v-for="(song, index) in songList" :key="song.id">
          <router-link :to="{ name: 'Song', params: { id: song.id }}">
            {{ index + 1 }}. {{ song.author }} - {{ song.title }}
          </router-link>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import lyrics from '../assets/custom/lyrics.json';

export default {
  name: 'Songs',
  data() {
    return {
      songList: lyrics,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.songList {
  text-align: left;
}

.songList a {
  display: block;
}
</style>
