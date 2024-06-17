<template>
    <div class="chatbot-modal">
        <div class="chatbot-modal-content">
            <div class="chatbot-messages">
                <div v-for="message in messages" :key="message.id" class="chatbot-message"
                    :class="{ 'bot': message.isBot, 'user': !message.isBot }">
                    <div v-if="message.isBot" class="chatbot-bot-message">
                        {{ message.text }}
                    </div>
                    <div v-else class="chatbot-user-message">
                        {{ message.text }}
                    </div>
                </div>
            </div>
            <div class="chatbot-input">
                <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type your message..." />
                <button @click="sendMessage">Send</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { GeminiAI } from '../gemini-ai/gemini-prompt'
export default {
    data() {
        return {
            messages: [] as { id: number, text: string, isBot: boolean }[],
            userInput: ''
        };
    },
    methods: {
        async sendMessage() {
            if (this.userInput.trim() !== '') {
                const user_input = this.userInput;
                this.userInput = ''
                this.messages.push({ id: Date.now(), text: user_input, isBot: false });
                const bot_response = await new GeminiAI({ prompt: user_input }).run();
                this.messages.push({ id: Date.now(), text: bot_response, isBot: true });
                // Call your chatbot API or add your bot logic here to get the bot's response
                // and push it to the messages array with isBot set to true
            }
        }
    },
};
</script>

<style scoped>
.chatbot-modal {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1000;
    width: 500px;
    height: 700px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.chatbot-modal-content {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.chatbot-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
}

.chatbot-message {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
}

.chatbot-bot-message {
    text-align: left;
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
}

.chatbot-message.user {
    justify-content: flex-end;
}

.chatbot-user-message {
    background-color: #0091ff;
    padding: 5px 10px;
    color: #ffffff;
    border-radius: 5px;
    display: inline-block;

}

.chatbot-input {
    display: flex;
    padding: 10px;
}

.chatbot-input input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 5px;
}

.chatbot-input button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}

.chatbot-input button:hover {
    background-color: #0056b3;
}
</style>