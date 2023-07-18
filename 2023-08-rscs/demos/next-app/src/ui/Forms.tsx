/* eslint-disable @typescript-eslint/no-misused-promises */
import type {} from "react/experimental";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import type {} from "react-dom/experimental";

const addRecord = async function addRecord(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  for (const [key, value] of formData) {
    console.log(key, value);
  }
};

export const Forms = () => {
  return (
    <form
      action={async (formData: FormData) => {
        console.log("start transition");
        await addRecord(formData);
        console.log("end transition");
      }}
    >
      <input type="text" name="name" />
      <Submit />
      <Submit2 />
    </form>
  );
};

const Submit = () => {
  const { pending } = useFormStatus();
  return <input name="submit" type="submit" value="Submit" disabled={pending} />;
};

const Submit2 = () => {
  const { pending } = useFormStatus();
  return <input name="submit2" type="submit" value="Submit2" disabled={pending} />;
};
