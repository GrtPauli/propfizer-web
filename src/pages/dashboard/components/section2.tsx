import { Link } from "react-router-dom";
import PropertyItem from "./property";
import { AppTable } from "../../../components";

export default function DashboardSectionTwo({ userType }: any) {
  return (
    <div className="mt-10">
        <div className="flex justify-between items-center">
            <div className="text-primary font-semibold">
                <h2 className="text-2xl">{userType == 'landlord' ? 'Recent Listings' : 'Explore Listings'}</h2>
                <p className="text-sm">
                    {userType == 'landlord' ? 'Here are breakdown of your recent listings.' : 'Search for properties and spaces you may like'}    
                </p>
            </div>

            <Link to={userType == 'landlord' ?  '/my-listings' : '/listings'} className="bg-primary text-white rounded-xl px-8 py-3 text-sm font-semibold">
                Browse
            </Link>
        </div>
        
        {userType == 'landlord' ? (
            <div className="mt-5 h-[300px]">
                <LandLordListings/>
            </div>
        ) : (
            <div className="grid grid-cols-2 gap-8 mt-5">
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
                <PropertyItem/>
            </div>
        )}
    </div>
  )
}

const LandLordListings = () => {
    const columns: any = [
        {title: 'SPACE NAME', key: 'space_name'},
        {title: 'SPACE TYPE', key: 'space_type'},
        {title: 'LOCATION', key: 'location'},
        {title: 'STATUS', key: 'status'},
        {title: 'ACTION', key: 'action'},
    ]

    return (
        <AppTable
            columns={columns}
        />
    )
}