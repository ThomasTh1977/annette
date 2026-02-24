import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

interface CTAButtonProps {
  variant?: "whatsapp" | "phone";
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ variant = "whatsapp", children, className }: CTAButtonProps) {
  const href = variant === "whatsapp" ? buildWhatsAppLink() : `tel:${siteConfig.phone}`;
  const isExternal = variant === "whatsapp";

  return (
    <Button asChild className={className}>
      <a href={href} {...(isExternal ? { rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    </Button>
  );
}