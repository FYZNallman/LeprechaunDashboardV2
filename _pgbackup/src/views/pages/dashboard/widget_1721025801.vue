<template> 
    <div class="card-container"> 
        <div class="card custom-card" v-for="(data, index) in statData" :key="index" :style="{ backgroundImage: data.backgroundImage }"> 
            <div class="card-body custom-card-body"> 
                <div class="d-flex flex-column align-items-center justify-content-center"> 
                    <h4 class="card-title mb-4 text-center text-white">{{ data.title }}</h4> <i :class="`${data.icon} icon-size`" v-if="data.icon"></i> 
                </div>                 
            </div>             
        </div>         
    </div>     
</template> 
<script>
/**
 * Widget Component
 */
export default {
  data() {
    return {
      statData: [
        {
          title: "View Your Wallet",
          value: "1452",
          subvalue: " 2.4% ",
          backgroundImage: "url('images/cardbg.png')",
          icon: "ri-wallet-line",
        },
        {
          title: "Leprechaun Swap",
          value: "$ 38452",
          subvalue: " 2.4% ",
          backgroundImage: "url('images/cardbg.png')",
          icon: "ri-refresh-line",
        },
        {
          title: "Contests",
          value: "$ 15.4",
          subvalue: " 2.4% ",
          backgroundImage: "url('images/cardbg.png')",
          icon: "ri-trophy-line",
        },
        {
          title: "Chart",
          value: "$ 15.4",
          subvalue: " 2.4% ",
          backgroundImage: "url('images/cardbg.png')",
          icon: "ri-line-chart-line",
        },
      ],
    };
  },
};
</script> 
<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  gap: 20px; /* Adjust the gap between cards */
  justify-content: center; /* Center the cards horizontally */
  flex-wrap: nowrap; /* Prevent wrapping on smaller screens */
}

.custom-card {
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px; /* Makes the corners rounded */
  overflow: hidden; /* Ensures content stays within rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow for better visual appearance */
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center; /* Centers the text and icon */
}

.custom-card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-title {
  color: #fff; /* Makes the text white */
}

.icon-size {
  font-size: 36px; /* Adjust the icon size as needed */
  color: #fff; /* Makes the icon white */
}

@media (max-width: 1200px) {
  .card-container {
    flex-wrap: wrap; /* Allows cards to wrap on smaller screens */
  }

  .custom-card {
    width: 100%; /* Full width on smaller devices */
  }
}
</style>
