const Footer = () =>{
    return(
        <div className="bg-slate-100 w-full">
             <div className="flex flex-col sm:flex-row item-center justify-between border-b border-gray-400 px-5 py-5"></div>
            <div className="flex flex-col sm:flex-row item-center justify-between border-b border-gray-400 px-5 py-5">
            <div className="text-center sm:text-left">
        <h1 className="text-black font-bold text-xl px-5 py-5">NewsLetter</h1>
        <p className="text-gray-500 font-thin px-5">Subscribe to get information about products and coupons</p>
        </div>

        <div className="mt-4 sm:mt-0 w-full sm:w-auto  ">
            <input type="email"
            placeholder="Email"
            className="w-60 sm:w-80 p-2 mx-10 rounded-sm border border-grey-300 mr-2 text-black"/>
            <button className=" rounded-sm p-2 w-full sm:w-auto bg-green-600 text-white w-30 font-bold ">Subscribe</button>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between py-10 px-5 border-b border-gray-400 ">
            <div>
            <h2 className="text-black font-bold mb-4">Quick Links</h2>
            <ul className="text-gray-500 font-thin space-y-2">
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Return & Refund Policy</a></li>
                <li><a href="/">Shipping</a></li>
                <li><a href="/">FAQs</a></li>
            </ul>
            </div>
            <div className="mt-8 sm:mt-0">
                <h2 className="text-black font-bold mb-4">Company</h2>
                <ul className="text-gray-500 font-thin space-y-2">
                <li><a href="/">About Us</a></li>
                <li><a href="/">Find us</a></li>
                <li><a href="/">Affiliate</a></li>
                <li><a href="/">Carrer</a></li>
            </ul>
            </div>
            <div className="mt-8 sm:mt-0">
                <h2 className="text-black font-bold mb-4">Business</h2>
                <ul className="text-gray-500 font-thin space-y-2">
                <li><a href="/">Our Press</a></li>
                <li><a href="/">Check Out</a></li>
                <li><a href="/">Shop</a></li>
            </ul>
            </div>
            <div className="mt-8 sm:mt-0 text-center sm:text-left">
                <h2 className="text-gray-500 font-thin text-sm">Call us 24/7</h2>
                <h1 className="text-green-800 font-extrabold text-lg">03675763596</h1>
            </div>
            </div>
            <div className="bg-gray-500 text-center py-4">
            <h2 className="text-white text-sm font-thin">© All Rights Preserved</h2>
            </div>
        </div>
    )
}
export default Footer