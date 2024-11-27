import "../css_files/Controls.css";

const Controls = ({ onPlay, onStep, onReset, onInputChange }) => (
    <div className="controls-container">
        <input 
            type="text" 
            className="tape-input"
            placeholder="Tape Content" 
            onChange={onInputChange} 
        />
        <div className="control-buttons">
            <button 
                className="control-button play-button"
                onClick={onPlay}
            >
                Play
            </button>
            <button 
                className="control-button step-button"
                onClick={onStep}
            >
                Step
            </button>
            <button 
                className="control-button reset-button"
                onClick={onReset}
            >
                Reset
            </button>
        </div>
    </div>
);

export default Controls;
  