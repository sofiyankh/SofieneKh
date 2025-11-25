import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MessageCircle, Send, X, Minimize2, Maximize2, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Sofyan's AI assistant. I can help you learn more about his skills, experience, and projects. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mock AI responses - you can replace this with actual API calls
  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skills') || message.includes('technology') || message.includes('tech')) {
      return "Sofyan is a full-stack developer with expertise in React, Node.js, TypeScript, Python, and modern web technologies. He's passionate about creating scalable applications with clean, maintainable code.";
    }
    
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return "Sofyan has extensive experience in both frontend and backend development. He's worked on various projects ranging from e-commerce platforms to data visualization tools, always focusing on user experience and performance.";
    }
    
    if (message.includes('project') || message.includes('portfolio')) {
      return "His portfolio includes diverse projects like real-time chat applications, AI-powered tools, and responsive web applications. Each project showcases his ability to solve complex problems with elegant solutions.";
    }
    
    if (message.includes('contact') || message.includes('hire') || message.includes('available')) {
      return "Sofyan is currently available for new projects! You can reach him at sofyan.khalifa@email.com or use the contact form below. He typically responds within 24 hours.";
    }
    
    if (message.includes('education') || message.includes('learning')) {
      return "Sofyan believes in continuous learning. He regularly updates his skills through online courses, tech conferences, and hands-on projects. His educational background in computer science provides a strong foundation for his development work.";
    }
    
    // Default responses
    const defaultResponses = [
      "That's an interesting question! Sofyan would be happy to discuss this with you personally. Feel free to reach out through the contact form.",
      "I'd love to help you learn more about Sofyan's work. Could you be more specific about what you'd like to know?",
      "Sofyan's expertise spans many areas of development. Is there a particular aspect you're most interested in?",
      "Thanks for your interest! Sofyan is always excited to discuss new opportunities and projects."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl bg-primary hover:bg-primary/90 text-white"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96"
          >
            <Card className="glass-panel border-primary/20 shadow-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">AI Assistant</CardTitle>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => setIsMinimized(!isMinimized)}
                    >
                      {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <CardContent className="p-4 pt-0">
                      {/* Messages */}
                      <div className="h-64 overflow-y-auto mb-4 space-y-3 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className="flex items-start space-x-2 max-w-[80%]">
                              {message.sender === 'bot' && (
                                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                  <Bot className="w-3 h-3 text-primary" />
                                </div>
                              )}
                              <div
                                className={`px-3 py-2 rounded-lg text-sm ${
                                  message.sender === 'user'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted text-muted-foreground'
                                }`}
                              >
                                {message.text}
                              </div>
                              {message.sender === 'user' && (
                                <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                  <User className="w-3 h-3 text-secondary-foreground" />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                        
                        {/* Typing Indicator */}
                        {isTyping && (
                          <div className="flex justify-start">
                            <div className="flex items-start space-x-2">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                                <Bot className="w-3 h-3 text-primary" />
                              </div>
                              <div className="bg-muted px-3 py-2 rounded-lg">
                                <div className="flex space-x-1">
                                  <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce"></div>
                                  <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                  <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>

                      {/* Input */}
                      <div className="flex space-x-2">
                        <Input
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Ask me about Sofyan's work..."
                          className="flex-1 text-sm bg-background/50"
                        />
                        <Button
                          onClick={handleSendMessage}
                          size="icon"
                          className="flex-shrink-0"
                          disabled={!inputValue.trim() || isTyping}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}