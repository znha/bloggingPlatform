"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "../../../lib/features/auth/authSlice";
import LoginForm from "../../components/users/LoginForm";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "../../components/Spinner";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { status, error } = useSelector((state) => state.auth);

  const handleLogin = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (status === "succeeded") {
      toast.success("Login successful! 🎉");
      router.push("/");
    } else if (status === "failed") {
      toast.error(error);
    }
  }, [status, error]);

  return (
    <>
      {(status != "loading" || status != "succeeded") && <LoginForm onSubmit={handleLogin} />}
      {(status === "loading" || status === "succeeded")  && <Spinner />}
    </>
  );
}
