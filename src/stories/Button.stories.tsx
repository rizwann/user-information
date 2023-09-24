import type { Meta, StoryObj } from "@storybook/react";
import { ArrowBigRight } from "lucide-react";
import Button from "../components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
  },
  parameters: {
    layout: "centered",
  },
};

export const Destructive: Story = {
  args: { children: "Destructive Button", variant: "destructive" },
  parameters: {
    layout: "centered",
  },
};

export const Outline: Story = {
  args: { children: "Outline Button", variant: "outline" },
  parameters: {
    layout: "centered",
  },
};

export const Ghost: Story = {
  args: { children: "Ghost Button", variant: "ghost" },
  parameters: {
    layout: "centered",
  },
};

export const Link: Story = {
  args: { children: "Link Button", variant: "link" },
  parameters: {
    layout: "centered",
  },
};

export const Small: Story = {
  args: { children: "Small Button", size: "sm", variant: "secondary" },
  parameters: {
    layout: "centered",
  },
};

export const Large: Story = {
  args: { children: "Large Button", size: "lg" },
  parameters: {
    layout: "centered",
  },
};

export const Icon: Story = {
  args: {
    children: (
      <>
        <ArrowBigRight />
      </>
    ),
    size: "icon",
    variant: "outline",
  },
  parameters: {
    layout: "centered",
  },
};
