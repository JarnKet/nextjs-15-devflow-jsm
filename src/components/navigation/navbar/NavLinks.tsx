"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// UI
import { SheetClose } from "@/components/ui/sheet";

// Utilse
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();

  const userId = "1";

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }

        const LinkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4",
            )}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              height={20}
              width={20}
              className={cn({
                "invert-colors": !isActive,
              })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden",
              )}
            >
              {item.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.label}>
            {LinkComponent}
          </SheetClose>
        ) : (
          LinkComponent
        );
      })}
    </>
  );
};

export default NavLinks;
