/**
 * Neo-Brutalist Storyteller Design
 * - Bold asymmetric layouts with diagonal elements
 * - High-contrast colors: charcoal, coral, lime
 * - Thick borders and overlapping content blocks
 * - Rotated text labels and oversized counters
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, Mail, MapPin, Trophy, Users } from "lucide-react";

export default function Home() {
  const [followerCount, setFollowerCount] = useState(0);
  const [awardsCount, setAwardsCount] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Counter animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate follower count
            let count = 0;
            const target = 11000;
            const increment = target / 60;
            const timer = setInterval(() => {
              count += increment;
              if (count >= target) {
                setFollowerCount(target);
                clearInterval(timer);
              } else {
                setFollowerCount(Math.floor(count));
              }
            }, 20);

            // Animate awards count
            let awardCount = 0;
            const awardTarget = 15;
            const awardTimer = setInterval(() => {
              awardCount++;
              if (awardCount >= awardTarget) {
                setAwardsCount(awardTarget);
                clearInterval(awardTimer);
              } else {
                setAwardsCount(awardCount);
              }
            }, 80);
          }
        }
        );
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-[3px] border-foreground">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            AJ
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#awards" className="text-sm font-medium hover:text-primary transition-colors">
              Awards
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </a>
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold border-2 border-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Diagonal Split */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-foreground/80" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Typography */}
            <div className="space-y-6">
              <div 
                className="inline-block px-4 py-2 bg-secondary text-secondary-foreground border-[3px] border-foreground transform -rotate-2 font-mono text-sm font-semibold"
              >
                THE MAVERICK GIRL
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-extrabold text-background leading-none">
                Ankita<br />Jain
              </h1>
              
              <p className="text-xl text-background/90 font-medium max-w-lg leading-relaxed">
                A marketer who started early, learned fast, and built things from scratch.
              </p>

              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold border-[3px] border-foreground text-lg px-8"
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-background text-foreground hover:bg-background/90 font-bold border-[3px] border-foreground text-lg px-8"
                  onClick={() => window.open('https://www.linkedin.com/in/themaverickgirl/', '_blank')}
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 bg-secondary border-[3px] border-foreground transform rotate-2 hover:rotate-0 transition-transform">
                <Users className="w-10 h-10 mb-4 text-foreground" />
                <div className="text-5xl font-bold text-foreground font-mono">
                  {followerCount.toLocaleString()}+
                </div>
                <div className="text-sm font-semibold text-foreground/80 mt-2">
                  LinkedIn Followers
                </div>
              </Card>

              <Card className="p-8 bg-primary border-[3px] border-foreground transform -rotate-1 hover:rotate-0 transition-transform">
                <Trophy className="w-10 h-10 mb-4 text-primary-foreground" />
                <div className="text-5xl font-bold text-primary-foreground font-mono">
                  {awardsCount}+
                </div>
                <div className="text-sm font-semibold text-primary-foreground/90 mt-2">
                  National Awards
                </div>
              </Card>

              <Card className="p-8 bg-background border-[3px] border-foreground transform -rotate-2 hover:rotate-0 transition-transform">
                <MapPin className="w-10 h-10 mb-4 text-foreground" />
                <div className="text-2xl font-bold text-foreground">
                  United Kingdom
                </div>
                <div className="text-sm font-semibold text-foreground/80 mt-2">
                  Based in
                </div>
              </Card>

              <Card className="p-8 bg-accent border-[3px] border-foreground transform rotate-1 hover:rotate-0 transition-transform">
                <Award className="w-10 h-10 mb-4 text-foreground" />
                <div className="text-2xl font-bold text-foreground">
                  MICA
                </div>
                <div className="text-sm font-semibold text-foreground/80 mt-2">
                  Masters Degree
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Diagonal Cut */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{
            clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
          }}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 lg:col-start-2">
              <div 
                className="inline-block px-3 py-1 bg-primary text-primary-foreground border-[2px] border-foreground transform rotate-1 font-mono text-xs font-semibold mb-8"
              >
                ABOUT
              </div>
              
              <h2 className="text-5xl font-bold mb-8 leading-tight">
                Creative. Strategic.<br />
                <span className="text-primary">Unconventional.</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I'm a professional marketer with a Master's degree in Marketing from MICA (Mudra Institute of Communications, Ahmedabad), one of India's premier marketing schools. My journey began early, and I've built a track record of winning national-level competitions and creating impactful campaigns across multiple sectors.
                </p>
                
                <p>
                  With experience spanning Amazon, Flipkart, and various independent projects, I bring a unique blend of strategic thinking and creative execution. My approach combines data-driven insights with storytelling that resonates, whether it's crafting ad campaigns, developing brand strategies, or building marketing initiatives from the ground up.
                </p>

                <p>
                  I hold an India Book of Records title and have competed at international levels, consistently ranking among the top performers. My quirky, maverick approach to marketing challenges conventional thinking while delivering measurable results.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-[6px] border-primary pl-6">
                  <div className="text-sm font-mono font-semibold text-muted-foreground mb-1">
                    EDUCATION
                  </div>
                  <div className="font-bold text-xl">MICA</div>
                  <div className="text-sm text-muted-foreground">Masters in Marketing</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">2020 - 2022</div>
                </div>

                <div className="border-l-[6px] border-secondary pl-6">
                  <div className="text-sm font-mono font-semibold text-muted-foreground mb-1">
                    UNDERGRADUATE
                  </div>
                  <div className="font-bold text-xl">SRCC</div>
                  <div className="text-sm text-muted-foreground">Shri Ram College of Commerce</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">2016 - 2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-muted relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/achievements-pattern.png)',
            backgroundSize: 'cover',
          }}
        />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div 
              className="inline-block px-3 py-1 bg-secondary text-secondary-foreground border-[2px] border-foreground transform -rotate-1 font-mono text-xs font-semibold mb-6"
            >
              EXPERIENCE
            </div>
            <h2 className="text-5xl font-bold">
              Where I've <span className="text-primary">Made Impact</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 border-[3px] border-foreground bg-background hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary border-[3px] border-foreground flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Independent Projects</h3>
                  <div className="text-sm font-mono text-muted-foreground mb-4">CURRENT</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Working on diverse marketing initiatives, consulting projects, and creative campaigns. Building brands from scratch and helping businesses tell their stories effectively.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-[3px] border-foreground bg-background hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary border-[3px] border-foreground flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-8 h-8 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Competition Success</h3>
                  <div className="text-sm font-mono text-muted-foreground mb-4">2020 - 2022</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Won multiple national-level marketing competitions including Amazon Advertising S.M.A.R.T Challenge, Flipkart Wired 5.0 (Top 5), and campaigns for IIM Ahmedabad, IIT Kharagpur, and IMT Hyderabad events.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-[3px] border-foreground bg-background hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent border-[3px] border-foreground flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Judge & Mentor</h3>
                  <div className="text-sm font-mono text-muted-foreground mb-4">2025</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Served as a judge at the International Greenwich Olympiad held at Queen Mary, University of London, evaluating and mentoring the next generation of talent.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div 
              className="inline-block px-3 py-1 bg-primary text-primary-foreground border-[2px] border-foreground transform rotate-1 font-mono text-xs font-semibold mb-6"
            >
              ACHIEVEMENTS
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Awards & <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A track record of excellence in marketing competitions and academic achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { year: "2025", title: "Judge, International Greenwich Olympiad", org: "Queen Mary, University of London" },
              { year: "2021", title: "Campus Winners", org: "Amazon Advertising S.M.A.R.T Challenge" },
              { year: "2021", title: "National Finalists, Top 5", org: "Flipkart Wired 5.0" },
              { year: "2021", title: "National Runner up", org: "Leader's Challenge, VGSoM IIT Kharagpur" },
              { year: "2021", title: "National Winner: Ad-vo-case", org: "Cognizance 2021, Keshav Mahavidyalaya" },
              { year: "2021", title: "National Winner: Ad-tract", org: "Impelz 7.0, IMT Hyderabad" },
              { year: "2020", title: "National 2nd Runner up", org: "Tathagat XII, FORE School of Management" },
              { year: "2020", title: "National Runner up: The Blurb", org: "IIM, Ahmedabad" },
              { year: "2019", title: "India Book of Records Holder", org: "India Book of Records" },
              { year: "2015", title: "International Rank 53", org: "International Commerce Olympiad (99.30%ile)" },
              { year: "2014", title: "International Rank 228", org: "International Commerce Olympiad (98.10%ile)" },
            ].map((award, index) => (
              <Card 
                key={index}
                className="p-6 border-[3px] border-foreground bg-card hover:shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transition-all hover:-translate-y-1"
              >
                <div className="text-xs font-mono font-bold text-primary mb-3">{award.year}</div>
                <h3 className="text-lg font-bold mb-2 leading-tight">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.org}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <div 
              className="inline-block px-3 py-1 bg-secondary text-secondary-foreground border-[2px] border-foreground transform -rotate-1 font-mono text-xs font-semibold mb-6"
            >
              TESTIMONIALS
            </div>
            <h2 className="text-5xl font-bold">
              What People <span className="text-primary">Say</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-12 border-[3px] border-foreground bg-background relative overflow-hidden">
              <div 
                className="absolute top-8 left-8 w-32 h-32 opacity-10"
                style={{
                  backgroundImage: 'url(/images/testimonial-accent.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              
              <div className="relative z-10">
                <p className="text-2xl font-semibold mb-8 leading-relaxed">
                  "A creative leader and result driven!"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary border-[3px] border-foreground rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">AG</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Aniket Gon</div>
                    <div className="text-sm text-muted-foreground">Professional Colleague</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-foreground text-background relative overflow-hidden">
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20"
          style={{
            backgroundImage: 'url(/images/contact-graphic.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div 
              className="inline-block px-3 py-1 bg-secondary text-secondary-foreground border-[2px] border-background transform rotate-1 font-mono text-xs font-semibold mb-8"
            >
              GET IN TOUCH
            </div>
            
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Let's Create<br />
              Something <span className="text-secondary">Remarkable</span>
            </h2>

            <p className="text-xl mb-10 text-background/90 leading-relaxed">
              Whether you're looking for creative marketing strategies, brand storytelling, or just want to connect, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <a 
                href="https://www.linkedin.com/in/themaverickgirl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-background text-foreground border-[3px] border-background hover:bg-secondary hover:text-secondary-foreground transition-all group"
              >
                <Users className="w-6 h-6" />
                <div>
                  <div className="font-bold text-lg">LinkedIn</div>
                  <div className="text-sm opacity-70">Connect with me professionally</div>
                </div>
              </a>

              <a 
                href="mailto:hello@ankitajain.com" 
                className="flex items-center gap-4 p-6 bg-primary text-primary-foreground border-[3px] border-background hover:bg-secondary hover:text-secondary-foreground transition-all group"
              >
                <Mail className="w-6 h-6" />
                <div>
                  <div className="font-bold text-lg">Email</div>
                  <div className="text-sm opacity-90">Drop me a message</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background border-t-[3px] border-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2026 Ankita Jain. Built with creativity & code.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://www.linkedin.com/in/themaverickgirl/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
