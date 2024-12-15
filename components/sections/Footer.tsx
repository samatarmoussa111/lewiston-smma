import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@agency.new" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@agency.new</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Business St, City, State</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="p-0 h-auto">Website Design</Button></li>
              <li><Button variant="link" className="p-0 h-auto">Local SEO</Button></li>
              <li><Button variant="link" className="p-0 h-auto">Digital Marketing</Button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="p-0 h-auto">About Us</Button></li>
              <li><Button variant="link" className="p-0 h-auto">Our Process</Button></li>
              <li><Button variant="link" className="p-0 h-auto">Portfolio</Button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Agency.new. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Button variant="link" className="p-0 h-auto text-sm">Privacy Policy</Button>
            <Button variant="link" className="p-0 h-auto text-sm">Terms of Service</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}