import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="flex border border-orange-400 bg-orange-100 mb-5 overflow-hidden">
            <p className="border border-orange-300 bg-orange-700 text-white p-2 font-concert ">Important</p>
            <p className="font-medium text-gray-500 py-2"><Marquee> A restaurant management system (RMS) is a software application that helps you automate and streamline all aspects of your restaurant business, from inventory management to scheduling to customer service. A good RMS can save you time, money, and headaches, and help you improve your bottom line.</Marquee></p>
        </div>
    );
};

export default Marque;