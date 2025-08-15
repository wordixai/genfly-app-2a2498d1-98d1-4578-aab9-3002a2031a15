import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center"
          alt="Modern Corporate Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent-foreground mb-8 animate-fade-in-up">
            <span className="text-sm font-medium">领先的企业解决方案提供商</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            引领未来
            <span className="block text-accent">商业创新</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            我们致力于为企业提供全方位的数字化转型解决方案，
            助力您的企业在竞争激烈的市场中脱颖而出
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button className="btn-corporate bg-accent hover:bg-accent/90 border-accent hover:border-accent/90 text-lg px-8 py-4">
              开始合作
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button variant="outline" className="btn-corporate-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Play className="mr-2 w-5 h-5" />
              观看介绍
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">合作企业</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">15</div>
              <div className="text-primary-foreground/80">年经验</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">98%</div>
              <div className="text-primary-foreground/80">客户满意度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80">专业支持</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;