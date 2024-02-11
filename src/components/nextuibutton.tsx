import { Button } from "@nextui-org/button";
import React from "react";

const NextuiButton: any = ({
  children,
  className,
  onPress,
  size,
}: {
  children: React.ReactNode;
  onPress?: any;
  className?: any;
  size?: "sm" | "md" | "lg" | undefined;
}) => {
  return (
    <Button size={size} onPress={onPress} className={className}>
      {children}
    </Button>
  );
};

export default NextuiButton;
