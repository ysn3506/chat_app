'use client';

import Input from "@/app/components/input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);
    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN');
        }
    }, [variant])

    const { formState: { errors }, handleSubmit, register } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant === 'REGISTER') {
            // axios
        }
        if (variant === 'LOGIN') {
            //next auth 
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        // nextauth social sign in
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input />
                </form>

            </div>

        </div>
    );
};

export default AuthForm;