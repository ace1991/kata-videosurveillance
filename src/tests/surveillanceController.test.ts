import {MotionSensor, SurveillanceController, VideoRecorder} from "../core/surveillanceController";

describe('The Surveillance Controller', () => {

    let sensor: MotionSensor;
    let recorder: VideoRecorder;
    let controller: SurveillanceController;

    beforeEach(() => {
        sensor = new FakeSensor();
        recorder = new FakeRecorder();
        controller = new SurveillanceController(sensor, recorder);
    });

    it('asks the recorder to stop recording when the sensor detects no motion', () => {
        const spyRecorder = jest.spyOn(recorder, 'stopRecording');
        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });

    it('asks the recorder to start recording when the sensor detects motion', () => {
        const spyRecorder = jest.spyOn(recorder, 'startRecording');
        const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
        stubSensor.mockImplementation(() => true);
        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });

    it('asks the recorder to stop recording when the sensor throw an unexpected error', () => {
        const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
        stubSensor.mockImplementation(() => {
            throw new Error('Unexpected Error');
        });
        const spyRecorder = jest.spyOn(recorder, 'stopRecording');

        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });
});

class StubSensorDetectingMotion implements MotionSensor {
    isDetectingMotion(): boolean {
        return true;
    }
}

class FakeSensor implements MotionSensor {
    isDetectingMotion(): boolean {
        return false;
    }
}

class FakeRecorder implements VideoRecorder {
    startRecording(): void {
        console.log('start recording...');
    }

    stopRecording(): void {
        console.log('stop recording...');
    }
}

class SpyVideoRecorder implements VideoRecorder {
    startCalled = false;
    stopCalled = false;

    startRecording(): void {
        this.startCalled = true;
    }

    stopRecording(): void {
        this.stopCalled = true;
    }
}