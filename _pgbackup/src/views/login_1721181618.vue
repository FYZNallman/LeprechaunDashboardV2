<template> 
    <div class="login-page"> 
        <h1>Login Page</h1> 
        <div id="telegram-login-widget"></div>         
    </div>     
</template> 
<script>
export default {
  name: 'Login',
  mounted() {
    this.loadTelegramLoginWidget();
  },
  methods: {
    loadTelegramLoginWidget() {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?11';
      script.async = true;
      script.setAttribute('data-telegram-login', 'LeprechaunDashboard_bot'); // Replace with your bot username
      script.setAttribute('data-size', 'large');
      script.setAttribute('data-auth-url', 'https://937c-50-222-242-250.ngrok-free.app/auth/telegram/callback'); // Replace with your auth URL
      script.setAttribute('data-request-access', 'write');
      script.setAttribute('data-userpic', 'false');
      document.getElementById('telegram-login-widget').appendChild(script);
    },
  },
};
</script> 
<style scoped>.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

#telegram-login-widget {
  margin-top: 20px;
}</style>
