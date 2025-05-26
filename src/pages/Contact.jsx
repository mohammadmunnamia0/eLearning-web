
const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
                {/* Left Column: Web3form */}
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                    <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
                    {/* Placeholder for Web3form */}
                    <div className="bg-gray-100 p-6 rounded-lg h-96 flex items-center justify-center">
                        <p className="text-gray-500">Web3form goes here</p>
                    </div>
                </div>

                {/* Right Column: Contact Info */}
                <div className="w-full lg:w-1/2 px-4">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.045 6.79-3 9.5l1-11zM12 11c0 3.517 1.045 6.79 3 9.5l-1-11zM12 11a3 3 0 100-6 3 3 0 000 6z" />
                            </svg>
                            <div>
                                <h3 className="font-semibold text-gray-700">Address</h3>
                                <p className="text-gray-600">Bashundhara, Dhaka</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.134l-1.498.999a11.945 11.945 0 01-3.374-3.374l.999-1.498a1 1 0 011.134-.502z" />
                            </svg>
                            <div>
                                <h3 className="font-semibold text-gray-700">Mobile Number</h3>
                                <p className="text-gray-600">01888666619, 01864776487</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 9h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v11a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <h3 className="font-semibold text-gray-700">Email</h3>
                                <p className="text-gray-600">amadershikkha@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.893655319245!2d90.38806817468041!3d23.751171388748002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1748255461034!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;