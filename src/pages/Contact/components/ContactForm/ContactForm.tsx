import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import {
  ContactFormButton,
  ContactFormContainer,
  ContactFormInput,
  ContactFormInputGroup,
  ContactFormInputGroupContainer,
  ContactFormLabel,
  ContactFormTextArea,
  ContactErrorMessage,
  ContactSentSuccessMessage,
  ContactSentErrorMessage,
  ContactFormLoader,
} from "./styled-components"; // Asegúrate de tener estilos para ContactSentSuccessMessage y ContactSentErrorMessage
import { AlertCircle, Check } from "react-feather";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // Estado para el loader

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    user_name: Yup.string().required("* Required"),
    user_lastName: Yup.string().required("* Required"),
    user_email: Yup.string().email("* Invalid email format").required("* Required"),
    user_subject: Yup.string().required("* Required"),
    user_message: Yup.string().required("* Required"),
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_lastName: "",
      user_email: "",
      user_subject: "",
      user_message: "",
    },
    validationSchema,
    onSubmit: async (_values, { resetForm }) => {
      if (form.current) {
        setLoading(true); // Activar el loader
        const fullName = `${formik.values.user_name} ${formik.values.user_lastName}`;
        const formValues = {
          user_name: fullName,
          user_email: formik.values.user_email,
          user_subject: formik.values.user_subject,
          user_message: formik.values.user_message,
        };

        try {
          await emailjs.send(
            "service_n48939a",
            "template_bcrd4qk",
            formValues,
            "JOnUIgvKxSKzm0vzz"
          );
          setMessage("Message sent. Please check your email.");
          setIsError(false);
          resetForm();
        } catch (error) {
          setMessage("Error occurred. Please try again later.");
          setIsError(true);
          console.error("FAILED...", error);
        } finally {
          setLoading(false); // Desactivar el loader
        }
      }
    },
    validateOnMount: true,
  });

  return (
    <ContactFormContainer ref={form} onSubmit={formik.handleSubmit}>
      <ContactFormInputGroupContainer>
        <ContactFormInputGroup>
          <ContactFormLabel>
            Name{" "}
            {formik.touched.user_name && formik.errors.user_name && (
              <ContactErrorMessage>{formik.errors.user_name}</ContactErrorMessage>
            )}
          </ContactFormLabel>
          <ContactFormInput
            name='user_name'
            placeholder='Name'
            value={formik.values.user_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContactFormInputGroup>
        <ContactFormInputGroup>
          <ContactFormLabel>
            Last Name{" "}
            {formik.touched.user_lastName && formik.errors.user_lastName && (
              <ContactErrorMessage>{formik.errors.user_lastName}</ContactErrorMessage>
            )}
          </ContactFormLabel>
          <ContactFormInput
            name='user_lastName'
            placeholder='Last Name'
            value={formik.values.user_lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContactFormInputGroup>
      </ContactFormInputGroupContainer>
      <ContactFormInputGroup>
        <ContactFormLabel>
          Email{" "}
          {formik.touched.user_email && formik.errors.user_email && (
            <ContactErrorMessage>{formik.errors.user_email}</ContactErrorMessage>
          )}
        </ContactFormLabel>
        <ContactFormInput
          name='user_email'
          placeholder='Email'
          value={formik.values.user_email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </ContactFormInputGroup>
      <ContactFormInputGroup>
        <ContactFormLabel>
          Subject{" "}
          {formik.touched.user_subject && formik.errors.user_subject && (
            <ContactErrorMessage>{formik.errors.user_subject}</ContactErrorMessage>
          )}
        </ContactFormLabel>
        <ContactFormInput
          name='user_subject'
          placeholder='Subject'
          value={formik.values.user_subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </ContactFormInputGroup>
      <ContactFormInputGroup>
        <ContactFormLabel>
          Message{" "}
          {formik.touched.user_message && formik.errors.user_message && (
            <ContactErrorMessage>{formik.errors.user_message}</ContactErrorMessage>
          )}
        </ContactFormLabel>
        <ContactFormTextArea
          name='user_message'
          placeholder='Message'
          value={formik.values.user_message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </ContactFormInputGroup>
      <ContactFormButton
        type='submit'
        $disabled={!formik.isValid || loading} // Deshabilitar si hay un error o se está enviando
        disabled={!formik.isValid || loading}>
        {
          loading ? (
            <ContactFormLoader /> // Aquí puedes agregar un loader visual
          ) : !message ? (
            "Send"
          ) : isError ? (
            <ContactSentErrorMessage>
              <AlertCircle />
              {message}
            </ContactSentErrorMessage>
          ) : (
            <ContactSentSuccessMessage>
              <Check />
              {message}
            </ContactSentSuccessMessage>
          ) // Mostrar mensaje de error o éxito, o "Send" por defecto
        }
      </ContactFormButton>
    </ContactFormContainer>
  );
};

export default ContactForm;
