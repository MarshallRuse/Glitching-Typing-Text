import GlitchingTypingText from "./GlitchingTypingText";

function App() {
    return (
        <GlitchingTypingText
            element='h1'
            styling={{
                color: "#0FF",
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "3em",
            }}
        >
            Creating a Glitching Typing Animation in React
        </GlitchingTypingText>
    );
}

export default App;
