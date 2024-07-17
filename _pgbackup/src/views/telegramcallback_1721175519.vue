<template>
    <div>
        <h1>Telegram Authentication Callback</h1>
        <p v-if="error">{{ error }}</p>
        <p v-else-if="user">Welcome, {{ user.first_name }}! Redirecting...</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
      error: null,
    };
  },
  mounted() {
    this.handleTelegramAuth();
  },
  methods: {
    async handleTelegramAuth() {
      const urlParams = new URLSearchParams(window.location.search);
      const telegramAuthData = {};
      for (const [key, value] of urlParams.entries()) {
        telegramAuthData[key] = value;
      }

      try {
        const response = await fetch('http://localhost:3000/api/auth/telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(telegramAuthData),
        });
        const result = await response.json();

        if (result.success) {
          localStorage.setItem('user', JSON.stringify(result.user)); // Store user data
          this.user = result.user;
          setTimeout(() => {
            this.$router.push('/dashboard'); // Redirect to dashboard
          }, 2000);
        } else {
          this.error = result.message;
        }
      } catch (error) {
        this.error = 'Authentication failed.';
      }
    },
  },
};
</script>
