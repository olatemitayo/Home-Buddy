"use client";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import AuthLayout from "./auth-layout";
import AuthButton from "../common/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRef } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  async function createAccount() {
    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    try {
      const response = await axios.post('/api/auth/client', {
        fullName: name,
        email,
        password
      });
  
      if (response.data) {
        console.log(response.data)
        router.push("/login");
      }
    } catch (error) {
      console.log(error)
      if(error instanceof AxiosError) {
        console.log(error.response?.data)
      }
    }
  }

  return (
    <>
      <AuthLayout>
        <div className="grid gap-3">
          <h1 className="text-[#1D1D1D)] text-[clamp(24px,2vw,32px)] font-semibold">
            Get Started
          </h1>
          <p className="text-[#828282]">
            Let’s get you started by creating an account
          </p>
        </div>
        {/* USER SIGNUP FORMS  */}
        <div className="w-full mt-10 grid gap-4">
          <TextInput
            ref={nameRef}
            label="Full Name"
            placeholder="Enter your full name"
            size="md"
            withAsterisk
            sx={{
              label: {
                marginBlockEnd: "4px",
                fontSize: "clamp(14px,1vw,16px)",
              },

              input: {
                "&::placeholder": {
                  fontSize: "clamp(14px,1vw,16px)",
                },
              },
            }}
          />
          <TextInput
            ref={emailRef}
            label="Email"
            placeholder="Enter your email"
            size="md"
            withAsterisk
            sx={{
              label: {
                marginBlockEnd: "4px",
                fontSize: "clamp(14px,1vw,16px)",
              },
              input: {
                "&::placeholder": {
                  fontSize: "clamp(14px,1vw,16px)",
                },
              },
            }}
          />
          <PasswordInput
            ref={passwordRef}
            label="Password"
            placeholder="Enter your password"
            size="md"
            withAsterisk
            sx={{
              label: { marginBlockEnd: "4px" },
            }}
          />
          <AuthButton onClick={createAccount} text="Get Started" />
        </div>

        {/* GOOGLE AND FACEBOOK AUTH  */}
        <div className=" grid gap-4">
          <div className="relative flex items-center justify-center ">
            <Button
              onClick={() => signIn("google")}
        <div className="grid gap-8">
          {/* USER SIGNUP FORMS  */}
          <div className="w-full mt-10 grid gap-4">
            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              size="md"
              withAsterisk
              sx={{
                label: {
                  marginBlockEnd: "4px",
                  fontSize: "clamp(14px,1vw,16px)",
                },

                input: {
                  "&::placeholder": {
                    fontSize: "clamp(14px,1vw,16px)",
                  },
                },
              }}
            />
            <TextInput
              label="Email"
              placeholder="Enter your email"
              size="md"
              withAsterisk
              sx={{
                label: {
                  marginBlockEnd: "4px",
                  fontSize: "clamp(14px,1vw,16px)",
                },
                input: {
                  "&::placeholder": {
                    fontSize: "clamp(14px,1vw,16px)",
                  },
                },
              }}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              size="md"
              withAsterisk
              sx={{
                label: { marginBlockEnd: "4px" },
              }}
            />
            <AuthButton text="Sign Up" />
          </div>

          {/* GOOGLE AND FACEBOOK AUTH  */}
          <div className=" grid gap-4">
            <div className="relative flex items-center justify-center ">
              <Button
                onClick={() => signIn("google")}
                size="md"
                className="border border-[#E0E0E0] bg-white hover:bg-white text-[#4F4F4F] font-semibold px-6 flex w-full justify-center items-center text-center gap-4"
              >
                <span className="me-1">
                  <Image
                    src={"/google.svg"}
                    alt="GOOGLE"
                    width={27}
                    height={27}
                  />
                </span>
                Sign up with Google
              </Button>
            </div>
            <div className="relative flex items-center justify-center ">
              <Button
                onClick={() => signIn("facebook")}
                size="md"
                className=" border border-[#E0E0E0] bg-white hover:bg-white text-[#4F4F4F] font-semibold px-6 flex w-full justify-center items-center text-center gap-4"
              >
                <span className="me-1">
                  <Image
                    src={"/fb.svg"}
                    alt="FACEBOOK"
                    width={27}
                    height={27}
                  />
                </span>
                Sign up with Facebook
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            Have an account?{" "}
            <span className="text-[#6E5DCF]">
              <Link href={"/login"}>Sign In</Link>
            </span>{" "}
          </p>
        </div>
      </AuthLayout>
    </>
  );
}
