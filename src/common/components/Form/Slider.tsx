import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";

// Styles
import s from "./form.module.css";
import useDirection from "@hook/useDirection";

// Type
interface SliderType extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Slider: FC<SliderType> = (props: SliderType) => {
    const { label = "Slider", ...rest } = props;
    const [value, setValue] = useState<string>("");

    const onInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValue(value);
    };

    const dir = useDirection();

    return (
        <div className="flex items-center gap-2">
            <label className="whitespace-nowrap text-sm font-medium">
                {label} :
            </label>
            <input
                onInput={onInput}
                className={s.inpurRange}
                type="range"
                dir={dir}
                defaultValue={0}
                {...rest}
            />
            <span className="bg-gray-700 text-sm text-white flex p-2 rounded-md leading-[8px]">
                {value || 0}
            </span>
        </div>
    );
};

export default Slider;
