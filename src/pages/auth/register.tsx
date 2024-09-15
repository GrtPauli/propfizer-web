import { TextInput } from "../../components";
import { AuthLayout } from "../../layouts";

export default function RegisterPage() {
  return (
    <AuthLayout>
        <div className="flex flex-col justify-center items-center w-full p-10">
            <h2 className="font-black text-3xl text-black mb-2">Get Started</h2>
            <p className="text-primary text-sm font-normal">Welcome to PropFizer - Let’s Create your account</p>

            <div className="w-full flex flex-col gap-3 mt-5">
                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                />
                <TextInput
                    label="Password"
                    placeholder="Enter your password"
                />
                <TextInput
                    label="Password"
                    placeholder="Enter your password"
                />

                <div className="w-full mt-3">
                    <button className="bg-primary font-semibold h-[50px] text-white rounded-xl flex items-center justify-center w-full">
                        CONTINUE
                    </button>

                    <div className="mt-3 text-primary font-normal text-sm flex items-center justify-center text-center">
                    Already have an account?
                        <button className="font-semibold ml-2">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </AuthLayout>
  )
}
