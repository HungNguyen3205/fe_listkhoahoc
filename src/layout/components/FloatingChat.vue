<!-- src/components/FloatingChat.vue -->
<template>
  <div>
    <!-- Nút nổi góc phải -->
    <button
      @click="toggleChat"
      class="btn btn-primary rounded-circle"
      style="position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; z-index: 9999;"
    >
      💬
    </button>

    <!-- Khung chat nổi -->
    <div
      v-if="showChat"
      style="position: fixed; bottom: 90px; right: 24px; width: 500px; max-height: 900px; z-index: 9998;"
    >
      <div class="card shadow-lg">
        <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <span>Trợ lý AI</span>
          <button @click="toggleChat" class="btn-close btn-close-white btn-sm"></button>
        </div>
        <div class="card-body p-0">
          <ChatBox />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatBox from "./ChatBox.vue";

export default {
  components: { ChatBox },
  data() {
    return {
      showChat: false,
    };
  },
  methods: {
    toggleChat() {
      this.showChat = !this.showChat;
    },
  },
};
</script>
