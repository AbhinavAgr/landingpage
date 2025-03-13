import React, { useState } from 'react';
import {
  Users,
  Brain,
  Clock,
  ChevronRight,
  CheckCircle2,
  Building2,
  Mail,
  Phone,
  User,
  MessageSquare,
  ArrowRight,
  LineChart,
  UserCheck,
  FileCheck,
  Rocket,
  Play,
  Sparkles,
  Globe,
  Shield,
  Star,
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    needs: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const hiringSteps = [
    {
      icon: <FileCheck className="h-8 w-8 text-[#275df5]" />,
      title: 'Requirements Analysis',
      description: 'We analyze your specific hiring needs and requirements to create a tailored recruitment strategy.',
    },
    {
      icon: <LineChart className="h-8 w-8 text-[#275df5]" />,
      title: 'AI Profile Matching',
      description: 'Our AI algorithms match your requirements with the best candidates from our extensive database.',
    },
    {
      icon: <UserCheck className="h-8 w-8 text-[#275df5]" />,
      title: 'Expert Screening',
      description: 'Our industry experts conduct thorough screenings to ensure candidate quality.',
    },
    {
      icon: <Users className="h-8 w-8 text-[#275df5]" />,
      title: 'Candidate Selection',
      description: 'We present you with a shortlist of top candidates that match your criteria.',
    },
    {
      icon: <Rocket className="h-8 w-8 text-[#275df5]" />,
      title: 'Onboarding Support',
      description: 'We assist with the onboarding process to ensure a smooth transition.',
    },
  ];

  const testimonials = [
    {
      quote:
        "Naukri Expert Assist transformed our hiring process. We've reduced time-to-hire by 50% and found exceptional talent.",
      name: 'Sarah Johnson',
      role: 'HR Director, Tech Solutions Inc.',
      avatar: 'https://i.pravatar.cc/150?img=32',
      stars: 5,
    },
    {
      quote:
        'The AI-powered shortlisting is incredibly accurate. It saves us countless hours of manual screening.',
      name: 'Rajesh Kumar',
      role: 'Talent Acquisition Head, Global Bank',
      avatar: 'https://i.pravatar.cc/150?img=59',
      stars: 5,
    },
    {
      quote:
        'Their industry experts understand our needs perfectly. The quality of candidates is consistently high.',
      name: 'Michelle Zhang',
      role: 'VP HR, Healthcare Systems',
      avatar: 'https://i.pravatar.cc/150?img=47',
      stars: 5,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        needs: '',
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-[800px] w-[800px] transform translate-x-1/3 -translate-y-1/4">
            <div className="absolute inset-0 bg-gradient-to-br from-[#275df5] to-blue-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
          <div className="absolute left-0 bottom-0 h-[600px] w-[600px] transform -translate-x-1/3 translate-y-1/4">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-[#275df5]/30 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
        
        <nav className="relative z-10 max-w-7xl mx-auto flex justify-between items-center px-8 sm:px-12 lg:px-16 py-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#275df5] rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl">Naukri Expert</span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-gray-600 hover:text-[#275df5] transition-colors">Features</a>
            <a href="#process" className="text-gray-600 hover:text-[#275df5] transition-colors">Process</a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#275df5] transition-colors">Testimonials</a>
            <a 
              href="#contact"
              className="px-5 py-2 bg-[#275df5]/10 text-[#275df5] rounded-full font-medium hover:bg-[#275df5]/20 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
        
        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#275df5]/10 text-[#275df5] rounded-full text-sm font-medium">
              #1 AI-Powered Recruitment Solution
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Hire Exceptional Talent <span className="text-[#275df5]">Faster</span> with AI
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              By leveraging artificial intelligence and expert recruiters, we help businesses find and hire exceptional talent faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#275df5] text-white rounded-full font-semibold text-lg hover:bg-[#275df5]/90 transition-all shadow-lg hover:shadow-xl hover:shadow-[#275df5]/20 transform hover:-translate-y-1"
              >
                Book a Demo
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <button
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-[#275df5]/30 hover:bg-gray-50 transition-all"
              >
                <Play className="mr-2 h-5 w-5 text-[#275df5]" />
                Watch Video
              </button>
            </div>
          </div>

          <div id="features" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#275df5]/20 transition-all hover:shadow-xl hover:shadow-[#275df5]/5 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#275df5]/10 p-3 rounded-lg group-hover:bg-[#275df5]/20 transition-colors">
                  <Brain className="h-6 w-6 text-[#275df5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AI-Powered Matching</h3>
              </div>
              <p className="text-gray-600">Advanced algorithms that analyze and match candidates with your specific requirements, resulting in better fits.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#275df5]/20 transition-all hover:shadow-xl hover:shadow-[#275df5]/5 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#275df5]/10 p-3 rounded-lg group-hover:bg-[#275df5]/20 transition-colors">
                  <Clock className="h-6 w-6 text-[#275df5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Time Efficient</h3>
              </div>
              <p className="text-gray-600">Reduce your hiring time by up to 60% with our streamlined recruitment process and expert support.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#275df5]/20 transition-all hover:shadow-xl hover:shadow-[#275df5]/5 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#275df5]/10 p-3 rounded-lg group-hover:bg-[#275df5]/20 transition-colors">
                  <Users className="h-6 w-6 text-[#275df5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Expert Support</h3>
              </div>
              <p className="text-gray-600">Dedicated recruitment specialists with domain expertise to guide you through the entire hiring process.</p>
            </div>
          </div>
          
          <div className="mt-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#275df5] opacity-5 rounded-3xl"></div>
            <div className="grid md:grid-cols-2 gap-6 p-8 md:p-12 relative">
              <div className="flex flex-col justify-center">
                <div className="inline-block mb-4 px-4 py-1.5 bg-[#275df5]/10 text-[#275df5] rounded-full text-sm font-medium w-fit">
                  Our Impact
                </div>
                <h2 className="text-3xl font-bold mb-6">Driving Exceptional Results</h2>
                <p className="text-gray-600 mb-8">
                  Our clients have seen remarkable improvements in their recruitment metrics, helping them find better talent faster and more efficiently.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="text-3xl font-bold text-[#275df5]">60%</div>
                    <div className="text-gray-600">Reduction in time-to-hire</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="text-3xl font-bold text-[#275df5]">85%</div>
                    <div className="text-gray-600">Candidate match rate</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="text-3xl font-bold text-[#275df5]">40%</div>
                    <div className="text-gray-600">Cost savings</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <div className="text-3xl font-bold text-[#275df5]">5000+</div>
                    <div className="text-gray-600">Successful placements</div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative w-full h-80 bg-[#275df5]/10 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#275df5]/20 to-[#275df5]/5"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-12 bg-white rounded-full">
                      <Play className="h-16 w-16 text-[#275df5]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#275df5]/10 text-[#275df5] rounded-full text-sm font-medium">
              Our Advantages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Naukri Expert Assist?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Sparkles className="h-12 w-12 text-[#275df5]" />,
                title: 'AI-Powered Shortlisting',
                description:
                  'Our advanced AI algorithms analyze thousands of profiles to find the perfect match for your requirements.',
              },
              {
                icon: <Users className="h-12 w-12 text-[#275df5]" />,
                title: 'Expert Hiring Team',
                description:
                  'Dedicated industry specialists with years of experience in recruitment across various sectors.',
              },
              {
                icon: <Shield className="h-12 w-12 text-[#275df5]" />,
                title: 'Quality Guarantee',
                description:
                  'We stand behind our candidates with a 60-day replacement guarantee for complete peace of mind.',
              },
              {
                icon: <Clock className="h-12 w-12 text-[#275df5]" />,
                title: 'Time & Cost Efficient',
                description:
                  'Reduce hiring time by 60% and costs by 40% with our streamlined recruitment process.',
              },
              {
                icon: <Globe className="h-12 w-12 text-[#275df5]" />,
                title: 'Global Talent Network',
                description:
                  'Access to a vast network of pre-vetted candidates across industries and specializations.',
              },
              {
                icon: <CheckCircle2 className="h-12 w-12 text-[#275df5]" />,
                title: 'Custom Solutions',
                description:
                  'Tailored recruitment strategies designed to meet your specific business needs and requirements.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#275df5]/20 hover:shadow-md transition-all group"
              >
                <div className="bg-[#275df5]/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-[#275df5]/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="process" className="py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#275df5]/10 text-[#275df5] rounded-full text-sm font-medium">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our 5-Step Hiring Process
            </h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-8">
            {hiringSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#275df5]/20 hover:shadow-xl transition-all group"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-[#275df5] text-white rounded-full flex items-center justify-center text-lg font-semibold">
                  {index + 1}
                </div>
                <div className="mt-4 mb-4 bg-[#275df5]/10 p-3 rounded-lg w-fit group-hover:bg-[#275df5]/20 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < hiringSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-[#275df5]">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#275df5] text-white rounded-full font-medium text-sm hover:bg-[#275df5]/90 transition-colors"
            >
              Start Your Hiring Journey
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#275df5]/10 text-[#275df5] rounded-full text-sm font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#275df5]/20 hover:shadow-xl transition-all relative"
              >
                <div className="absolute -top-5 right-8 bg-[#275df5] text-white p-2 rounded-full">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#275df5]/10">
                      <img src="/api/placeholder/60/60" alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-600 italic">
                  "{testimonial.quote}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-8">Trusted by leading companies worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-center">
                  <div className="h-12 w-40 bg-gray-200 rounded-lg opacity-50"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Breakdown */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-[#275df5]/10 text-[#275df5] rounded-full text-sm font-medium">
                Advanced Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cutting-edge technology for modern recruitment
              </h2>
              <p className="text-gray-600 mb-8">
                Our platform combines AI technology with human expertise to deliver unmatched recruitment solutions.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "AI Resume Parsing",
                    description: "Automatically extract and analyze candidate information from resumes with high accuracy."
                  },
                  {
                    title: "Skill-Based Matching",
                    description: "Match candidates based on specific skills, experience, and cultural fit criteria."
                  },
                  {
                    title: "Automated Screening",
                    description: "Save time with intelligent pre-screening that identifies top candidates quickly."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="bg-[#275df5]/10 p-1 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-[#275df5]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-[#275df5] font-medium hover:text-[#275df5]/80 transition-colors"
                >
                  Learn more about our technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#275df5]/5 rounded-3xl transform rotate-3"></div>
              <div className="absolute -z-10 inset-0 bg-[#275df5]/5 rounded-3xl transform -rotate-3"></div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#275df5]/5 h-16 rounded-lg"></div>
                  <div className="bg-[#275df5]/5 h-16 rounded-lg"></div>
                  <div className="bg-[#275df5]/5 h-16 rounded-lg"></div>
                  <div className="bg-[#275df5]/5 h-16 rounded-lg"></div>
                </div>
                <div className="h-40 bg-[#275df5]/10 rounded-lg mb-6 flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-[#275df5]/30" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                  <div className="h-3 bg-gray-100 rounded-full w-4/5"></div>
                  <div className="h-3 bg-gray-100 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[#275df5]">
        <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your hiring process?
          </h2>
          <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
            Join thousands of companies that trust Naukri Expert Assist to find exceptional talent efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#275df5] rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Started Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-[#275df5]/10 text-[#275df5] rounded-full text-sm font-medium">
                Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Talk to an Expert Today
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours. We're excited to explore how we can help with your hiring needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#275df5]/10 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-[#275df5]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">support@naukriexpert.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#275df5]/10 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-[#275df5]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 1800 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#275df5]/10 p-3 rounded-lg mr-4">
                    <Building2 className="h-5 w-5 text-[#275df5]" />
                  </div>
                  <div>
                  
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Office</h4>
                    <p className="text-gray-600">
                      Naukri Towers, Sector 62, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {formSubmitted ? (
                <div className="bg-white rounded-xl shadow-lg p-12 border border-[#275df5]/20 text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#275df5] focus:border-[#275df5] transition-colors"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#275df5] focus:border-[#275df5] transition-colors"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#275df5] focus:border-[#275df5] transition-colors"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="needs"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Hiring Needs
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <textarea
                          id="needs"
                          value={formData.needs}
                          onChange={(e) =>
                            setFormData({ ...formData, needs: e.target.value })
                          }
                          rows={4}
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#275df5] focus:border-[#275df5] transition-colors"
                          placeholder="Tell us about your hiring requirements"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#275df5] text-white py-4 px-8 rounded-lg font-semibold hover:bg-[#275df5]/90 transition-colors shadow-lg hover:shadow-xl hover:shadow-[#275df5]/20"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-10 md:mb-0">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-[#275df5] rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl">Naukri Expert</span>
              </div>
              <p className="text-gray-400 max-w-xs mb-6">
                Your trusted partner in modern recruitment solutions powered by AI technology.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social, i) => (
                  <a key={i} href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#275df5] transition-colors">
                    <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h4 className="font-semibold text-lg mb-4">Solutions</h4>
                <ul className="space-y-3">
                  {['AI Recruitment', 'Expert Screening', 'Industry Specialists', 'Talent Analytics', 'Custom Hiring'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Industries</h4>
                <ul className="space-y-3">
                  {['Information Technology', 'Banking & Finance', 'Healthcare', 'Automotive', 'E-commerce'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Company</h4>
                <ul className="space-y-3">
                  {['About Us', 'Careers', 'Blog', 'Press', 'Contact Us'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 Naukri Expert Assist. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;