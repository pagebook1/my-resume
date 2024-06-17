import { UseSpeechSynthesisOptions, useSpeechSynthesis } from '@vueuse/core'
export class TTS {
    message: string;
    constructor({ message }: { message: string }) {
        this.message = message;
    }
    async speak() {
        try {
            //check if the speak is active
            const tts = useSpeechSynthesis(this.message, { volume: 1, rate: 1.3, pitch: 1, lang: 'en-US', })
            if(tts.isPlaying) tts.stop()
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