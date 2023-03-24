import type { Meta, StoryObj } from "@storybook/react";
// Types
import IconNames from "@constant/IconNames";

import { Icon } from "@components";

const meta: Meta<typeof Icon> = {
    title: "components/Icon",
    component: Icon,
    tags: ["autodocs"],
    argTypes: {
        name: {
            name: "name",
            type: { name: "string", required: true },
            defaultValue: "Icon",
            description: "icon name",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Cannabis" },
            },
            control: "select",
            options: IconNames,
        },
        color: {
            name: "color",
            type: { name: "string", required: false },
            defaultValue: "primary",
            description:
                "color icon primary | info | success | warning | error",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "primary" },
            },
            control: "select",
            options: ["primary", "info", "success", "warning", "error"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    args: {
        name: "Cannabis",
    },
};
