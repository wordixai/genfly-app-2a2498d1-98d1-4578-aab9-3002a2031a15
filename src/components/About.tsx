import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Award, 
  Globe, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Users, number: '500+', label: '合作伙伴', description: '遍布全球的合作网络' },
    { icon: Award, number: '50+', label: '行业奖项', description: '获得业界权威认可' },
    { icon: Globe, number: '20+', label: '国家地区', description: '国际化服务覆盖' },
    { icon: CheckCircle, number: '98%', label: '成功率', description: '项目交付成功率' }
  ];

  const values = [
    {
      title: '创新驱动',
      description: '持续的技术创新和商业模式创新是我们的核心驱动力',
      icon: '💡'
    },
    {
      title: '客户至上',
      description: '始终将客户需求放在首位，提供超越期望的服务体验',
      icon: '👥'
    },
    {
      title: '专业精神',
      description: '以专业的态度和严谨的流程确保每一个项目的高质量交付',
      icon: '🎯'
    },
    {
      title: '可持续发展',
      description: '关注长期价值创造，助力客户实现可持续的商业成功',
      icon: '🌱'
    }
  ];

  return (
    <section id="about" className="section-corporate">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-accent border-accent">
            关于我们
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            引领行业发展的
            <span className="text-accent block lg:inline lg:ml-2">专业团队</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            十五年来，我们始终专注于为企业提供最优质的商业解决方案，
            凭借深厚的行业经验和创新的服务理念，成为客户信赖的合作伙伴
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Story Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                我们的故事
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                成立于2008年，我们从一个小型咨询团队发展成为行业领先的综合性企业服务提供商。
                我们见证了无数企业的成长历程，也在不断的挑战中完善自己的服务体系。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                今天，我们拥有超过200名专业顾问，为全球500多家企业提供服务，
                覆盖制造业、金融业、科技业等多个领域。我们的使命是成为企业数字化转型路上最可靠的伙伴。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                我们的优势
              </h3>
              <ul className="space-y-3">
                {[
                  '15年深厚的行业积淀和丰富的项目经验',
                  '200+资深专家团队，覆盖各个专业领域',
                  '创新的方法论和成熟的服务体系',
                  '全球化的服务网络和本土化的深度理解'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="btn-corporate">
              了解更多
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=750&fit=crop&crop=center"
                alt="Professional Team Meeting"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-accent mb-1">15+</div>
              <div className="text-sm text-muted-foreground">年专业经验</div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="card-corporate text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="bg-muted/30 rounded-3xl p-8 lg:p-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              我们的核心价值观
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              这些价值观指导着我们的每一个决策，塑造着我们的企业文化，
              也是我们与客户建立长期合作关系的基石
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{value.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;