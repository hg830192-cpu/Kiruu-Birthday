/**
 * Gentle Web Audio fallback synth replicating the romantic marimba rhythm
 * if the local assets/shape-of-you.mp3 is not loaded yet.
 */
class SynthesizedShapeOfYou {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private volumeNode: GainNode | null = null;

  // C#m - F#m - A - B marimba chord progression notes
  private chords = [
    [277.18, 329.63, 415.30], // C#m
    [369.99, 440.00, 554.37], // F#m
    [440.00, 554.37, 659.25], // A
    [493.88, 622.25, 739.99], // B
  ];
  private step = 0;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.volumeNode = this.ctx.createGain();
      this.volumeNode.gain.setValueAtTime(0.18, this.ctx.currentTime); // ~18% volume
      this.volumeNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Smooth rhythmic pattern
    const tempo = 96; // BPM
    const intervalMs = (60 / tempo / 2) * 1000; // 8th notes

    this.intervalId = window.setInterval(() => {
      this.playNote();
    }, intervalMs);
  }

  private playNote() {
    if (!this.ctx || !this.volumeNode) return;
    const chordIndex = Math.floor((this.step % 16) / 4);
    const chord = this.chords[chordIndex];
    const noteFreq = chord[this.step % 3];

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Warm marimba/music-box chime timbre
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(noteFreq, this.ctx.currentTime);

    // Filter to soften harmonics
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

    const now = this.ctx.currentTime;
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.25, now + 0.02);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.volumeNode);

    osc.start(now);
    osc.stop(now + 0.36);

    this.step++;
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public setVolume(vol: number) {
    if (this.volumeNode && this.ctx) {
      this.volumeNode.gain.setValueAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime);
    }
  }
}

export const synthAudio = new SynthesizedShapeOfYou();
