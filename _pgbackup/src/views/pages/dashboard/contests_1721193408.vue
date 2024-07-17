<template> 
    <div class="cards-container"> 
        <div class="card" v-for="card in cards" :key="card.id"> 
            <div class="card-body"> 
                <h4 class="card-title mb-4">{{ card.cardTitle }}</h4> 
                <div class="card-content"> 
                    <h5 class="main-title">{{ card.mainTitle }}</h5> 
                    <p class="description">{{ card.description }}</p> 
                </div>                 
            </div>             
        </div>         
    </div>     
</template> 
<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          cardTitle: 'Upcoming - 7/20',
          mainTitle: 'Large Buy Competition',
          description: 'Total Prizes: 1 Trillion LPC. $25 Minimum Buy! 5 Winners Total (200B Each)'
        },
        {
          id: 2,
          cardTitle: 'Leprechaun Treasure Found',
          mainTitle: 'Hidden Treasure Discovered!',
          description: 'A hidden leprechaun treasure was found by a group of kids playing in the woods. The treasure is said to contain gold coins and ancient artifacts.'
        },
        {
          id: 3,
          cardTitle: 'Leprechaun Festival',
          mainTitle: 'Annual Leprechaun Festival',
          description: 'The annual leprechaun festival is set to take place next month. It promises fun activities, games, and a parade.'
        },
        {
          id: 4,
          cardTitle: 'Leprechaun Legend',
          mainTitle: 'The Legend of the Leprechaun',
          description: 'An old legend about leprechauns has resurfaced. The legend tells the tale of a leprechaun who outsmarted a king to protect his pot of gold.'
        }
      ]
    };
  }
};
</script> 
<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: calc(50% - 20px);
  margin-bottom: 20px;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
}

.main-title {
  font-size: 20px;
  margin-top: 10px;
}

.description {
  font-size: 16px;
  margin-top: 10px;
  color: #555;
}
</style>
