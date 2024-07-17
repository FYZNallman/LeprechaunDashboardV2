<template> 
    <div> 
        <h1>Dashboard</h1> 
        <div id="telegram-login-widget"></div>         
    </div>     
</template> 
<script>
export default {
  name: 'Dashboard',
  mounted() {
    this.loadTelegramLoginWidget();
  },
  methods: {
    loadTelegramLoginWidget() {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?11';
      script.async = true;
      script.setAttribute('data-telegram-login', 'your_bot_username'); // Replace with your bot username
      script.setAttribute('data-size', 'large');
      script.setAttribute('data-auth-url', 'http://localhost:3000/auth/telegram/callback'); // Replace with your auth URL
      script.setAttribute('data-request-access', 'write');
      script.setAttribute('data-userpic', 'false');
      document.getElementById('telegram-login-widget').appendChild(script);
    },
  },
};
</script>
