import { useSpeechSynthesis } from '@vueuse/core'
export class TTS {
    message: string;
    constructor({ message }: { message: string }) {
        this.message = message;
    }
    private tts: ReturnType<typeof useSpeechSynthesis> | null = null;
    run() {
        return useSpeechSynthesis(this.message, { volume: 1, rate: 1.3, pitch: 1, lang: 'en-US', })
    }
    async speak() {
        try {
            const tts = this.run()
            //check if the speak is active
            if (tts.isPlaying.value) {
                tts.stop()
            } else {
                tts.speak()
            }

            // Delay of 1 

        } catch (e) {
            console.log(e)
        }
    }
    async stop() {
        this.tts?.stop()
    }

}