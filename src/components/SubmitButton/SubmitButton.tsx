'use client';

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom";

type Props = {
    label?: string;
    disabled?: boolean;
}

const SubmitButton = ({ disabled, label = 'Submit' }: Props) => {
    const { pending } = useFormStatus();

    const isDisabled = pending || disabled;

    return (
        <Button type="submit" disabled={isDisabled}>{label}</Button>
    );
};

export default SubmitButton;