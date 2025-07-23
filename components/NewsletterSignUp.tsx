import { useForm } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TSubscribeNewsletterSchema,
  subscribeNewsletterSchema,
} from "@/lib/types";

type SubscribeProps = {
  formClassName?: string;
  formFieldsClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
};

export default function NewsletterSignUp({
  formClassName,
  formFieldsClassName,
  inputClassName,
  buttonClassName,
}: SubscribeProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSubscribeNewsletterSchema>({
    resolver: zodResolver(subscribeNewsletterSchema),
  });

  const [state, handleSubmitSpree] = useFormSpree<TSubscribeNewsletterSchema>(
    "mzzveraz"
  );

  const onSubmit = async (data: TSubscribeNewsletterSchema) => {
    const res = await handleSubmitSpree({ email: data.email });
    if (res?.errors) {
      const errors = res.errors as Record<string, string>;
      if (errors.email) {
        setError("email", { type: "server", message: errors.email });
      }
    } else if (res?.ok) {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${formClassName}`}>
      <div className={`${formFieldsClassName}`}>
        <Input
          {...register("email")}
          className={`mb-2 ${inputClassName}`}
          type="text"
          placeholder="Email"
          name="email"
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          className={`disabled:cursor-none ${buttonClassName}`}
        >
          Подписаться
        </Button>
      </div>
      {state.succeeded && (
        <p className="text-green-700 bg-green-100 mb-2">Подписка оформлена</p>
      )}
      {errors.email && (
        <p className="text-red-500 mb-2">{`${errors.email.message}`}</p>
      )}
    </form>
  );
}
