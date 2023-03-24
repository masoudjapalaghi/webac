import type { Meta, StoryObj } from "@storybook/react";
import IconNames from "@constant/IconNames";

import { Button } from "@components";

const meta: Meta<typeof Button> = {
    title: "components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        children: {
            name: "label",
            type: { name: "string", required: false },
            defaultValue: "Button",
            description: "add label  as children",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Button" },
            },
            control: {
                type: "text",
            },
        },
        icon: {
            name: "icon",
            type: { name: "string", required: false },
            // eslint-disable-next-line sonarjs/no-duplicate-string
            defaultValue: "Cannabis",
            description: "font Icon",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Cannabis" },
            },
            control: "select",
            options: IconNames,
        },
        variant: {
            description: "outline | primary | dashed | text ",
            defaultValue: "primary",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "primary" },
            },
            control: "select",
            options: ["outline", "primary", "dashed", "text"],
        },
        theme: {
            description: "primary | main | info | success | warning | error ",
            defaultValue: "primary",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "primary" },
            },
            control: "select",
            options: ["primary", "main", "info", "success", "warning", "error"],
        },
        size: {
            description: "large | medium | small",
            defaultValue: "medium",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "medium" },
            },
            control: "select",
            options: ["small", "medium", "large"],
        },
        block: {
            description: "true | false , not work when Shape === circle",
            defaultValue: "false",
            table: {
                type: { summary: "bolean" },
                defaultValue: { summary: "false" },
            },
            control: "boolean",
        },
        shape: {
            description: "main | circle | round | flat ",
            defaultValue: "main",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "main" },
            },
            control: "select",
            options: ["main", "circle", "round", "flat"],
        },
        disabled: {
            description: "true | false",
            defaultValue: "false",
            table: {
                type: { summary: "bolean" },
                defaultValue: { summary: "false" },
            },
            control: "boolean",
        },
        loading: {
            description: "true | false",
            defaultValue: "false",
            table: {
                type: { summary: "bolean" },
                defaultValue: { summary: "false" },
            },
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// variant
export const VariantPrimary: Story = {
    args: {
        children: "variant",
    },
};
export const VariantDashed: Story = {
    args: {
        children: "variant",
        variant: "dashed",
    },
};
export const VariantOutline: Story = {
    args: {
        children: "variant",
        variant: "outline",
    },
};
export const VariantText: Story = {
    args: {
        children: "variant",
        variant: "text",
    },
};
// Theme
export const ThemePrimary: Story = {
    args: {
        children: "Theme",
        theme: "primary",
    },
};
export const ThemeMain: Story = {
    args: {
        children: "Theme",
        theme: "main",
    },
};
export const ThemeInfo: Story = {
    args: {
        children: "Theme",
        theme: "info",
    },
};
export const ThemeSuccess: Story = {
    args: {
        children: "Theme",
        theme: "success",
    },
};
export const ThemeWarning: Story = {
    args: {
        children: "Theme",
        theme: "warning",
    },
};
export const ThemeError: Story = {
    args: {
        children: "Theme",
        theme: "error",
    },
};

// Size
export const FullSize: Story = {
    args: {
        children: "Block",
        block: true,
    },
};
export const Large: Story = {
    args: {
        size: "large",
        children: "Button size",
    },
};
export const Medium: Story = {
    args: {
        size: "medium",
        children: "Button Size",
    },
};

export const Small: Story = {
    args: {
        size: "small",
        children: "Button Size",
    },
};
// Shape
export const ShapeMain: Story = {
    args: {
        children: "Shape",
        shape: "main",
        theme: "success",
    },
};
export const ShapeCircleAndIcon: Story = {
    args: {
        children: "A",
        shape: "circle",
        theme: "success",
        variant: "dashed",
    },
};
export const ShapeRound: Story = {
    args: {
        children: "Shape",
        shape: "round",
        theme: "success",
        variant: "outline",
    },
};
export const Shapeflat: Story = {
    args: {
        children: "Shape",
        shape: "flat",
        theme: "success",
    },
};
// loading
export const LoadingByText: Story = {
    args: {
        children: "LoadingByText",
        icon: "Cannabis",
        shape: "flat",
        theme: "success",
        loading: true,
    },
};
export const LoadingByIcon: Story = {
    args: {
        children: "",
        icon: "Cannabis",
        shape: "flat",
        theme: "success",
        loading: true,
    },
};
// Icon
export const IconByText: Story = {
    args: {
        children: "",
        icon: "Cannabis",
        shape: "circle",
        theme: "success",
    },
};
export const IconWithoutText: Story = {
    args: {
        children: "icon text",
        icon: "Cannabis",
        shape: "round",
        theme: "success",
    },
};
// Disabled
export const Disabled: Story = {
    args: {
        children: "Disabled",
        icon: "Cannabis",
        shape: "flat",
        theme: "success",
        disabled: true,
    },
};
