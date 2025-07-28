<template>
    <div class="chat-container">
        <div class="card h-100 shadow-sm d-flex flex-column">

            <!-- Nội dung tin nhắn -->
            <div class="card-body flex-grow-1 overflow-auto px-3" ref="chatBody" style="background-color: #f8f9fa;">
                <div v-for="(msg, idx) in messages" :key="idx" class="mb-3">
                    <div :class="msg.role === 'user' ? 'text-end' : 'text-start'">
                        <span :class="msg.role === 'user' ? 'badge bg-info' : 'badge bg-secondary'">
                            {{ msg.role === 'user' ? 'Bạn' : 'AI' }}
                        </span>
                        <div class="d-inline-block px-3 py-2 rounded mt-1"
                            :class="msg.role === 'user' ? 'bg-light text-dark' : 'bg-white border'"
                            style="max-width: 75%; white-space: pre-wrap;">
                            {{ msg.content }}
                        </div>
                    </div>
                </div>

                <!-- AI đang gõ -->
                <div v-if="isTyping" class="text-start">
                    <span class="badge bg-secondary">AI</span>
                    <div class="d-inline-block px-3 py-2 rounded bg-white mt-1 border text-muted"
                        style="max-width: 75%;">
                        AI đang gõ...
                    </div>
                </div>
            </div>

            <!-- Footer: ô nhập -->
            <div class="card-footer bg-light">
                <form @submit.prevent="sendMessage" class="d-flex align-items-center">
                    <input v-model="input" type="text" class="form-control me-2" placeholder="Nhập tin nhắn của bạn..."
                        :disabled="isTyping" required />
                    <button class="btn btn-primary" type="submit" :disabled="isTyping">
                        Gửi
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: "",
            messages: [
                { role: 'assistant', content: 'Xin chào! Tôi có thể giúp gì cho bạn?' }
            ],
            isTyping: false,
        };
    },
    methods: {
        async sendMessage() {
            const message = this.input.trim();
            if (!message) return;

            this.messages.push({ role: "user", content: message });
            this.input = "";

            const aiMessage = { role: "ai", content: "" };
            this.messages.push(aiMessage);
            this.isTyping = true;

            try {
                const response = await fetch("http://localhost:8000/api/ai/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ message }),
                });

                const reader = response.body.getReader();
                const decoder = new TextDecoder("utf-8");

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    aiMessage.content += decoder.decode(value);
                    this.scrollToBottom();
                }
            } catch (err) {
                aiMessage.content = "[Lỗi khi kết nối AI]";
            }

            this.isTyping = false;
        },

        scrollToBottom() {
            this.$nextTick(() => {
                const el = this.$refs.chatBody;
                if (el) el.scrollTop = el.scrollHeight;
            });
        },
    },
};
</script>

<style scoped>
.chat-container {
    height: 100%;
}

.card {
    height: 100%;
}

input:disabled {
    background-color: #e9ecef;
}
</style>
