import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '服务项目',
      links: [
        { name: '企业咨询', href: '#consulting' },
        { name: '数字化转型', href: '#digital' },
        { name: '战略规划', href: '#strategy' },
        { name: '风险管控', href: '#risk' },
        { name: '增长优化', href: '#growth' },
      ]
    },
    {
      title: '解决方案',
      links: [
        { name: '制造业', href: '#manufacturing' },
        { name: '金融服务', href: '#finance' },
        { name: '科技行业', href: '#technology' },
        { name: '零售贸易', href: '#retail' },
        { name: '教育培训', href: '#education' },
      ]
    },
    {
      title: '公司信息',
      links: [
        { name: '关于我们', href: '#about' },
        { name: '新闻资讯', href: '#news' },
        { name: '职业发展', href: '#careers' },
        { name: '投资者关系', href: '#investors' },
        { name: '联系我们', href: '#contact' },
      ]
    },
    {
      title: '支持中心',
      links: [
        { name: '帮助文档', href: '#help' },
        { name: '在线客服', href: '#support' },
        { name: '培训中心', href: '#training' },
        { name: '合作伙伴', href: '#partners' },
        { name: '开发者API', href: '#api' },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: '联系电话',
      value: '+86 400-888-8888',
      link: 'tel:+8640088888888'
    },
    {
      icon: Mail,
      label: '邮箱地址',
      value: 'info@company.com',
      link: 'mailto:info@company.com'
    },
    {
      icon: MapPin,
      label: '公司地址',
      value: '北京市朝阳区商务中心区世贸天阶A座18层',
      link: '#'
    },
    {
      icon: Clock,
      label: '工作时间',
      value: '周一至周五 9:00-18:00',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-bold">企业集团</span>
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                十五年专业积淀，致力于为企业提供最优质的商业解决方案。
                我们的使命是成为客户最信赖的合作伙伴，助力企业实现可持续发展。
              </p>

              {/* Newsletter Subscription */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">订阅我们的资讯</h4>
                <p className="text-sm text-primary-foreground/70">
                  获取最新的行业洞察和专业知识
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="请输入您的邮箱"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                  <Button variant="secondary" size="icon">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Contact Information */}
        <div className="py-12">
          <h3 className="text-2xl font-bold mb-8 text-center">联系我们</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start space-x-3 p-4 bg-primary-foreground/5 rounded-lg hover:bg-primary-foreground/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-1">{info.label}</div>
                    <div className="text-primary-foreground/80 text-sm leading-relaxed">
                      {info.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/70 text-sm">
              © {currentYear} 企业集团. 保留所有权利 | 
              <a href="#" className="hover:text-primary-foreground ml-1">隐私政策</a> | 
              <a href="#" className="hover:text-primary-foreground ml-1">服务条款</a> |
              <a href="#" className="hover:text-primary-foreground ml-1">Cookie政策</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/70 text-sm">关注我们:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center">
            <p className="text-primary-foreground/60 text-xs leading-relaxed">
              本网站使用Cookie来提升用户体验。继续浏览本网站，即表示您同意我们的Cookie政策。
              <br />
              企业营业执照号：91110000MA001234XY | ICP备案号：京ICP备12345678号-1
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;