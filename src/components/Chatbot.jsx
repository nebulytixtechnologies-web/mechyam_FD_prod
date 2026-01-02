import React, {useState, useRef, useEffect} from "react";
import Chatbotimage from "../assets/ChatBot-images/Chatbot-image.png";
import { X, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Mic, MicOff } from "lucide-react";

const Chatbot = () => {
    const [ open, setOpen ] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I assist you today?" },
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);
    const [showSuggestions, setShowSuggestions] = useState(true); // ✅ persistent buttons
    const navigate = useNavigate(); // ✅ for redirection
    const [listening, setListening] = useState(false);
    const recognitionRef = useRef(null);

     // Auto-scroll to latest message
    useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // ✅ Keyword-based bot replies
    const getBotReply = (userText) => {
    const lower = userText.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi") || lower.includes("help")){
        setShowSuggestions(true); // Show suggestions on greeting
      return "Hi there! 👋 How can I help you today?";
    }
     setShowSuggestions(false); // ❌ hide otherwise

    if (lower.includes("project")){
        setTimeout(() => navigate("/Projects"), 1000);
        return "Sure! Redirecting you to our Projects page 🚀";
    }
    if (lower.includes("career") || lower.includes("job")){
        setTimeout(() => navigate("/careers"), 1000);
        return "Let’s take you to our Careers page 💼";
    }
    if (lower.includes("contact")){
        setTimeout(() => navigate("/contact"), 1000);
        return "Heading over to the Contact page ☎️";
    }
    if (lower.includes("about") || lower.includes("Mechyam")){
        setTimeout(() => navigate("/about"), 1000);
        return "Let’s take you to our About page 💼";
    }
    if (lower.includes("service"))
      return "We offer mechanical design, automation, and AI integration services.";

    if (lower.includes("location"))
      return "We’re located in Hyderabad, Telangana, India. 📍";

    return "I’m here to help! I am still learning ,Can u rephrase your question?";
    };


    // 🔊 Function to speak bot's reply


    const handleSend = (text = input) => {
        const messageText = typeof text === "string" ? text.trim() : "";
        if (!messageText.trim()) return;
        const userText = text.trim();
        const reply = getBotReply(userText);

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "bot", text: reply },
    ]);

    setInput("");
    speakReply(reply); // 🎙speak bot reply aloud
    };


        // 🎯 Keyword-based responses
    //     if (userMessage.includes("hello") || userMessage.includes("hi")) {
    //     botReply = "Hi there! 👋 How can I assist you ?";
    //     } else if (userMessage.includes("project")) {
    //     botReply = "You can explore our latest projects on the 'Projects' page!";
    //     } else if (userMessage.includes("contact")) {
    //     botReply = "You can reach us via the Contact page or email us at 'info@mechyam.com' or 'hr@mechyam.com'.";
    //     } else if (userMessage.includes("service")) {
    //     botReply = "We offer mechanical design, automation, and AI integration services.";
    //     } else if (userMessage.includes("location")) {
    //     botReply = "We’re located in Bengaluru, India. 📍";
    //     } else if (userMessage.includes("help")) {
    //     botReply = "Sure! You can ask about projects, contact info, or services.";
    //  }

        // ✅ Handle redirect for suggestion buttons
       const handleRedirect = (path, message) => {
        handleSend(message);
        setTimeout(() => {
            navigate(path);
            setOpen(false); // Close chatbot after redirect
        }, 1000); // Delay to allow user to see bot message
     };

    // ✅ Suggestion buttons with redirect
  const suggestions = [
    { label: "View Projects", message: "Show me projects", path: " /Projects" },
    { label: "Careers", message: "Show me careers", path: "/careers" },
    { label: "Contact Us", message: "How can I contact you?", path: "/contact" },
    { label: "About mechyam", message: "Tell me about Mechyam..", path: "/about" },

    ];

    // 🎤 Voice Recognition Setup
   useEffect(() => {

    if (!("webkitSpeechRecognition" in window)) {
        console.warn("Speech Recognition not supported in this browser.");
        return;
    }
    
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        handleSend(transcript); // Auto-send recognized text as message
  };

    recognition.onerror = (err) => {
        console.error("Speech recognition error:", err);
        setListening(false);
    };

   recognition.onend = () => setListening(false);

  // ✅ Save recognition object to ref
   recognitionRef.current = recognition;
  }, []);

const speakReply = (text) => {
    if (!window.speechSynthesis) return;

    //stop any ongoing speech first
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    // choose a more natural female voice if available
    const femaleKeywords = [
        "female",
        "woman",
        "zira",
        "jenny",
        "samantha",
        "susan",
        "victoria",
        "samantha",
        "sophie",
        "aria",
        "allison",
        "denise",
        "google",
        "microsoft",
    ];

    const isFemaleVoice = (v) => {
        if (!v) return false;
        const name = (v.name || "").toLowerCase();
        const uri = (v.voiceURI || "").toLowerCase();
        const lang = (v.lang || "").toLowerCase();
        // prefer voices that explicitly mention 'female' or common female names
        return (
            femaleKeywords.some((k) => name.includes(k) || uri.includes(k)) ||
            name.includes("female") ||
            uri.includes("female") ||
            // some voices include gender indirectly; prefer English female if lang is en and name contains a known female token
            (lang.startsWith("en") && femaleKeywords.some((k) => name.includes(k)))
        );
    };

    const getPreferred = (list) => {
        if (!list || !list.length) return null;
        // 1) try to find explicitly female voice
        const female = list.find(isFemaleVoice);
        if (female) return female;
        // 2) try known friendly English voices
        const known = list.find(
            (v) => (v.name && (v.name.includes("Google US English") || v.name.includes("Microsoft Jenny"))) ||
                   (v.lang && v.lang.startsWith("en"))
        );
        return known || list[0];
    };

    // getVoices may be empty initially; use the proper lowercase `speechSynthesis` object
    let voices = window.speechSynthesis.getVoices() || [];
    const preferredVoice = getPreferred(voices);
    if (preferredVoice) {
        utterance.voice = preferredVoice;
        window.speechSynthesis.speak(utterance);
        window.speechSynthesis.onvoiceschanged = null;
        return;
    }

    // If voices haven't loaded yet, wait for them then speak
    window.speechSynthesis.onvoiceschanged = () => {
        const updated = window.speechSynthesis.getVoices() || [];
        const pref = getPreferred(updated);
        if (pref) utterance.voice = pref;
        window.speechSynthesis.speak(utterance);
        // cleanup handler so it doesn't fire repeatedly
        window.speechSynthesis.onvoiceschanged = null;
    };
};


    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating Button */}
            {!open && (
                <button 
                    onClick={() => {
                        setOpen(true);
                        setShowSuggestions(true); // show buttons r open
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition "
                    >
                      <img
                        src={Chatbotimage}
                        alt="chatbot"
                        className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition"
                       />
                       
                </button>
            )}

            {/* Chatbot Window */}
            {open && (
                <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                        <h3 className="font-semibold text-lg">Chat Assistant</h3>
                        <button onClick={() => {
                            setOpen(false)
                            setShowSuggestions(false); // hide buttons on close
                        }}
                            >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-2">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg max-w-[75%] ${
                                    msg.sender === "bot"
                                        ? "bg-gray-200 self-start"
                                        : "bg-blue-600 text-white self-end ml-auto"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {/* <div ref={messagesEndRef} /> */}
                    

                     {/* Suggestion buttons shown when chat opens */}
                    { showSuggestions  && (             // show only initial bot message
                        <div className="flex flex-col  gap-2 mt-3">
                            {suggestions.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleRedirect(s.path, s.message)}
                                    className="flex items-center justify-center px-3 py-1 text-md border border-blue-500 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
                        >
                            {s.label}
                            <ExternalLink size={14} />
                        </button>
                        ))}
                        </div>
                    )}
                   
                    <div ref={messagesEndRef} />
                   </div>

                    {/* Input Area */}
                    <div className="p-2 border-t flex border-gray-200 items-center gap-2">
                        
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Type your message or use mic..."
                            className="flex-1 w-10 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />

                        {/* Mic Button */}
                        <button
                            onClick={() => {
                                if (!recognitionRef.current) return;
                                if (listening) {
                                    recognitionRef.current.stop();
                                    setListening(false);
                                } else {
                                    recognitionRef.current.start();
                                    setListening(true);
                                }
                            }}
                            className={`p-2  rounded-full ${
                                listening ? "bg-red-500" : "bg-blue-600"
                            } text-white hover:opacity-90 transition`}
                            title={listening ? "stop Listening" : "start Listening"} 
                            
                        >
                            {listening ? <MicOff size={20} /> : <Mic size={20} />}
                        </button>
                    

                        <button
                            onClick={handleSend}
                            className=" bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;