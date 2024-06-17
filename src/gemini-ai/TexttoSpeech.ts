import { useSpeechSynthesis } from '@vueuse/core'
export class TTS {
    message: string;
    constructor({ message }: { message: string }) {
        this.message = message;
    }

    async speak() {
        try {
            this.stop();
            const tts = useSpeechSynthesis(this.message, { volume: 1, rate: 1.6, pitch: 1, lang: 'en-US', })
            tts.speak()
        } catch (e) {
            console.log(e)
        }
    }
    async stop() {
        const tts = useSpeechSynthesis(this.message)
        tts.stop()
    }

}