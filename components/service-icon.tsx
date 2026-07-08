import {
  AirplaneTilt,
  Crown,
  Engine,
  Handshake,
  ClipboardText,
  ChartLineUp,
} from "@phosphor-icons/react/ssr";
import type { Icon, IconWeight } from "@phosphor-icons/react";
import type { IconKey } from "@/lib/site";

const iconMap: Record<IconKey, Icon> = {
  "airplane-tilt": AirplaneTilt,
  crown: Crown,
  engine: Engine,
  handshake: Handshake,
  clipboard: ClipboardText,
  finance: ChartLineUp,
};

export function ServiceIcon({
  icon,
  className,
  weight = "duotone",
}: {
  icon: IconKey;
  className?: string;
  weight?: IconWeight;
}) {
  const Component = iconMap[icon];
  return <Component className={className} weight={weight} aria-hidden />;
}
