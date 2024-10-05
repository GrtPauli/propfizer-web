import { TextInput } from "../../../../components"
import { DashboardLayout } from "../../../../layouts"

interface Props {
    onDismiss: () => void
}

export default function AddTenantForm({ onDismiss }: Props) {
    const headerPrefix = () => {
        return (
            <div className="flex items-center gap-5">
                <button onClick={onDismiss}>
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8751 11.9591H6.68135L12.1949 6.44557L10.722 4.97266L2.69385 13.0008L10.722 21.0289L12.1949 19.556L6.68135 14.0424H21.8751V11.9591Z" fill="#213481"/>
                    </svg>
                </button>

                <div className="text-primary font-semibold">
                    <p className="text-2xl">Create Verification Request</p>
                    <p className="text-sm max-w-[400px]">Please enter details about your tenant below so we can help you verify details about them</p>
                </div>
            </div>
        )
    }

  return (
    <DashboardLayout
        headerPrefix={headerPrefix()}
        activeLink="add-tenant"
    >
        <div className="px-20 mt-10 flex flex-col flex-1 justify-between">
            <div className="grid grid-cols-2 gap-10">
                <TextInput
                    label="First Name"
                    placeholder="Enter tenant's first name"
                />
                <TextInput
                    label="Last Name"
                    placeholder="Enter tenant's last name"
                />
                <TextInput
                    label="Email"
                    placeholder="Enter tenant's email address"
                />
                <div></div>
                <TextInput
                    label="Display Name"
                    placeholder="Enter your display name"
                />
                <TextInput
                    label="Duration of Time Remaining"
                    placeholder="Enter Time Here"
                />
                <p className="text-primary text-sm w-[300px]">Display name is the name the tenant sees is requesting their verification</p>
            </div>

            <div className="flex justify-end w-full">
                <button className="bg-primary text-center w-[300px] text-white font-semibold text-sm rounded-xl px-8 py-3">
                    SUBMIT REQUEST
                </button>
            </div>
        </div>
    </DashboardLayout>
  )
}
