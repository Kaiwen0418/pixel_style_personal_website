import React from "react";
import { personalProfile } from "../../data/data";
import { useDevice } from '../../utils/DeviceContext';
import DottedBox from "../DottedBox";


const PersonalProfile = () => {
    const profile = personalProfile[1]
    const isMobileDevice = useDevice();

    if (!profile) {
        return <div>Profile not found</div>;
    }

    const details = isMobileDevice ? profile.details.slice(0,2) : profile.details

    const detailSection = (
            <div className="flex justify-center">
                <table className="text-sm">
                    <tbody>
                    {details.map(([label, value]) => (
                        <tr key={label}>
                            <td className="text-right pr-4">{label}</td>
                            <td className="text-left">{value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );

    return (
                <DottedBox
                    title={profile.name}
                    subtitle={profile.alias}
                    paddingTop="pt-14"
                    titleSize="text-3xl"
                >
                    <div className="mb-4 flex justify-center space-x-4">
                        <div className="w-36 h-36 overflow-hidden border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                            <img
                                src={profile.images.avatar}
                                alt={`${profile.name} pixel`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    {detailSection}
                </DottedBox>
    );
};

export default PersonalProfile;
