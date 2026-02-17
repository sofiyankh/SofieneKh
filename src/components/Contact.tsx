import React, { useState } from 'react';
import { CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send, Video, Users } from 'lucide-react';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const phoneNumber = "+21658826329";

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />,  titleKey: 'contact.email',    value: "sofiyankhalifa.11@gmail.com", link: "mailto:sofiyankhalifa.11@gmail.com" },
    { icon: <Phone className="w-6 h-6" />, titleKey: 'contact.phone',    value: phoneNumber,                  link: `tel:${phoneNumber}` },
    { icon: <Phone className="w-6 h-6" />, titleKey: 'contact.whatsapp', value: phoneNumber,                  link: `https://wa.me/${phoneNumber.replace(/\D/g,'')}` },
    { icon: <MapPin className="w-6 h-6" />, titleKey: 'contact.location', value: "Tunisia, Monastir",          link: "#" },
  ];

  const quickActions = [
    { icon: <Video className="w-5 h-5" />, titleKey: 'contact.videoCall',      descKey: 'contact.videoCallDesc',      actionKey: 'contact.scheduleCall' },
    { icon: <Users className="w-5 h-5" />, titleKey: 'contact.consultation',   descKey: 'contact.consultationDesc',   actionKey: 'contact.bookMeeting' },
    { icon: <Mail className="w-5 h-5" />,  titleKey: 'contact.directMessage',  descKey: 'contact.directMessageDesc',  actionKey: 'contact.sendEmail' },
  ];

  return (
    <ScrollAnimatedSection id="contact" className="py-20 gradient-bg" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.heading')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <SharedBlurCard>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{t('contact.contactInfo')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{t(info.titleKey)}</h4>
                      <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
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
                <CardTitle className="text-xl text-foreground">{t('contact.quickActions')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => (
                  <div key={index} className="border border-primary/20 rounded-lg p-4 bg-white/5 dark:bg-black/10 backdrop-blur-sm cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground text-sm">{t(action.titleKey)}</h5>
                        <p className="text-xs text-muted-foreground mb-2">{t(action.descKey)}</p>
                        <Button size="sm" variant="outline" className="text-xs">{t(action.actionKey)}</Button>
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
                <h4 className="font-semibold text-foreground mb-2">{t('contact.available')}</h4>
                <p className="text-sm text-muted-foreground">{t('contact.availableDesc')}</p>
              </CardContent>
            </SharedBlurCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <SharedBlurCard>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{t('contact.sendMessage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.fullName')}</Label>
                      <Input
                        id="name" name="name" type="text"
                        placeholder={t('contact.namePlaceholder')}
                        value={formData.name} onChange={handleInputChange}
                        required autoComplete="name" className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.emailAddress')}</Label>
                      <Input
                        id="email" name="email" type="email"
                        placeholder={t('contact.emailPlaceholder')}
                        value={formData.email} onChange={handleInputChange}
                        required autoComplete="email" className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('contact.subject')}</Label>
                    <Input
                      id="subject" name="subject" type="text"
                      placeholder={t('contact.subjectPlaceholder')}
                      value={formData.subject} onChange={handleInputChange}
                      required autoComplete="off" className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message')}</Label>
                    <Textarea
                      id="message" name="message"
                      placeholder={t('contact.messagePlaceholder')}
                      value={formData.message} onChange={handleInputChange}
                      required rows={6} className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full">
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.send')}
                  </Button>
                </form>

                <div className="mt-8 p-4 bg-muted/20 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    💡 <strong>{t('contact.tip')}:</strong> {t('contact.tipText')}
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