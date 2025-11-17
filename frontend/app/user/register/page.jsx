"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { register } from "../../../lib/features/auth/authSlice";
import RegisterForm from "../../components/users/RegisterForm";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "../../components/Spinner";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { status, error } = useSelector((state) => state.auth);

  const handleRegister = (data) => {
    dispatch(register(data));
  };

  useEffect(() => {
    if (status === "succeeded") {
      toast.success("Registration successful! 🎉");
      router.push("/");
    } else if (status === "failed") {
      toast.error(error);
    }
  }, [status, error]);

  return (
    <>
      {(status != "loading" || status != "succeeded") && <RegisterForm onSubmit={handleRegister} />}
      {(status === "loading" || status === "succeeded")  && <Spinner />}
    </>
  );
}
