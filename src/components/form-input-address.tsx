import { type FormInputProps } from "@/components/form-input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { env } from "@/env.mjs";
import { cn } from "@/lib/utils";
import { AddressAutofill } from "@mapbox/search-js-react";
import { type AddressAutofillProps } from "@mapbox/search-js-react/dist/components/AddressAutofill";
import { useFormContext } from "react-hook-form";

export interface FormInputAddressProps extends FormInputProps {
  geoName: string;
}

export function FormInputAddress({
  name,
  geoName,
  control,
  label,
  placeholder,
  description,
  labelClassName,
  ...props
}: FormInputAddressProps) {
  const { setValue } = useFormContext();

  const handleOnRetrieveAddress: AddressAutofillProps["onRetrieve"] = (res) => {
    const feat = res.features[0];

    if (geoName) setValue(geoName, feat?.geometry, { shouldTouch: true });

    setTimeout(
      () =>
        setValue(name, feat?.properties.full_address, {
          shouldTouch: true,
        }),
      500,
    );
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className={cn(labelClassName)}>{label}</FormLabel>
          )}
          <FormControl className="w-full">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <AddressAutofill
              accessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
              onRetrieve={handleOnRetrieveAddress}
            >
              <Input
                placeholder={placeholder ?? `Enter ${name}...`}
                {...props}
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  if (!e.target.value)
                    setValue(geoName, null, { shouldTouch: true });
                }}
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
              />
            </AddressAutofill>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
