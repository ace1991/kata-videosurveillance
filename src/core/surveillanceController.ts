export interface MotionSensor {
    isDetectingMotion(): boolean;
}

export interface VideoRecorder {
    startRecording(): void;
    stopRecording(): void;
}
export class SurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {}

    recordMotion(numberOfSeconds=1) {
        this.range(numberOfSeconds).forEach(() => {
            this.detectAndRecordMotion();
            this.waitOneSecond();
        });

    }

    private waitOneSecond() {
        const aSecond = 1000;
        let startTime = new Date().getTime();
        const endTime = startTime + aSecond;
        while (startTime < endTime) {
            startTime = new Date().getTime();
        }
    }

    private detectAndRecordMotion() {
        try {
            if (this.sensor.isDetectingMotion()) {
                this.recorder.startRecording();
            } else {
                this.recorder.stopRecording()
            }
        } catch (e) {
            this.recorder.stopRecording();
        }
    }

    private range(numberOfSeconds: number) {
        return Array.from({length: numberOfSeconds}, (_, i) => i);
    }
}