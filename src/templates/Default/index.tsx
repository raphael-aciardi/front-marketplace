import { DefaultHeader } from "@/components/DefaultHeader";

const DefaultTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <DefaultHeader />
            <div className="container px-10 py-10">
                {children}
            </div>
        </div>
    );
};

export default DefaultTemplate;
