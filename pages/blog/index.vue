<template>
<div>
        <b-row
          id="posts"
        >
		

          <b-col v-for="article of articles" :key="article.slug" class="col-sm-3">
            <b-card class="post horizontal" no-body>
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              >
			  	<div class="shell">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
                <div class="wsk-cp-product">
          <div class="wsk-cp-img">
            <img                         :src="article.thumbnail"
                        left
                        blank-color="#d0b8ac"
                        loading="lazy"
                        alt="" />
          </div>
                                        <div class="wsk-cp-text">

                                            <div class="title-product">
                                                <h3>{{ article.title }}</h3>
                                            </div>
                                        </div>
        </div>
      </div>
    </div>
  </div>
          </div>
              </NuxtLink>
            </b-card>
          </b-col>
        </b-row>
</div>
</template>

<script>

export default {
  components: { },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only([
        'id',
        'title',
        'slug',
        'description',
        'img',
        'thumbnail',
        'date',
        'url',
        'published',
        'theme',
        'main_ingredient',
        'time',
        'difficulty',
        'country',
        'veggie',
        'sweety_salty'
      ])
      .sortBy('id', 'desc')
      .where({ published: 1 })
      .limit(30)
      .fetch()
    return {
      articles
    }
  },
  data() {
    return {
      title: 'Les dernières recettes de Josie'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Retrouvez sur mon site toutes les recettes que j'ai publiées sur mon compte Instagram @josiesrecipes"
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://res.cloudinary.com/thibaults/image/upload/v1606424632/partage-home.png'
        }
      ]
    }
  }
}

  
</script>

<style lang="scss" scoped>

</style>