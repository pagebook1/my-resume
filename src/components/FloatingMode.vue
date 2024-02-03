<template>
    <div class="floating-mode">
        <button class="btn-floating-mode" @click="toggleMode">
            <i :class="isDarkMode ? 'bx bx-sun' : 'bx bx-moon'"></i>
        </button>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');
        const toggleMode = () => {
            isDarkMode.value = !isDarkMode.value;
            if (isDarkMode.value) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            }
        };
        return {
            isDarkMode,
            toggleMode
        };
    },
    mounted() {
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
};
</script>
<style scoped>
.floating-mode {
    position: fixed;
    top: 30px;
    /* bottom: 20px; */
    right: 30px;
    z-index: 1000;
}

.btn-floating-mode {
    background-color: #343a40;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-floating-mode i {
    font-size: 24px;
    color: #f8f9fa;
}

.btn-floating-mode:hover {
    background-color: #343a40;
    
}

.dark-mode .btn-floating-mode {
    background-color: #fff;
}

.dark-mode .btn-floating-mode i {
    color: #343a40;
}
</style>