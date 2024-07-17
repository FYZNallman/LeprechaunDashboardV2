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

      console.log('Telegram auth data:', telegramAuthData); // Log auth data

      try {
        const response = await fetch('/api/auth/telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(telegramAuthData),
        });

        console.log('Server response status:', response.status); // Log response status

        if (response.ok) {
          const result = await response.json();
          console.log('Server response:', result); // Log server response

          if (result.success) {
            localStorage.setItem('user', JSON.stringify(result.user)); // Store user data
            this.user = result.user;
            setTimeout(() => {
              this.$router.push('/dashboard'); // Redirect to dashboard
            }, 2000);
          } else {
            this.error = result.message;
          }
        } else {
          // Handle non-200 responses
          let result;
          try {
            result = await response.json();
          } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError); // Log JSON parsing error
            console.error('Response text:', await response.text()); // Log raw response text
            this.error = 'Failed to parse server response.';
            return;
          }
          this.error = result.message;
          console.log('Error response from server:', result);
        }
      } catch (error) {
        console.log('Error:', error); // Log error
        this.error = 'Authentication failed.';
      }
    },
  },
};
</script>
