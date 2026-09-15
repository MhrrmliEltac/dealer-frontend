import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";
import { nav, services } from "./data";
import { useContactQuery } from "@/queries";
import { Mail, MapPin, Phone } from "lucide-react";

const cardClassName =
  "bg-[#1E1E1E] rounded-[20px] w-full gap-6 sm:gap-8 lg:gap-10";
const cardTitleClassName =
  "text-white font-bold text-xl sm:text-2xl lg:text-3xl leading-snug lg:leading-11.25 md:text-center";
const listClassName = "flex flex-col items-start justify-start w-fit md:mx-auto";
const itemTextClassName =
  "text-[#B2B2B2] font-regular text-base sm:text-xl lg:text-3xl leading-snug lg:leading-11.25";

const FooterQuickLinks = () => {
  const { data } = useContactQuery();

  const contacts = data
    ? [
        { id: 1, icon: MapPin, text: data[0].location, href: undefined },
        {
          id: 2,
          icon: Phone,
          text: data[0].phone,
          href: `tel:${data[0].phone}`,
        },
        {
          id: 3,
          icon: Mail,
          text: data[0].email,
          href: `mailto:${data[0].email}`,
        },
      ]
    : [];

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-16">
      <Card className={cn(cardClassName, "lg:max-w-73.5")}>
        <CardHeader>
          <span className={cardTitleClassName}>Sürətli Keçid</span>
        </CardHeader>
        <CardContent>
          <ul className={listClassName}>
            {nav.map((item) => (
              <li key={item.id}>
                <NavLink to={item.url}>
                  <span className={itemTextClassName}>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className={cn(cardClassName, "lg:max-w-100.75")}>
        <CardHeader>
          <span className={cardTitleClassName}>Xidmətlər</span>
        </CardHeader>
        <CardContent>
          <ul className={listClassName}>
            {services.map((item) => (
              <li key={item.id}>
                <NavLink to={item.url}>
                  <span className={itemTextClassName}>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className={cn(cardClassName, "lg:max-w-123.25")}>
        <CardHeader>
          <span className={cardTitleClassName}>Əlaqə</span>
        </CardHeader>
        <CardContent>
          <ul className={cn(listClassName, "gap-4")}>
            {contacts.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className={cn("size-6 shrink-0", "text-[#B2B2B2]")} />
                  <span className={itemTextClassName}>{item.text}</span>
                </>
              );

              return (
                <li key={item.id} className={cn("flex items-center gap-3")}>
                  {item.href ? (
                    <NavLink
                      to={item.href}
                      className={cn("flex items-center gap-3")}
                    >
                      {content}
                    </NavLink>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FooterQuickLinks;
