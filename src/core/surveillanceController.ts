export interface MotionSensor {
    isDetectingMotion(): boolean;
}

export interface VideoRecorder {
    startRecording(): void;
    stopRecording(): void;
}
export class SurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {}

    recordMotion() {
        try {
            if(this.sensor.isDetectingMotion()){
                this.recorder.startRecording();
            }else {
                this.recorder.stopRecording()
            }
        } catch (e) {
            this.recorder.stopRecording();
        }
    }
}