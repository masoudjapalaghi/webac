import { FC, MouseEventHandler } from "react";
import Button, { ButtonType } from "./MainButton";

type Gap = "gap-1" | "gap-2" | "gap-3" | "gap-4" | string;

interface btnType {
    id: number;
    label: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    active?: boolean;
}

interface ButtonGroupType extends ButtonType {
    buttons: btnType[];
    gap?: Gap;
}

const ButtonGroup: FC<ButtonGroupType> = (props: ButtonGroupType) => {
    const { buttons, gap = "", theme = "primary", ...rest } = props;

    const isPrimaryTheme = theme === "primary";
    return (
        <div className={`flex ${gap}`}>
            {buttons.map((item, index) => {
                const isFirstAndLast =
                    index === buttons.length - 1 || index === 0;
                const isFirstChild = index === 0;
                const conditinalRadius = isFirstChild ? "mainStart" : "mainEnd";

                return (
                    <Button
                        shape={isFirstAndLast ? conditinalRadius : "flat"}
                        // onClick={item.onClick}
                        {...rest}
                        {...(item.active
                            ? {
                                  variant: "primary",
                                  theme: isPrimaryTheme ? "info" : "primary",
                              }
                            : {
                                  theme,
                              })}
                    >
                        {item.label}
                    </Button>
                );
            })}
        </div>
    );
};

export default ButtonGroup;
