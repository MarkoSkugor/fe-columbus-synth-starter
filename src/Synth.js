import React from 'react';
import './Synth.scss';

import {
  Button,
  Knob,
  Keyboard,
} from './stories';

import { SynthEngine } from './SynthEngine';

class Synth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='synth'>
        <div className='flex justify-center'>
          <div className='synth__controls'>
            <div className='flex justify-center'>
              {/* <div className='section section__octave-buttons'>
                <span className='section__label'>Octave</span>
                <Button
                  onClick={() => undefined}
                  aria-label='up'
                >
                  &#9651;
                </Button>
                <Button
                  onClick={() => undefined}
                  aria-label='down'
                >
                  &#9661;
                </Button>
              </div> */}
              {/* <div className='section'>
                <span className='section__label'>Master</span>
                <Knob
                  label='Level'
                  precision={2}
                  initialValue={1}
                  minValue={0}
                  maxValue={1}
                  valueChanged={() => undefined}
                ></Knob>
                <Knob
                  label='Reverb'
                  precision={2}
                  initialValue={.25}
                  minValue={0}
                  maxValue={1}
                  valueChanged={() => undefined}
                ></Knob>
              </div> */}
              {/* <div className='section'>
                <span className='section__label'>Amp Envelope</span>
                <Knob
                  label='Attack'
                  units='s'
                  precision={2}
                  initialValue={0.1}
                  minValue={0.01}
                  maxValue={10}
                  valueChanged={() => undefined}
                ></Knob>
                <Knob
                  label='Release'
                  units='s'
                  precision={2}
                  initialValue={1.5}
                  minValue={0.1}
                  maxValue={10}
                  valueChanged={() => undefined}
                ></Knob>
              </div> */}
            </div>
            <div className='flex justify-center'>
              {/* <div className='section'>
                <span className='section__label'>Filter Envelope</span>
                <Knob
                  label='Attack'
                  units='s'
                  precision={2}
                  initialValue={0.1}
                  minValue={0.01}
                  maxValue={10}
                  valueChanged={() => undefined}
                ></Knob>
                <Knob
                  label='Release'
                  units='s'
                  precision={2}
                  initialValue={.5}
                  minValue={0.01}
                  maxValue={10}
                  valueChanged={() => undefined}
                ></Knob>
              </div> */}
              {/* <div className='section'>
                <span className='section__label'>Filter</span>
                <Knob
                  label='Cutoff'
                  units='Hz'
                  precision={0}
                  initialValue={350}
                  minValue={20}
                  maxValue={15000}
                  valueChanged={() => undefined}
                ></Knob>
                <Knob
                  label='Resonance'
                  precision={2}
                  initialValue={0}
                  minValue={0}
                  maxValue={10}
                  valueChanged={() => undefined}
                ></Knob>
                <Knob
                  label='Envelope'
                  precision={2}
                  initialValue={.25}
                  minValue={0}
                  maxValue={1}
                  valueChanged={() => undefined}
                ></Knob>
              </div> */}
            </div>
          </div>
          {/* <div className='section'>
            <span className='section__label'>Waveform</span>
            <Button
              onClick={() => undefined}
            >
              Sine
            </Button>
            <Button
              onClick={() => undefined}
            >
              Square
            </Button>
            <Button
              onClick={() => undefined}
            >
              Triangle
            </Button>
            <Button
              onClick={() => undefined}
            >
              Sawtooth
            </Button>
          </div> */}
        </div>
        {/* <Keyboard
          numOctaves={2}
          startingOctave={3}
          onKeyPressed={() => undefined}
        >
        </Keyboard> */}
      </div>
    );
  }
}

export { Synth };
