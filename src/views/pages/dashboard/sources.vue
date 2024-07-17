<script>
/**
 * Sources Component
 */
export default {
  data() {
    return {
      source1: {
        series: [
          {
            data: [23, 32, 27, 38, 27, 32, 27, 34, 26, 31, 28]
          }
        ],
        chartOptions: {
          chart: {
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            width: [3],
            curve: "smooth"
          },
          colors: ["#5664d2"],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                }
              }
            },
            marker: {
              show: false
            }
          }
        }
      },
      source2: {
        series: [
          {
            data: [24, 62, 42, 84, 63, 25, 44, 46, 54, 28, 54]
          }
        ],
        chartOptions: {
          chart: {
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            width: [3],
            curve: "smooth"
          },
          colors: ["#5664d2"],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {}
            },
            marker: {
              show: false
            }
          }
        }
      },
      source3: {
        series: [
          {
            data: [42, 31, 42, 34, 46, 38, 44, 36, 42, 32, 54]
          }
        ],
        chartOptions: {
          chart: {
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            width: [3],
            curve: "smooth"
          },
          colors: ["#5664d2"],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                }
              }
            },
            marker: {
              show: false
            }
          }
        }
      }
    };
  }
};
</script> 
