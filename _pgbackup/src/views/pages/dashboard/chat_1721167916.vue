<script>
import { required, email, helpers } from "@vuelidate/validators";
import simplebar from "simplebar-vue";
import avatarImage from '@/assets/images/users/avatar-2.jpg';
/**
 * Chat component
 */
export default {
  components: { simplebar },
  data() {
    return {
      submitted: false,
      avatarImage: avatarImage,
      chat: {
        message: "",
      },
      ChatData: [
        {
          id: 1,
          name: "Frank Vickery",
          message: "Hey! I am available",
          image: avatarImage,
          time: "12:09",
        },
        {
          id: 2,
          align: "right",
          name: "Ricky Clark",
          message: "Hi, How are you? What about our next meeting?",
          time: "10:02",
        },
        {
          text: "Today",
        },
        {
          id: 3,
          name: "Frank Vickery",
          message: "Hello!",
          image: avatarImage,
          time: "10:06",
        },
        {
          id: 4,
          name: "Frank Vickery",
          message: "& Next meeting tomorrow 10.00AM",
          image: avatarImage,
          time: "10:06",
        },
        {
          id: 5,
          align: "right",
          name: "Ricky Clark",
          message: "Wow that's great",
          time: "10:07",
        },
      ],
    };
  },
  validations: {
    chat: {
      required: helpers.withMessage("Password is required", required),
    },
  },
  mounted() {
    var container2 = document.querySelector(
      "#containerElement .simplebar-content-wrapper"
    );
    container2.scrollTo({ top: 500, behavior: "smooth" });
  },
  methods: {
    /**
     * Char form Submit
     */
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$touch;

      if (this.$invalid) {
        return;
      } else {
        const id = this.ChatData.length;
        const message = this.chat.message;
        const currentDate = new Date();
        this.ChatData.push({
          id: id + 1,
          align: "right",
          name: "Ricky Clark",
          message,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
        this.handleScroll();
      }
      this.submitted = false;
      this.chat = {};
    },

    handleScroll() {
      if (this.$refs.current.$el) {
        setTimeout(() => {
          this.$refs.current.SimpleBar.getScrollElement().scrollTop =
            this.$refs.current.SimpleBar.getScrollElement().scrollHeight + 1500;
        }, 500);
      }
    },
  },
};
</script> 
<template> 
    <div class="card">                            
</div>     
</template>