interface Props {
    frequency: number; // Frequência do bip
    duration: number; // Duração do bip em milissegundos
}

const beepAudio = ({ frequency = 500, duration = 300 }: Props): void => {
    const beep = () => {
        const audioContext = new AudioContext();
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.connect(audioContext.destination);
        oscillator.start();
        setTimeout(() => {
            oscillator.stop();
        }, duration);
        console.log('beep')
        return beep
    }
}

function playAlertSound(): void {
    const audio = new Audio('mp3/alert1.mp3'); // substitua 'caminho/do/arquivo/de/audio.mp3' pelo caminho do seu arquivo de áudio
    audio.play();
}
function playAlertLixo(): void {
    const audio = new Audio('mp3/lixo.mp3'); // substitua 'caminho/do/arquivo/de/audio.mp3' pelo caminho do seu arquivo de áudio
    audio.play();
}

export { playAlertSound, playAlertLixo };

export default beepAudio;