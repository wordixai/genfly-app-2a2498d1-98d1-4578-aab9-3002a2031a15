import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "与这家公司合作是我们做过的最明智的决定之一。他们的专业团队不仅深度理解我们的业务需求，更是在项目执行过程中展现出了卓越的专业能力。通过他们的数字化转型方案，我们的运营效率提升了40%，客户满意度也达到了历史新高。",
      author: "张伟",
      position: "首席执行官",
      company: "科技创新有限公司",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      industry: "科技"
    },
    {
      id: 2,
      content: "作为传统制造业企业，我们面临着巨大的转型压力。他们的团队深入了解我们的痛点，制定了切实可行的解决方案。项目实施过程中的专业素养和服务态度让我们印象深刻，最终帮助我们成功实现了智能制造的转型。",
      author: "李明",
      position: "总经理",
      company: "华东制造集团",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      industry: "制造业"
    },
    {
      id: 3,
      content: "在金融行业合规要求日益严格的环境下，他们的风险管控解决方案为我们提供了强有力的支持。不仅帮助我们建立了完善的内控体系，还在监管检查中获得了高度认可。这种专业水准确实令人信服。",
      author: "王芳",
      position: "风险管理总监",
      company: "中部金融集团",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      industry: "金融"
    },
    {
      id: 4,
      content: "他们的市场拓展策略帮助我们在激烈的竞争中找到了差异化优势。通过精准的市场定位和创新的营销方案，我们的市场份额在一年内增长了60%。更重要的是，他们始终站在客户角度思考问题。",
      author: "陈强",
      position: "市场副总裁",
      company: "新零售科技",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      industry: "零售"
    },
    {
      id: 5,
      content: "在国际化扩张的关键时期，他们提供的战略咨询服务起到了至关重要的作用。从市场分析到风险评估，从合规建议到执行落地，每一个环节都体现了他们深厚的专业功底和丰富的国际经验。",
      author: "刘静",
      position: "国际业务总监",
      company: "环球贸易公司",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      industry: "贸易"
    }
  ];

  const companyLogos = [
    { name: "科技创新", logo: "🚀" },
    { name: "华东制造", logo: "🏭" },
    { name: "中部金融", logo: "🏦" },
    { name: "新零售", logo: "🛍️" },
    { name: "环球贸易", logo: "🌐" },
    { name: "智能物流", logo: "📦" },
    { name: "绿色能源", logo: "🔋" },
    { name: "教育科技", logo: "📚" }
  ];

  return (
    <section id="testimonials" className="section-corporate">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-accent border-accent">
            客户评价
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            客户的成功就是
            <span className="text-accent block lg:inline lg:ml-2">我们的荣誉</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            听听我们的客户怎么说，他们的成功故事是对我们专业能力的最好证明
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="card-corporate relative overflow-hidden h-full">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-accent" />
              </div>

              <CardContent className="pt-8 pb-6 relative z-10">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      {testimonial.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-corporate rounded-3xl p-8 lg:p-16 text-center mb-20">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            客户满意度统计
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            数字见证品质，口碑成就未来
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-primary-foreground/90">客户满意度</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-primary-foreground/90">推荐意愿</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">92%</div>
              <div className="text-primary-foreground/90">续约率</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">4.9</div>
              <div className="text-primary-foreground/90">平均评分</div>
            </div>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            受到500+企业信赖
          </h3>
          
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="text-3xl">{company.logo}</div>
                <div className="text-xs text-muted-foreground font-medium">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              加入我们的成功客户行列
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              让我们为您的企业创造下一个成功故事
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Card className="p-1 bg-card border-border">
                <CardContent className="flex items-center space-x-3 p-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">免费咨询评估</span>
                </CardContent>
              </Card>
              <Card className="p-1 bg-card border-border">
                <CardContent className="flex items-center space-x-3 p-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">30天满意保证</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;