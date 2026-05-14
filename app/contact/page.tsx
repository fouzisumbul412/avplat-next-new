"use client";

import PageHero from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Building2,
  ChevronDown,
  CheckCircle2,
  X,
  Headphones,
  Globe2,
  Plane,
  Loader2,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const offices = [
  {
    country: "CANADA",
    address: "150 King St. West, Suite 200, Toronto, ON M5H 1J9",
  },
  {
    country: "USA",
    address: "201 Spear Street, Suite 1100, San Francisco, CA 94105",
  },
  {
    country: "SINGAPORE",
    address: "1 Scotts Road, #24-10, Shaw Centre, Singapore – 228208",
  },
  {
    country: "INDIA",
    address: "511, KTC Illumination, Mindspace, Madhapur, Hyderabad – 500081",
  },
];

const services = ["Charters", "Service Providers", "Operators", "Other"];

const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/avplatapp",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    link: "http://instagram.com/avplatapp",
    icon: InstagramIcon,
  },
  {
    name: "X",
    link: "https://x.com/avplatapp",
    icon: TwitterIcon,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/avplatapp/?originalSubdomain=in",
    icon: LinkedinIcon,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC-yVUllAcKgenVuAvDTL8iQ",
    icon: YoutubeIcon,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("");
  const [serviceError, setServiceError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (isSubmitting) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!selectedService) {
      setServiceError(true);
      return;
    }

    setServiceError(false);
    setIsSubmitting(true);

    try {
      const formData = new FormData(form);
      const payload = {
        fullName: formData.get("fullName"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        services: [selectedService],
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit request");
      }

      setShowSuccess(true);
      form.reset();
      setSelectedService("");
    } catch {
      toast.error("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <PageHero
        title="Contact AvPlat"
        image="/images/contact.jpg"
        overlayOpacity={0.65}
      />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#213e76]/10 blur-3xl" />
        <div className="absolute top-80 -left-24 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute bottom-40 right-0 h-80 w-80 rounded-full bg-[#213e76]/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center rounded-full border border-[#213e76]/20 bg-[#213e76]/5 px-4 py-2 text-sm font-medium text-[#213e76]">
              We are here to assist you
            </span>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Let’s connect and elevate your aviation experience.
            </h2>

            <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
              Reach out to AvPlat for support, partnerships, platform queries,
              or aviation service assistance across our global offices.
            </p>
          </motion.div>

          <div className="mt-14 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:sticky lg:top-24"
            >
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
                <div className="relative overflow-hidden bg-[#213e76] p-6 text-white sm:p-8">
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full bg-white/10 blur-2xl" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#213e76]">
                      <Headphones size={25} />
                    </div>

                    <h3 className="text-2xl font-semibold">
                      Contact Details
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/75">
                      Speak with our team or write to us for platform support,
                      aviation service enquiries, partnerships, and operator
                      assistance.
                    </p>

                    <div className="mt-8 space-y-5">
                      <a
                        href="tel:+16476946122"
                        className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#213e76]">
                          <Phone size={19} />
                        </span>

                        <span>
                          <span className="block text-xs uppercase tracking-[0.22em] text-white/55">
                            Phone
                          </span>
                          <span className="mt-1 block font-medium">
                            +1 647 694 6122
                          </span>
                        </span>
                      </a>

                      <a
                        href="mailto:support@avplat.com"
                        className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#213e76]">
                          <Mail size={19} />
                        </span>

                        <span>
                          <span className="block text-xs uppercase tracking-[0.22em] text-white/55">
                            Email
                          </span>
                          <span className="mt-1 block font-medium">
                            support@avplat.com
                          </span>
                        </span>
                      </a>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <Globe2 size={20} className="text-white" />
                        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/50">
                          Presence
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          Global Offices
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <Plane size={20} className="text-white" />
                        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/50">
                          Support
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          Aviation First
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
                    Follow AvPlat
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {socials.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.name}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#213e76] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#213e76] hover:bg-[#213e76] hover:text-white"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.aside>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
              className="rounded-[2rem] border border-black/10 bg-[#f7f9fc] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-black">
                    Send us a message
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/60">
                    Select your enquiry type and our team will get back to you.
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#213e76] text-white sm:flex">
                  <Send size={20} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    label="Full Name"
                    name="fullName"
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                  />

                  <InputField
                    label="Phone Number"
                    name="phone"
                    placeholder="Enter your phone number"
                    type="tel"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <InputField
                  label="Email Address"
                  name="email"
                  placeholder="Enter your email address"
                  type="email"
                  required
                  disabled={isSubmitting}
                />

                <CustomSelectField
                  label="Service"
                  placeholder="Select service type"
                  options={services}
                  value={selectedService}
                  onChange={(value) => {
                    setSelectedService(value);
                    setServiceError(false);
                  }}
                  error={serviceError}
                  disabled={isSubmitting}
                />

                <InputField
                  label="Subject"
                  name="subject"
                  placeholder="How can we help you?"
                  required
                  disabled={isSubmitting}
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-black/75">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    disabled={isSubmitting}
                    className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#213e76] focus:ring-4 focus:ring-[#213e76]/10 disabled:cursor-not-allowed disabled:bg-black/5 disabled:text-black/45"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#213e76] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0 disabled:hover:bg-[#213e76] sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-16"
          >
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#213e76]">
                  Global Presence
                </span>

                <h3 className="mt-3 text-3xl font-semibold text-black">
                  Our Offices
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-6 text-black/55">
                AvPlat operates across key aviation and business hubs to serve
                customers, service providers, and partners with seamless support.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {offices.map((office, index) => (
                <motion.div
                  key={office.country}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className="group rounded-[1.7rem] border border-black/10 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#213e76]/30 hover:shadow-[0_24px_70px_rgba(33,62,118,0.14)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#213e76]/10 text-[#213e76] transition group-hover:bg-[#213e76] group-hover:text-white">
                    <Building2 size={20} />
                  </div>

                  <h4 className="text-lg font-semibold text-black">
                    {office.country}
                  </h4>

                  <p className="mt-3 flex gap-2 text-sm leading-6 text-black/60">
                    <MapPin
                      size={17}
                      className="mt-1 shrink-0 text-[#213e76]"
                    />
                    {office.address}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-[0_28px_90px_rgba(0,0,0,0.25)]"
            >
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                aria-label="Close popup"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black/60 transition hover:bg-[#213e76] hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#213e76]/10 text-[#213e76]">
                <CheckCircle2 size={34} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-black">
                Thank you for submitting!
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/60">
                Your enquiry has been received successfully. The AvPlat team
                will get back to you shortly.
              </p>

              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#213e76] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

type InputFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
};

function InputField({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
}: InputFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-black/75">
        {label}
        {required && <span className="ml-1 text-[#213e76]">*</span>}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-[#213e76] focus:ring-4 focus:ring-[#213e76]/10 disabled:cursor-not-allowed disabled:bg-black/5 disabled:text-black/45"
      />
    </div>
  );
}

type CustomSelectFieldProps = {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
};

function CustomSelectField({
  label,
  placeholder,
  options,
  value,
  onChange,
  error = false,
  disabled = false,
}: CustomSelectFieldProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <label className="mb-2 block text-sm font-medium text-black/75">
        {label}
        <span className="ml-1 text-[#213e76]">*</span>
      </label>

      <input name="service" value={value} readOnly className="sr-only" />

      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          if (!disabled) setOpen((prev) => !prev);
        }}
        className={`flex w-full items-center justify-between gap-3 rounded-2xl border bg-white px-4 py-3 text-left text-sm outline-none transition disabled:cursor-not-allowed disabled:bg-black/5 disabled:text-black/45 ${
          error
            ? "border-red-400 ring-4 ring-red-100"
            : open
              ? "border-[#213e76] ring-4 ring-[#213e76]/10"
              : "border-black/10 hover:border-[#213e76]/40"
        }`}
      >
        <span className={value ? "text-black" : "text-black/35"}>
          {value || placeholder}
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
            open
              ? "bg-[#213e76] text-white"
              : "bg-[#213e76]/10 text-[#213e76]"
          }`}
        >
          <ChevronDown
            size={18}
            className={`transition duration-300 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-2xl border border-[#213e76]/15 bg-white p-2 shadow-[0_18px_55px_rgba(33,62,118,0.18)]"
          >
            {options.map((option) => {
              const active = value === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${
                    active
                      ? "bg-[#213e76] text-white"
                      : "text-black/75 hover:bg-[#213e76]/10 hover:text-[#213e76]"
                  }`}
                >
                  <span>{option}</span>
                  {active && <CheckCircle2 size={17} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="mt-2 text-xs font-medium text-red-500">
          Please select a service type.
        </p>
      )}
    </div>
  );
}

type SvgProps = {
  className?: string;
};

function FacebookIcon({ className }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.78-1.63 1.56v1.9h2.78l-.44 2.91h-2.34V22C18.34 21.25 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon({ className }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.61 3.61 0 0 0 4 7.6v8.8A3.61 3.61 0 0 0 7.6 20h8.8a3.61 3.61 0 0 0 3.6-3.6V7.6A3.61 3.61 0 0 0 16.4 4H7.6Z"
        fill="currentColor"
      />
      <path
        d="M12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z"
        fill="currentColor"
      />
      <path
        d="M17.05 6.65a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TwitterIcon({ className }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2.5h3.05l-6.66 7.61L23.12 21.5h-6.13l-4.8-6.27-5.49 6.27H3.65l7.12-8.14L3.25 2.5h6.28l4.34 5.73L18.9 2.5Zm-1.07 16.99h1.69L8.62 4.4H6.8l11.03 15.09Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.38.51A3.01 3.01 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.01 3.01 0 0 0 2.12 2.13c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.01 3.01 0 0 0 2.12-2.13c.5-1.88.5-5.8.5-5.8s0-3.92-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}