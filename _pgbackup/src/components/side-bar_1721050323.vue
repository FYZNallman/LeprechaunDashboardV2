<template> 
    <div class="vertical-menu"> 
        <simplebar class="h-100" ref="currentMenu" id="my-element"> 
            <div id="sidebar-menu"> 
                <ul class="metismenu list-unstyled" id="side-menu"> 
                    <template v-for="item in menuItems"> 
                        <li class="menu-title" v-if="item.isTitle" :key="item.id">{{ $t(item.label) }}</li>                         
                        <li v-if="!item.isTitle && !item.isLayout" :key="item.id"> <a v-if="hasItems(item)" href="javascript:void(0);" class="is-parent" :class="{
                'has-arrow': !item.badge,
                'has-dropdown': item.badge,
              }">  <i :class="`bx ${item.icon}`" v-if="item.icon"></i>  <span>{{ $t(item.label) }}</span>  <span :class="`badge rounded-pill bg-${item.badge.variant} float-end`" v-if="item.badge">{{ $t(item.badge.text) }}</span>  </a> 
                            <router-link :to="item.link" v-if="!hasItems(item)" class="side-nav-link-ref"> <i :class="`bx ${item.icon}`" v-if="item.icon"></i> <span>{{ $t(item.label) }}</span> <span :class="`badge rounded-pill bg-${item.badge.variant} float-end`" v-if="item.badge">{{ $t(item.badge.text) }}</span> 
                            </router-link>                             
                            <ul v-if="hasItems(item)" class="sub-menu" aria-expanded="false"> 
                                <li v-for="(subitem, index) of item.subItems" :key="index"> 
                                    <router-link :to="subitem.link" v-if="!hasItems(subitem)" class="side-nav-link-ref">{{ $t(subitem.label) }}</router-link>                                     <a v-if="hasItems(subitem)" class="side-nav-link-a-ref has-arrow" href="javascript:void(0);">{{ subitem.label }}</a> 
                                    <ul v-if="hasItems(subitem)" class="sub-menu mm-collapse" aria-expanded="false"> 
                                        <li v-for="(subSubitem, index) of subitem.subItems" :key="index"> 
                                            <router-link :to="subSubitem.link" class="side-nav-link-ref">{{ $t(subSubitem.label) }}</router-link>                                             
                                        </li>                                         
                                    </ul>                                     
                                </li>                                 
                            </ul>                             
                        </li>                         
                    </template>                     
                    <li> <a href="javascript: void(0);" class="has-arrow waves-effect">  <i class="ri-share-line"></i>  <span>Multi Level</span>  </a> 
                        <ul class="sub-menu" aria-expanded="true"> 
                            <li>
                                <a href="javascript: void(0);">Level 1.1</a> 
                            </li>                             
                            <li> <a href="javascript: void(0);" class="has-arrow">Level 1.2</a> 
                                <ul class="sub-menu" aria-expanded="true"> 
                                    <li>
                                        <a href="javascript: void(0);">Level 2.1</a> 
                                    </li>                                     
                                    <li>
                                        <a href="javascript: void(0);">Level 2.2</a> 
                                    </li>                                     
                                </ul>                                 
                            </li>                             
                        </ul>                         
                    </li>                     
                </ul>                 
                <div class="prize-section"> 
                    <center> 
                        <img src="/images/trophy.png" alt="Trophy" class="trophy-image"> 
                        <div class="prize-bubble"> 
                            <div class="prizetitle"> 
                                <h2 class="prizetitleelementor-heading-title elementor-size-default">CURRENT <br>PRIZE POOL<br></h2> 
                            </div>                             
                            <div class="currentprizepool"> <span class="pot-amount-top"><span class="lpc-pot" data-format="bnb"></span> BNB</span> 
                            </div>                             
                            <div class="currentprizepoolusd"> <span class="pot-amount-usd-top">$<span class="lpc-pot" data-format="usd"></span></span> 
                            </div>                             
                            <div> <span class="lasttx">⏱️<b>LAST BUY TX</b>: <span class="lpc-pot" data-format="time"></span></span> 
                            </div>                             
                            <div> <span class="lasttxtime"><span class="lpc-pot" data-format="diff"></span></span> 
                            </div>                             
                        </div>                         
                    </center>                     
                </div>                 
                <div class="external-links"> <a href="https://twitter.com" target="_blank" class="external-link-button">  <img src="/images/twitter.png" alt="Twitter"/>  </a> <a href="https://bscscan.com" target="_blank" class="external-link-button">  <img src="/images/twitter.png" alt="BSCScan"/>  </a> <a href="https://telegram.org" target="_blank" class="external-link-button">  <img src="/images/telegram.png" alt="Telegram"/>  </a> 
                </div>                 
            </div>             
        </simplebar>         
    </div>     
</template> 
<script>
import simplebar from "simplebar-vue";
import { layoutComputed } from "@/state/helpers";
import { MetisMenu } from 'metismenujs';
import { menuItems } from "./menu";

export default {
  components: {
    simplebar,
  },
  props: {
    isCondensed: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      menuItems: menuItems,
    };
  },
  computed: {
    ...layoutComputed,
  },
  mounted() {
    var menuRef = new MetisMenu("#side-menu");
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;
      if (parent) {
        parent.classList.add("mm-active");
        const parent2 = parent.parentElement.closest("ul");
        if (parent2 && parent2.id !== "side-menu") {
          parent2.classList.add("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("mm-active");
            var childAnchor = parent3.querySelector(".has-arrow");
            var childDropdown = parent3.querySelector(".has-dropdown");
            if (childAnchor) childAnchor.classList.add("mm-active");
            if (childDropdown) childDropdown.classList.add("mm-active");

            const parent4 = parent3.parentElement;
            if (parent4 && parent4.id !== "side-menu") {
              parent4.classList.add("mm-show");
              const parent5 = parent4.parentElement;
              if (parent5 && parent5.id !== "side-menu") {
                parent5.classList.add("mm-active");
                const childanchor = parent5.querySelector(".is-parent");
                if (childanchor && parent5.id !== "side-menu") {
                  childanchor.classList.add("mm-active");
                }
              }
            }
          }
        }
      }
    }

    // Initialize the script for the prize pool section
    this.initPrizePoolScript();
  },
  methods: {
    hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    onRoutechange() {
      setTimeout(() => {
        const currentPosition = document.getElementsByClassName("mm-active")[0]
          .offsetTop;
        if (currentPosition > 400)
          this.$refs.currentMenu.SimpleBar.getScrollElement().scrollTop =
            currentPosition + 200;
      }, 300);
    },
    initPrizePoolScript() {
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.jsdelivr.net/npm/ethers@6/dist/ethers.umd.min.js';
      document.body.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = 'https://cdn.jsdelivr.net/npm/luxon@3.4.4/build/global/luxon.min.js';
      document.body.appendChild(script2);

      script2.onload = () => {
        const script3 = document.createElement('script');
        script3.type = 'text/javascript';
        script3.innerHTML = `
          "use strict";

          (() => {
            const lpcContract = new ethers.Contract(
              "0xd445f4cCb4c73AF58bBa206bf255918e85c19b65",
              [
                "function calculatePrizes(uint8 places) public view returns (uint256[] memory)",
                "function lastTxTime() view returns (uint256)",
              ],
              new ethers.JsonRpcProvider("https://bsc-dataseed1.binance.org/")
            );

            let bnbPrice = null;
            const updateBnbPrice = async () => {
              bnbPrice = (
                await fetch(
                  "https://api.binance.com/api/v3/avgPrice?symbol=BNBUSDT"
                ).then((res) => res.json())
              ).price;
            };
            const updateBnbPriceProcess = async () => {
              updateBnbPrice().finally(() => {
                setTimeout(updateBnbPriceProcess, 60000);
              });
            };

            const getLpcInfo = async () => {
              const ret = {
                potAmount: parseFloat(
                  ethers.formatEther((await lpcContract.calculatePrizes(1))[0])
                ).toFixed(4),
                lastTxTime: new Date(Number(await lpcContract.lastTxTime()) * 1000),
              };

              window._LEPRECHAUN_TOKEN_ = ret;

              return ret;
            };

            const updateDiff = () => {
              [
                ...document.querySelectorAll(".lpc-pot[data-time][data-format='diff']"),
              ].forEach((x) => {
                const diffInSeconds = parseInt((Date.now() - x.dataset.time) / 1000);
                const m = Math.floor(diffInSeconds / 60);
                const s = diffInSeconds - m * 60;
                let text = "";
                if (m > 0) text += m + " minute" + (m > 1 ? "s" : "") + " ";
                text += s + " second" + (s > 1 ? "s" : "") + " ";
                text += "ago";
                x.innerText = text;
              });
            };

            const startProcess = async () => {
              getLpcInfo()
                .then((info) => {
                  [...document.querySelectorAll(".lpc-pot")].forEach((x) => {
                    switch (x.dataset.format) {
                      case "bnb":
                        x.innerText = info.potAmount;
                        break;
                      case "usd":
                        if (bnbPrice) {
                          x.innerText = parseFloat(bnbPrice * info.potAmount).toFixed(
                            2
                          );
                        }
                        break;
                      case "time":
                        x.innerText = luxon.DateTime.fromJSDate(
                          info.lastTxTime
                        ).toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS);
                        break;
                      case "diff":
                        x.dataset.time = info.lastTxTime.getTime();
                        break;
                    }
                  });
                })
                .finally(() => {
                  setTimeout(startProcess, 5000);
                });
            };

            updateBnbPriceProcess().finally(() => startProcess());

            setInterval(updateDiff, 1000);
          })();
        `;
        document.body.appendChild(script3);
      };
    },
  },
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-sidebar", "dark");
              document.body.removeAttribute("data-topbar");
              document.body.removeAttribute("data-sidebar-size");
              break;
            case "light":
              document.body.setAttribute("data-topbar", "dark");
              document.body.removeAttribute("data-sidebar");
              document.body.removeAttribute("data-sidebar-size");
              document.body.classList.remove("vertical-collpsed");
              break;
            case "compact":
              document.body.setAttribute("data-sidebar-size", "small");
              document.body.setAttribute("data-sidebar", "dark");
              document.body.classList.remove("vertical-collpsed");
              document.body.removeAttribute("data-topbar", "dark");
              break;
            case "icon":
              document.body.setAttribute("data-keep-enlarged", "true");
              document.body.classList.add("vertical-collpsed");
              document.body.setAttribute("data-sidebar", "dark");
              document.body.removeAttribute("data-topbar", "dark");
              break;
            case "colored":
              document.body.setAttribute("data-sidebar", "colored");
              document.body.removeAttribute("data-keep-enlarged");
              document.body.classList.remove("vertical-collpsed");
              document.body.removeAttribute("data-sidebar-size");
              break;
            default:
              document.body.setAttribute("data-sidebar", "dark");
              break;
          }
        }
      },
    },
    width: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-size", "boxed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-mode", "fluid");
              document.body.removeAttribute("data-layout-size");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      },
    },
  },
};
</script> 
<style scoped>
.prize-section {
  padding:20px;
  text-align: center;
}

.prizetitle {
  margin-bottom: 1px;
}

.currentprizepool, .currentprizepoolusd, .lasttx, .lasttxtime {
  margin-bottom: 10px;
  color: #fff; /* Make text white */
}

.lasttx b {
  font-size: 16px;
}

.prizetitleelementor-heading-title {
  font-size: 24px;
}

.prizetitleelementor-heading-title, .lpc-pot {
  color: #fff; /* Make text white */
}

.prize-bubble {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20%;
  padding: 20px;
  display: inline-block;
  text-align: center;
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.trophy-image {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  filter: brightness(0) invert(1); /* Apply white color overlay */
}

.external-links {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.external-link-button {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  overflow: hidden;
}

.external-link-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
