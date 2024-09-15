import { TextInput } from "../../components";
import { AuthLayout } from "../../layouts";

export default function LoginPage() {
  return (
    <AuthLayout>
        <div className="flex flex-col justify-center items-center w-full p-10">
            <h2 className="font-black text-3xl text-black mb-2">Welcome Back</h2>
            <p className="text-primary text-sm font-normal">Let's continue where you left off</p>

            <div className="w-full flex flex-col gap-5 mt-5">
                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                />
                <TextInput
                    label="Password"
                    placeholder="Enter your password"
                />
                <div className="flex justify-end">
                    <button className="text-primary font-normal text-sm">
                        Forgot Password?
                    </button>
                </div>

                <div className="w-full mt-5">
                    <button className="bg-primary font-semibold h-[50px] text-white rounded-xl flex items-center justify-center w-full">
                        LOGIN
                    </button>

                    <div className="mt-5 text-primary font-normal text-sm flex items-center justify-center text-center">
                        Don't have an account? 
                        <button className="font-semibold ml-2">Signup</button>
                    </div>
                </div>
            </div>
        </div>
    </AuthLayout>
  )
}
