"use client";

import React, { useState } from 'react';
import { Check, Star, Menu, X, ArrowRight, Shield, Zap, Users } from 'lucide-react';


const SubscriptionWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = {
    starter: {
      name: 'Starter',
      description: 'Perfect for individuals getting started',
      monthly: 9,
      yearly: 90,
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic support',
        'Mobile app access',
        'Standard templates'
      ],
      popular: false
    },
    pro: {
      name: 'Pro',
      description: 'Best for growing businesses',
      monthly: 29,
      yearly: 290,
      features: [
        'Unlimited projects',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'Custom templates',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      description: 'For large organizations',
      monthly: 99,
      yearly: 990,
      features: [
        'Everything in Pro',
        'Unlimited storage',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security',
        'SSO integration',
        'Custom contracts'
      ],
      popular: false
    }
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      content: 'This platform has transformed how we manage our projects. The Pro plan gives us everything we need.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      content: 'Started with the Starter plan and upgraded as we grew. Perfect pricing structure for scaling businesses.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      company: 'CreativeStudio',
      content: 'The team collaboration features in the Pro plan have boosted our productivity by 40%.',
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Zap className="featureIcon" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with 99.9% uptime guarantee'
    },
    {
      icon: <Shield className="featureIcon" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with end-to-end encryption'
    },
    {
      icon: <Users className="featureIcon" />,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for teams of any size'
    }
  ];

  return (
    <div className="container">
      {/* Navigation */}
      <nav className="nav">
        <div className="navContainer">
          <div className="navContent">
            <div className="logo">SubsPro</div>
            
            <div className="desktopMenu">
              <div className="menuLinks">
                <a href="#features" className="navLink">Features</a>
                <a href="#pricing" className="navLink">Pricing</a>
                <a href="#testimonials" className="navLink">Reviews</a>
                <button className="ctaButton">Get Started</button>
              </div>
            </div>

            <div className="mobileMenuButton">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="menuIcon" /> : <Menu className="menuIcon" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobileMenu">
            <div className="mobileMenuContent">
              <a href="#features" className="mobileNavLink">Features</a>
              <a href="#pricing" className="mobileNavLink">Pricing</a>
              <a href="#testimonials" className="mobileNavLink">Reviews</a>
              <button className="mobileCta">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <h1 className="heroTitle">
            Scale Your Business
            <span className="heroTitleGradient">With Confidence</span>
          </h1>
          <p className="heroDescription">
            Choose the perfect plan for your needs. From startups to enterprises, 
            we have the tools and features to help you succeed.
          </p>
          <button className="heroButton">
            Start Free Trial
            <ArrowRight className="buttonIcon" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="featuresContainer">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Why Choose SubsPro?</h2>
            <p className="sectionSubtitle">Built for modern businesses that demand excellence</p>
          </div>
          
          <div className="featuresGrid">
            {features.map((feature, index) => (
              <div key={index} className="featureCard">
                <div className="featureIconWrapper">{feature.icon}</div>
                <h3 className="featureTitle">{feature.title}</h3>
                <p className="featureDescription">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="pricingContainer">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Simple, Transparent Pricing</h2>
            <p className="sectionSubtitle">Choose the plan that fits your needs</p>

            {/* Billing Toggle */}
            <div className="billingToggle">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`toggleButton ${billingCycle === 'monthly' ? 'toggleActive' : ''}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`toggleButton ${billingCycle === 'yearly' ? 'toggleActive' : ''}`}
              >
                Yearly
                <span className="saveBadge">Save 17%</span>
              </button>
            </div>
          </div>

          <div className="pricingGrid">
            {Object.entries(plans).map(([key, plan]) => (
              <div
                key={key}
                className={`pricingCard ${plan.popular ? 'popularCard' : ''}`}
              >
                {plan.popular && (
                  <div className="popularBadge">
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="cardHeader">
                  <h3 className="planName">{plan.name}</h3>
                  <p className="planDescription">{plan.description}</p>
                  <div className="priceSection">
                    <span className="price">
                      ${billingCycle === 'monthly' ? plan.monthly : plan.yearly}
                    </span>
                    <span className="pricePeriod">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="savings">
                      Save ${(plan.monthly * 12) - plan.yearly} per year
                    </p>
                  )}
                </div>

                <ul className="featuresList">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="featureItem">
                      <Check className="checkIcon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`planButton ${plan.popular ? 'popularButton' : 'standardButton'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="testimonialsContainer">
          <div className="sectionHeader">
            <h2 className="sectionTitle">What Our Customers Say</h2>
            <p className="sectionSubtitle">Join thousands of satisfied customers</p>
          </div>

          <div className="testimonialsGrid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonialCard">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="starIcon" />
                  ))}
                </div>
                <p className="testimonialContent">"{testimonial.content}"</p>
                <div className="testimonialAuthor">
                  <div className="authorName">{testimonial.name}</div>
                  <div className="authorRole">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="ctaContainer">
          <h2 className="ctaTitle">Ready to Get Started?</h2>
          <p className="ctaDescription">
            Join thousands of businesses already using SubsPro to scale their operations.
          </p>
          <div className="ctaButtons">
            <button className="primaryCtaButton">Start Free Trial</button>
            <button className="secondaryCtaButton">Schedule Demo</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerGrid">
            <div className="footerBrand">
              <div className="footerLogo">SubsPro</div>
              <p className="footerTagline">
                Empowering businesses with flexible subscription solutions.
              </p>
            </div>
            <div className="footerSection">
              <h4 className="footerTitle">Product</h4>
              <ul className="footerLinks">
                <li><a href="#" className="footerLink">Features</a></li>
                <li><a href="#" className="footerLink">Pricing</a></li>
                <li><a href="#" className="footerLink">API</a></li>
              </ul>
            </div>
            <div className="footerSection">
              <h4 className="footerTitle">Support</h4>
              <ul className="footerLinks">
                <li><a href="#" className="footerLink">Help Center</a></li>
                <li><a href="#" className="footerLink">Contact</a></li>
                <li><a href="#" className="footerLink">Status</a></li>
              </ul>
            </div>
            <div className="footerSection">
              <h4 className="footerTitle">Company</h4>
              <ul className="footerLinks">
                <li><a href="#" className="footerLink">About</a></li>
                <li><a href="#" className="footerLink">Blog</a></li>
                <li><a href="#" className="footerLink">Careers</a></li>
              </ul>
            </div>
          </div>
          </div>
      </footer>
    </div>
  );
};

export default SubscriptionWebsite;