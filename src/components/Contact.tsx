import React, { useState } from 'react';
import { CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send, Video, Users } from 'lucide-react';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sofyan.khalifa@email.com",
      link: "mailto:sofyan.khalifa@email.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  const quickActions = [
    {
      icon: <Video className="w-5 h-5" />,
      title: "Video Call",
      description: "Let's have a quick 15-minute video call",
      action: "Schedule Call"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Consultation",
      description: "Discuss your project requirements",
      action: "Book Meeting"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Direct Message",
      description: "Drop me a detailed message",
      action: "Send Email"
    }
  ];

  return (
    <ScrollAnimatedSection id="contact" className="py-20 gradient-bg" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <SharedBlurCard>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shadow-none">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </SharedBlurCard>

            {/* Quick Actions */}
            <SharedBlurCard>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => (
                  <div key={index} className="border border-primary/20 rounded-lg p-4 bg-white/5 dark:bg-black/10 backdrop-blur-sm cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center shadow-none">
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground text-sm">{action.title}</h5>
                        <p className="text-xs text-muted-foreground mb-2">{action.description}</p>
                        <Button size="sm" variant="outline" className="text-xs">
                          {action.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </SharedBlurCard>

            {/* Availability */}
            <SharedBlurCard className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 text-green-500 rounded-full mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Available for Projects</h4>
                <p className="text-sm text-muted-foreground">
                  Currently accepting new projects and collaborations. Response time: 24 hours.
                </p>
              </CardContent>
            </SharedBlurCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <SharedBlurCard>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                {/* Additional Info */}
                <div className="mt-8 p-4 bg-muted/20 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    💡 <strong>Tip:</strong> Include details about your project timeline, budget range, 
                    and specific requirements to help me provide you with the most accurate response.
                  </p>
                </div>
              </CardContent>
            </SharedBlurCard>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}