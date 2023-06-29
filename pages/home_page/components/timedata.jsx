import React from 'react'

const Timedata = () => {
    const date = new Date().toDateString();
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div class=" flex border justify-center rounded-t-lg bg-white">
           
                <div className="mt-1 mb-1 ml-2 mr-2 text-base text-[#030303]">
                    <span className="set_date font-semibold">{date}</span>
                   
                
                <div className=" mt-1 mb-1 text-base text-[#050403]">
        
                    <span className="set_time font-semibold ">{time}</span>
                    </div>
                </div>
            
        </div>
    );
};

export default Timedata;