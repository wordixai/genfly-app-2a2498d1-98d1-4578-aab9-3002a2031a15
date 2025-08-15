import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Shield, 
  Users, 
  Trophy, 
  Lightbulb, 
  Globe,
  CheckCircle,
  Star
} from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Clock,
      title: '快速响应',
      description: '24小时内响应客户需求，48小时内提供初步解决方案',
      stats: '平均响应时间 < 2小时',
      color: 'bg-blue-50 text-blue-600',
      features: ['7x24专业支持', '紧急响应机制', '实时沟通渠道']
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '严格的安全管控体系，确保客户数据和业务信息的绝对安全',
      stats: '安全等级 ISO27001',
      color: 'bg-green-50 text-green-600',
      features: ['数据加密传输', '多重安全验证', '定期安全审计']
    },
    {
      icon: Users,
      title: '专业团队',
      description: '200+资深专家，平均行业经验超过10年，持续专业认证',
      stats: '团队规模 200+ 专家',
      color: 'bg-purple-50 text-purple-600',
      features: ['行业资深专家', '持续培训体系', '专业认证要求']
    },
    {
      icon: Trophy,
      title: '卓越品质',
      description: '严格的质量管控流程，确保每个项目都达到最高标准',
      stats: '客户满意度 98%+',
      color: 'bg-yellow-50 text-yellow-600',
      features: ['六西格玛标准', '多层质量检查', '持续改进机制']
    },
    {
      icon: Lightbulb,
      title: '创新能力',
      description: '持续的技术创新和方法论升级，始终保持行业领先地位',
      stats: '年度创新项目 50+',
      color: 'bg-orange-50 text-orange-600',
      features: ['专业研发团队', '前沿技术应用', '创新方法论']
    },
    {
      icon: Globe,
      title: '全球视野',
      description: '国际化的服务经验和全球化的合作网络，提供世界级服务',
      stats: '服务国家 20+',
      color: 'bg-indigo-50 text-indigo-600',
      features: ['国际标准流程', '多语言支持', '全球合作网络']
    }
  ];

  const testimonialStats = [
    { value: '500+', label: '满意客户', description: '累计服务企业数量' },
    { value: '98%', label: '续约率', description: '客户长期合作比例' },
    { value: '15', label: '年经验', description: '深耕行业时间' },
    { value: '50+', label: '行业奖项', description: '获得专业认可' }
  ];

  return (
    <section id="advantages" className="section-corporate-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-accent border-accent">
            核心优势
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            为什么选择我们
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            凭借十五年的专业积淀和持续创新，我们在行业中建立了无可比拟的优势，
            为客户提供最专业、最可靠的服务保障
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card key={advantage.title} className="card-corporate-feature h-full">
                <CardHeader className="pb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${advantage.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{advantage.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {advantage.stats}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {advantage.description}
                  </p>
                  
                  <div className="space-y-2">
                    {advantage.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-16 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              用数据说话
            </h3>
            <p className="text-lg text-muted-foreground">
              这些数字见证了我们的专业实力和客户的信任
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              我们的竞争优势
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              在激烈的市场竞争中，这些关键优势让我们始终保持领先地位
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Advantage Item */}
            <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  独家方法论
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  经过15年实践验证的独家服务方法论，确保项目成功率和效果最大化。
                  我们的方法论已成为行业标准，被多家知名企业采用。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  定制化服务
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  没有两个企业是完全相同的，我们为每位客户量身定制解决方案，
                  确保服务内容与企业实际需求完美匹配。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  行业领导地位
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  作为行业的领导者，我们参与制定多项行业标准，
                  拥有丰富的最佳实践经验和前瞻性的行业洞察。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  全生命周期支持
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  从项目启动到后期维护，我们提供全生命周期的专业支持，
                  确保客户在每个阶段都能获得最优质的服务体验。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;