<template> 
    <div class="card"> 
        <div class="card-body"> 
            <h4 class="card-title mb-4">Latest Leprechaun News</h4> 
            <div class="list-group"> <a v-for="news in newsHeadlines" :key="news.id" :href="news.url" target="_blank" class="list-group-item list-group-item-action flex-column align-items-start">  <div class="d-flex w-100 justify-content-between"> 
                        <div class="d-flex align-items-center"> 
                            <div class="news-icon" v-html="news.icon"></div>                             
                            <h5 class="mb-1">{{ news.title }}</h5> 
                        </div>                         <small>{{ news.date }}</small> 
                    </div>  <p class="mb-1">{{ news.summary }}</p>  </a> 
            </div>             
        </div>         
    </div>     
</template> 
<script>
import { newsHeadlines } from '@/data/newsData.js'; // Ensure this path is correct

export default {
  data() {
    return {
      newsHeadlines
    };
  },
};
</script> 
<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.card-body {
  padding: 20px;
}

.list-group-item {
  border: none;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

.list-group-item:hover {
  background-color: #f1f1f1;
}

.list-group-item h5 {
  font-size: 18px;
  margin-left: 10px; /* Add some space between icon and title */
}

.list-group-item small {
  font-size: 14px;
  color: #888;
}

.list-group-item p {
  font-size: 16px;
  color: #555;
}

.news-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: inline-block;
}
</style>
