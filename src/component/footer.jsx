const Footer = () => {
    return (  
        <div className="w-full p-4 md:px-0  bg-[#d7d6d4] text-[#736447] mb-0">
            <div className="p-4 flex flex-col items-left gap-5 md:justify-between sm:flex-row flex-wrap sm:max-w-200 sm:mx-auto">
                <div className="my-7 max-w-70">
                    <h3 className="text-3xl  md:text-5xl font-bold my-3 font-serif">Bono</h3>
                    <p className="text-sm md:text-xl">There are people who can't start their day without a brewed cup of coffee and we understand them.</p>
                </div>
                <div className="my-7 max-w-70">
                    <h3 className="text-2xl md:text-4xl my-3">Contact us</h3>
                    <p className="text-sm md:text-xl">329 Queensbarrey street, North Melbourne VLC 3051 Australia 123 456 7890
                        cpffebaree.com
                      </p>
                </div>
                <div className="my-7 max-w-70 ">
                    <h3 className="text-2xl md:text-4xl my-3">Opening Hours</h3>
                    <p className="text-sm md:text-xl"> Monday - Friday.......6am - 9pm</p>
                    <p className="text-sm md:text-xl">Saturday... 6am - 10pm</p>
                    <p className="text-sm md:text-xl" >Sunday....Closed</p>
                    <p className="text-sm md:text-xl">Closed on special Days</p>
                </div>
            </div>
            <hr className="h-3 w-full"/>
            <div className="p-4 mt-4 text-center">
              <p className='md:text-xl'>Codex Sponsored by Coffee.com</p>
            </div>
        </div>
    );
}
 
export default Footer;