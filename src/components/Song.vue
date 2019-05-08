<template>
  <div v-if="song" :key="$route.params.id">
    <b-card v-bind:title="song.title" v-bind:sub-title="song.author">
        <p v-html="song.lyrics" class="card-text"></p>

        <a href="#" class="card-link" style="float: left" v-if="prevId !== false">
          <router-link :to="{ name: 'Song', params: { id: prevId }}" replace>
            <icon name="chevron-left"></icon> <strong>previous</strong>
          </router-link>
        </a>
        <b-link href="#" class="card-link" style="float: right" v-if="nextId !== false">
          <router-link :to="{ name: 'Song', params: { id: nextId }}" :key="nextId">
            <strong>next</strong> <icon name="chevron-right"></icon>
          </router-link>
        </b-link>
    </b-card>
  </div>
</template>

<script>
import lyrics from '../assets/custom/lyrics.json';

export default {
  name: 'Song',
  props: ['id'],
  data() {
    const songId = this.$route.params.id;
    const song = lyrics.find(item => item.id === songId);

    const prevId = (songId > 1) ? songId - 1 : false;
    const nextId = (lyrics.find(item => item.id === (songId + 1))) ? songId + 1 : false;

    return {
      song,
      prevId,
      nextId,
    };
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      const songId = this.$route.params.id;
      this.song = lyrics.find(item => item.id === songId);

      this.prevId = (songId > 1) ? songId - 1 : false;
      this.nextId = (lyrics.find(item => item.id === (songId + 1))) ? songId + 1 : false;
    },
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.card-text {
  margin: 20px 0 30px 0;
}

.card-link strong {
  display: inline-block;
  vertical-align: middle;
  padding: 0 5px;
}

</style>
