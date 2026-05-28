import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { services } from '../data/services';
import { ThreeDPrintingForm } from '../components/services/ThreeDPrintingForm';

const API = 'http://localhost:4000';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  customService: z.string().optional(),
  timeline: z.string().optional(),
  details: z.string().min(10, 'Please provide more details about your project'),
  source: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const initialService = searchParams.get('service') || '';

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: initialService }
  });

  const selectedService = watch('service');
  const watchedName = watch('name');
  const watchedEmail = watch('email');
  const watchedPhone = watch('phone');

  const is3DPrinting = selectedService === '3d-printing';

  useEffect(() => {
    if (initialService) setValue('service', initialService);
  }, [initialService, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('sending');
    try {
      // Post to service orders
      await fetch(`${API}/api/service-orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          service: data.service === 'custom' ? data.customService : data.service,
          timeline: data.timeline ? `${data.timeline} days` : undefined,
          details: data.details,
          source: data.source,
        })
      });
    } catch {
      // Non-blocking — proceed regardless
    }

    setStatus('success');
    setTimeout(() => setStatus('idle'), 6000);
    reset();
  };

  return (
    <div className="relative z-10 min-h-screen px-6 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">

        {/* ── Block 1: Left Header (Get In Touch) ────────────────────────── */}
        <div className="lg:col-start-1 lg:row-start-1 space-y-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black font-montserrat text-white tracking-tight">
              GET IN <span className="text-cosmic-gold">TOUCH</span>
            </h1>
            <p className="text-white/60 text-lg font-montserrat max-w-lg">
              Ready to bring your vision to life? Fill out the form and our engineering lead will contact you within 24 hours.
            </p>
          </motion.div>
        </div>

        {/* ── Block 2: Right Form (Row spans on desktop) ─────────────────── */}
        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
          >
            {/* Success state */}
            <AnimatePresence mode="wait">
              {status === 'success' && !is3DPrinting ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="text-center py-20 space-y-6">
                  <div className="w-20 h-20 bg-cosmic-gold rounded-full flex items-center justify-center mx-auto text-cosmic-black animate-bounce">
                    <CheckCircle size={40} />
                  </div>
                  <h2 className="text-3xl font-black text-white font-montserrat">Message Sent!</h2>
                  <p className="text-white/60 font-montserrat leading-relaxed">
                    We'll respond within 24 hours.
                    <br />For any query:
                    <br />
                    <a href="mailto:contactkaranaagency@gmail.com" className="text-cosmic-gold hover:underline">
                      contactkaranaagency@gmail.com
                    </a>
                    <br />
                    <a href="tel:+917569274373" className="text-cosmic-gold hover:underline">+91 75692 74373</a>
                  </p>
                  <button onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <form onSubmit={is3DPrinting ? undefined : handleSubmit(onSubmit)} className="space-y-6">

                    {/* Service selector — always visible */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Service Interested In *</label>
                      <select {...register('service')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-montserrat focus:outline-none focus:border-cosmic-gold transition-all appearance-none">
                        <option value="" disabled>Select a service...</option>
                        {services.map(s => (
                          <option key={s.id} value={s.id} className="bg-black">{s.name}</option>
                        ))}
                        <option value="custom" className="bg-black">Custom Service (Not Listed)</option>
                      </select>
                      {errors.service && <span className="text-red-400 text-[10px] font-bold">{errors.service.message}</span>}
                    </div>

                    {/* ── 3D Printing branch ── */}
                    <AnimatePresence mode="wait">
                      {is3DPrinting ? (
                        <motion.div key="3d-form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                          <div className="mb-5 p-3 rounded-xl bg-cosmic-gold/10 border border-cosmic-gold/20">
                            <p className="text-cosmic-gold text-xs font-bold uppercase tracking-widest">
                              3D Printing — Specialist Order Form
                            </p>
                          </div>
                          <ThreeDPrintingForm
                            prefill={{
                              name: watchedName,
                              email: watchedEmail,
                              phone: watchedPhone,
                            }}
                          />
                        </motion.div>
                      ) : (
                        <motion.div key="standard-form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                          className="space-y-6">

                          {/* Name + Email */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Full Name *</label>
                              <input {...register('name')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-montserrat focus:outline-none focus:border-cosmic-gold transition-all" />
                              {errors.name && <span className="text-red-400 text-[10px] font-bold">{errors.name.message}</span>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Email *</label>
                              <input {...register('email')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-montserrat focus:outline-none focus:border-cosmic-gold transition-all" />
                              {errors.email && <span className="text-red-400 text-[10px] font-bold">{errors.email.message}</span>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Company</label>
                              <input {...register('company')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-montserrat focus:outline-none focus:border-cosmic-gold transition-all" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Phone</label>
                              <input {...register('phone')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-montserrat focus:outline-none focus:border-cosmic-gold transition-all" />
                            </div>
                          </div>

                          {/* Custom service */}
                          {selectedService === 'custom' && (
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Describe your custom needs</label>
                              <textarea {...register('customService')} rows={3}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-montserrat focus:outline-none focus:border-cosmic-gold transition-all" />
                            </div>
                          )}

                          {/* Timeline */}
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                              Timeline <span className="text-white/30 normal-case font-normal">(optional — number of days)</span>
                            </label>
                            <input {...register('timeline')} type="number" min={1} placeholder="e.g. 30"
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-montserrat focus:outline-none focus:border-cosmic-gold transition-all" />
                          </div>

                          {/* Project Details */}
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Project Details *</label>
                            <textarea {...register('details')} rows={5}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-montserrat focus:outline-none focus:border-cosmic-gold transition-all" />
                            {errors.details && <span className="text-red-400 text-[10px] font-bold">{errors.details.message}</span>}
                          </div>

                          {/* Source */}
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">How did you hear about us?</label>
                            <input {...register('source')}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-montserrat focus:outline-none focus:border-cosmic-gold transition-all" />
                          </div>

                          {/* Submit */}
                          <button type="submit" disabled={status === 'sending'}
                            className="w-full py-5 bg-cosmic-gold text-cosmic-black font-black uppercase tracking-widest rounded-xl hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center gap-3 group shadow-gold-glow disabled:opacity-60">
                            {status === 'sending' ? (
                              <>
                                <div className="w-5 h-5 border-2 border-cosmic-black/30 border-t-cosmic-black rounded-full animate-spin" />
                                Transmitting...
                              </>
                            ) : (
                              <>
                                Send Transmission
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Block 3: Left Cards & Steps ────────────────────────────────── */}
        <div className="lg:col-start-1 lg:row-start-2 space-y-12">
          <div className="space-y-4">
            {[
              { icon: <Mail size={24} />, label: 'Email us', value: 'contactkaranaagency@gmail.com', href: 'mailto:contactkaranaagency@gmail.com' },
              { icon: <Phone size={24} />, label: 'Call us', value: '+91 75692 74373', href: 'tel:+917569274373' },
              { icon: <MapPin size={24} />, label: 'Location', value: 'Amaravati, India', href: undefined },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-gold/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cosmic-gold/10 rounded-full flex items-center justify-center text-cosmic-gold shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-white/50 text-xs uppercase tracking-widest block mb-1">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-white font-bold font-montserrat hover:text-cosmic-gold transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white font-bold font-montserrat">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-cosmic-gold/10 border border-cosmic-gold/20">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">What happens next?</h4>
            <div className="space-y-5">
              {[
                { step: '01', text: 'Initial discovery call to understand your goals' },
                { step: '02', text: 'Technical feasibility audit and strategy' },
                { step: '03', text: 'Detailed project roadmap and pricing' },
                { step: '04', text: 'Kick-off and rapid prototyping phase' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-cosmic-gold font-black text-xs w-6">{item.step}</span>
                  <span className="text-white/70 text-sm font-montserrat">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
