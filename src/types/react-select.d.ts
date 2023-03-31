/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-types */
//  <reference path="../react/react.d.ts" />

interface ReactSelectProps<Option> {
    addLabelText?: string;
    allowCreate?: boolean;
    autoload?: boolean;
    backspaceRemoves?: boolean;
    cacheAsyncResults?: boolean;
    className?: string;
    clearable?: boolean;
    clearAllText?: string;
    clearValueText?: string;
    delimiter?: string;
    disabled?: boolean;
    // filterOption?: (option: Option, filterString: string) => Option;
    filterOptions?: (
        options: Array<Option>,
        filterString: string,
        values: Array<Object>
    ) => Array<Option>;
    ignoreCase?: boolean;
    inputProps?: Object;
    isLoading?: boolean;
    labelKey?: string;
    matchPos?: string;
    matchProp?: string;
    multi?: boolean;
    name?: string;
    newOptionCreator?: () => Option;
    noResultsText?: string;
    onBlur?: (event: FocusEventHandler<HTMLInputElement>) => void;
    onChange?: (newValue: string) => void;
    onFocus?: (event: Event) => void;
    onInputChange?: (inputValue: string) => void;
    onOptionLabelClick?: (value: string, event: Event) => void;
    optionRenderer?: () => void;
    options?: Array<Option>;
    placeholder?: string;
    searchable?: boolean;
    searchingText?: string;
    searchPromptText?: string;
    value?: unknown;
    valueKey?: string;
    valueRenderer?: () => void;
}

interface ReactAsyncSelectProps<Option> extends ReactSelectProps<Option> {
    cache?: unknown;
    loadOptions?: () => void;
    ignoreAccents?: boolean;
    isLoading?: boolean;
    loadingPlaceholder?: string;
}

interface SelectWithAsync {
    Async?: ReactAsyncSelectProps;
}
