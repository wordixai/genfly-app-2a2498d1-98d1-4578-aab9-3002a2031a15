import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Shield, 
  Zap,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: '企业咨询',
      description: '专业的企业管理咨询服务，为您的企业发展提供战略指导',
      features: ['战略规划', '组织架构优化', '流程改进', '风险管理'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Target,
      title: '数字化转型',
      description: '全面的数字化解决方案，助力企业实现技术升级和业务创新',
      features: ['系统集成', '数据分析', '自动化流程', '云端迁移'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Lightbulb,
      title: '创新策略',
      description: '创新驱动的商业策略制定，帮助企业在竞争中保持领先优势',
      features: ['市场研究', '产品创新', '技术引进', '商业模式设计'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: TrendingUp,
      title: '增长优化',
      description: '基于数据驱动的增长策略，最大化企业的收益和市场份额',
      features: ['销售优化', '市场拓展', '客户留存', '收益分析'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Shield,
      title: '风险管控',
      description: '全方位的风险评估和管控体系，保障企业稳健发展',
      features: ['合规管理', '内控体系', '危机处理', '安全审计'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Zap,
      title: '效率提升',
      description: '通过优化流程和技术创新，显著提升企业运营效率',
      features: ['流程自动化', '资源优化', '绩效管理', '成本控制'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center'
    }
  ];

  return (
    <section id="services" className="section-corporate bg-gradient-corporate-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            专业服务
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            我们提供全方位的企业服务解决方案，从战略规划到执行落地，
            助力您的企业实现可持续发展和创新突破
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="card-corporate-feature group">
                {/* Service Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-primary-foreground" />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto text-accent hover:text-accent-foreground group-hover:bg-accent/10">
                    了解更多
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              需要定制化解决方案？
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              我们的专家团队将为您量身定制最适合的服务方案，
              确保每一项服务都能精准满足您的业务需求
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="btn-corporate">
                免费咨询
              </Button>
              <Button variant="outline" className="btn-corporate-outline">
                下载服务手册
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;