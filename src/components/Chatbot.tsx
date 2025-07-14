import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: "Hi! I'm Nexus, your data analytics assistant. How can I help you today?",
    isBot: true,
    timestamp: new Date()
  }]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const predefinedResponses: Record<string, string> = {
    "services": "We offer three main services: Data Analysis (transforming raw data into insights), Market Research (competitive analysis and consumer insights), and Predictive Modeling (AI-powered forecasting). Which would you like to know more about?",
    "pricing": "Our pricing is customized based on your specific needs and project scope. We offer competitive rates for data analysis starting from consultation packages. Would you like to schedule a free consultation to discuss your requirements?",
    "team": "Our expert team includes Dr. Sarah Johnson (Chief Data Scientist), Michael Chen (Senior Market Research Analyst), Dr. Amanda Rodriguez (Statistical Modeling Lead), and David Kim (Business Intelligence Director). All have extensive experience in their fields.",
    "contact": "You can reach us at 073 936 8360 or visit us at Bresler Street, Nigel, Gauteng. We're also available via email at info@nexusnode.co.za. Our business hours are Monday-Friday 8AM-6PM, Saturday 9AM-2PM.",
    "location": "We're located on Bresler Street in Nigel, Gauteng, South Africa. Founded in 2024, we serve clients locally and internationally.",
    "data analysis": "Our data analysis service helps transform your raw data into actionable insights. We use statistical analysis, data visualization, pattern recognition, and performance metrics to uncover valuable trends in your data.",
    "market research": "Our market research includes market sizing, competitor analysis, consumer insights, and trend forecasting. We help you understand your market position and identify growth opportunities.",
    "predictive modeling": "We use advanced machine learning and AI to create forecasting models, risk assessments, demand planning, and scenario analysis. This helps you make proactive decisions for your business.",
    "careers": "We're always looking for talented data scientists, analysts, and researchers. Current openings include Senior Data Scientist, Market Research Analyst, and Business Intelligence Developer. Check our careers section for more details!",
    "partnership": "We work with partners across technology, retail, financial services, healthcare, manufacturing, and education sectors. We believe in strategic collaboration and mutual growth.",
    "default": "Thank you for your question! For more detailed information, I'd recommend speaking with one of our specialists. You can contact us at 073 936 8360 or schedule a consultation. Is there anything specific about our data analytics services you'd like to know?"
  };
  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (key !== 'default' && message.includes(key)) {
        return response;
      }
    }
    return predefinedResponses.default;
  };
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const quickQuestions = ["What services do you offer?", "How can I contact you?", "Tell me about your team", "What is predictive modeling?"];
  return <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => setIsOpen(!isOpen)} variant="hero" size="icon" className="h-14 w-14 rounded-full shadow-glow animate-glow-pulse">
          {isOpen ? <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg> : <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] animate-scale-in">
          <Card className="shadow-elegant border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-tech text-primary-foreground rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">N</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Nexus Assistant</h3>
                    <p className="text-sm opacity-90">Online • Ready to help</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-primary-foreground hover:bg-primary-foreground/20">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map(message => <div key={message.id} className={cn("flex", message.isBot ? "justify-start" : "justify-end")}>
                    <div className={cn("max-w-[80%] p-3 rounded-lg text-sm", message.isBot ? "bg-muted text-foreground" : "bg-primary text-primary-foreground")}>
                      {message.text}
                    </div>
                  </div>)}

                {isTyping && <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{
                    animationDelay: '0.1s'
                  }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{
                    animationDelay: '0.2s'
                  }}></div>
                      </div>
                    </div>
                  </div>}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && <div className="px-4 pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickQuestions.map(question => <Button key={question} variant="outline" size="sm" className="text-left justify-start text-xs h-auto py-2" onClick={() => {
                setInputValue(question);
                setTimeout(handleSendMessage, 100);
              }}>
                        {question}
                      </Button>)}
                  </div>
                </div>}

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyPress={handleKeyPress} placeholder="Type your message..." className="flex-1 px-3 py-2 text-sm rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  <Button onClick={handleSendMessage} variant="hero" size="icon" disabled={!inputValue.trim() || isTyping}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>}
    </>;
};
export default Chatbot;