import React, { useState } from "react";
import FormWrapper from "@/components/forms/FormWrapper";
import InputField from "@/components/forms/InputField";
import SubmitButton from "@/components/ui/buttons/SubmitButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Validate and handle form submission
    console.log("Form Submitted", formData);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={errors.name}
      />
      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
      />
      <SubmitButton label="Submit" />
    </FormWrapper>
  );
}
