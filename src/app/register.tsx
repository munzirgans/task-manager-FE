import Image from 'next/image';

export default function Register(){
    return (
<div className="h-screen w-screen relative z-0" style={{
        backgroundImage: "url('background.jpg')",
        backgroundSize: 'cover'
    }}>
        <div className="bg-black absolute w-full h-full opacity-70 flex justify-center items-center z-10"></div>
        <div className="relative z-20 text-white w-full h-full flex justify-center items-center flex-col">
        <div className="w-[553px] h-[80px] flex justify-center items-center">
            <p className="font-bold text-3xl z-30">LOGIN</p>
            <div className="absolute z-20">
            <Image
                src={"/bg-login.png"}
                alt="bg"
                width={553}
                height={80}
            />
            </div>
        </div>
        <div className="w-[847px] h-[400px]">
            <div className="absolute top-44 bottom-50">
            <Image 
                src={"/bg-1.png"}
                alt="bg-1"
                width={847}
                height={400}
            />
            </div>
            <div className="z-40 relative flex justify-center items-center h-full">
            <div className="w-[741px] h-[186px] relative -top-2">
                <div className="mb-4">
                <p className="mb-2">USERNAME</p>
                <div className="relative">
                    <input type="text" placeholder="Type Here" className="border-[1px] border-[#189BFA] w-full placeholder:text-[#28A5C3] py-3 px-4 pl-12"/>
                    <div className="absolute top-2 left-2">
                    <Image 
                        src={'/fa-user.png'}
                        alt="fa-user"
                        width={34}
                        height={36}
                    />
                    </div>
                </div>
                </div>
                <div>
                <p className="mb-2">PASSWORD</p>
                <div className="relative">
                    <input type="text" placeholder="Type Here" className="border-[1px] border-[#189BFA] w-full placeholder:text-[#28A5C3] py-3 px-4 pl-12"/>
                    <div className="absolute top-2 left-2">
                    <Image 
                        src={'/fa-lock.png'}
                        alt="fa-lock"
                        width={34}
                        height={36}
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="absolute w-[824px] h-[376px] top-47">
            <div className="absolute">
            <Image 
                src={"/bg-2.png"}
                alt="bg-2"
                width={824}
                height={376}
            />
            </div>
        </div>
        <button className="w-[360px] h-[48px] flex justify-center items-center relative top-10">
            <div className="absolute w-full h-full">
            <Image 
            src={"/btn-login.png"}
            alt="btn-login"
            width={360}
            height={48}
            />
            </div>
            <p className="text-2xl font-bold z-30">LOGIN</p>
        </button>
        </div>
    </div>
    )
}