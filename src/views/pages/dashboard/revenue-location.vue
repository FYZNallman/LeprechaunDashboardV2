<script>
/**
 * Revenue by Locations component
 */
export default {
  data() {
    return {
      series: [
        {
          name: "South",
          data: [12, 32, 10, 15, 20, 32],
        },
        {
          name: "North",
          data: [18, 12, 25, 25, 15, 20],
        },
        {
          name: "Central",
          data: [12, 30, 20, 25, 27, 25],
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
          height: 196,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        colors: ["#5438DC", "#564ab1", "#5664d2"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          },
        },
        legend: {
          show: false,
        },
        labels: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
         yaxis: {
          labels: {
            show: false,
          },
        },
      },
    };
  },
};
</script> 
