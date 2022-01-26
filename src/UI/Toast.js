import React from "react";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import { times } from "../assets/icons";

const Toast = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          width: "250px",
          padding: "5px 10px 5px 4px",
          color: "#713200",
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== "loading" && (
                <button onClick={() => toast.dismiss(t.id)}>{times}</button>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default Toast;
