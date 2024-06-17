import { useSpeechSynthesis } from '@vueuse/core'
export class TTS {
    message: string;
    constructor({ message }: { message: string }) {
        this.message = message;
    }
    private tts: ReturnType<typeof useSpeechSynthesis> | null = null;
    async speak() {
        try {
            //check if the speak is active
             this.tts = useSpeechSynthesis(this.message, { volume: 1, rate: 1.3, pitch: 1, lang: 'en-US', })
            if (this.tts.isPlaying) this.tts.stop()
                this.tts.speak()
            // Delay of 1 

        } catch (e) {
            console.log(e)
        }
    }
    async stop() {
       this.tts?.stop()
    }

}