<template>
  <div class="main-container">
    <h1>{{ msg }}</h1>
    <p>
      Here's a whole bunch of 'em.
    </p>
    <hr />
    <div class="characters">
      <article
        class="character"
        v-for="character in characters"
        :key="character.id"
      >
        <h2 class="character--name">{{ character.name }}</h2>
        <img class="character--image" :src="character.image" />
        <p class="character--description">
          Race: {{ character.race }} <br />
          Gender: {{ character.gender }}
        </p>
      </article>
    </div>
  </div>
</template>

<script>
import FetchHandler from "../api/fetchHandler";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      isLoading: true,
      characters: []
    };
  },
  created() {
    FetchHandler.getCharacterProfiles()
      .then(characterData => {
        console.log(characterData);
        this.characters = characterData.data;
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.isLoading = false;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.main-container {
  margin: 0 auto;
}

.character {
  margin-bottom: 20px;

  &--name {
    margin-bottom: 5px;
  }

  &--image {
    border-radius: 60px;
  }
}

/* Larger than mobile */
@media (min-width: 400px) {
}

/* Larger than phablet */
@media (min-width: 550px) {
}

/* Larger than tablet */
@media (min-width: 750px) {
  .character {
    width: 50%;
    float: left;
  }
}

/* Larger than desktop */
@media (min-width: 1000px) {
  .main-container {
    width: 960px;
  }

  .character {
    width: 33%;
    float: left;
  }
}
</style>
